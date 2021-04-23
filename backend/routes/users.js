const { User } = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get(`/`, async (req, res) => {
    const userList = await User.find().select('-passwordHash');

    if (!userList) {
        res.status(500).json({ success: false })
    }
    res.send(userList);
})

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id).select('-passwordHash');

    if (!user) {
        res.status(500).json({ message: 'The user with the given ID was not found.' })
    }
    res.status(200).send(user);
})

router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return res.status(400).send('The user not found');
    }

    if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const accessToken = jwt.sign({ userId: user.id }, process.env.secret);

        res.status(200).send({
            auth: true,
            user: user,
            accessToken: accessToken
        })
    } else {
        res.status(400).send('Password is wrong!');
    }
})

router.post('/register', async (req, res) => {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
        console.log('here')
        return res.status(400).send('A user with this email already exists');
    }

    let user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        fullAddress: req.body.fullAddress,
        addressPrimaryText: req.body.addressPrimaryText,
        addressSecondaryText: req.body.addressSecondaryText,
        addressPlaceId: req.body.addressPlaceId,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        isAdmin: false,
    })
    user = await user.save();

    if (!user) {
        return res.status(400).send('The user cannot be created!');
    }

    const accessToken = jwt.sign({ userId: user.id }, process.env.secret);

    return res.status(200).send({
        auth: true,
        user: user,
        accessToken: accessToken
    });
})

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id).then(user => {
        if (user) {
            return res.status(200).json({ success: true, message: 'the user is deleted!' })
        } else {
            return res.status(404).json({ success: false, message: "user not found!" })
        }
    }).catch(err => {
        return res.status(500).json({ success: false, error: err })
    })
})

module.exports = router;