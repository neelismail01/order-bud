const { Product } = require('../models/product');
const { Category } = require('../models/category');
const { Business } = require('../models/business');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const query = req.query.searchTerm;

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
                $or: [
                    {
                        "category.name": { $regex: new RegExp(query, "i") }
                    },
                    {
                        "name": { $regex: new RegExp(query, "i") }
                    },
                    {
                        "brand": { $regex: new RegExp(query, "i") }
                    }
                ]
            }
        },
        {
            $sort: {
                "rating": -1,
            }
        }
    ])
        .exec((err, productMatches) => {
            if (err) {
                res.send(500).send({ msg: "Unable to reconcile categories" });
            }

            Business.aggregate([
                {
                    $match: {
                        "name": { $regex: new RegExp(query, "i") }
                    }
                },
                {
                    $lookup: {
                        from: Category.collection.name,
                        localField: "categories",
                        foreignField: "_id",
                        as: "categories"
                    }
                },
                {
                    $sort: {
                        "rating": -1
                    }
                }
            ])
                .exec((err, businessMatches) => {
                    if (err) {
                        return res.status(500).send({ msg: "Unable to reconcile business names" });
                    }

                    console.log(businessMatches)
                    return res.status(200).send({
                        productMatches,
                        businessMatches
                    })
                })
        })
})

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
            return res.send(500).send({ msg: "Unable to reconcile categories" });
        }
        console.log(matches);
        res.status(200).send(matches);
    });
})

module.exports = router;