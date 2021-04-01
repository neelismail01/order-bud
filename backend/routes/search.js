const {Product} = require('../models/product');
const {Category} = require('../models/category');

const express = require('express');
const router = express.Router();

router.get('/category', (req, res) => {
    const query = req.query.category;

    Product.aggregate([
        {
            $lookup: {
                from: Category.collection.name,
                localField: "category",
                foreignField: "_id",
                as: "category"
            }
        },
        {
            $match: {
                "category.name": query
            }
        }
    ]).exec((err, matches) => {
        if (err) {
            res.send(500).send({msg: "Unable to reconcile categories"});
        }
        res.status(200).send(matches);
    });
})

module.exports = router;