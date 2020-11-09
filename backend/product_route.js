const express = require('express');
const productRoutes = express.Router();
let Product = require('./schema/Products');
let RouteNamesLib = require("./constants/constants");
let ProductRouteNames=RouteNamesLib.ProductRouteNames;
//NOTE  Registration route
productRoutes.route(ProductRouteNames.add).post(function(req, res) {
    let product = new Product(req.body);
    product.save()
        .then(reg => {
            res.sendStatus(200);
        })
        .catch(err => {
            res.status(400).send("Failed to store to database");
        });
});
// Login Router
// productRoutes.route(RouteNames.login).post(function(req, res) {
//     Product.findOne({ user_name: req.body.user_name })
//         .then(user => {
//             console.log("User from login", user)
//             if (!user) res.sendStatus(204);
//             else {
//                 bcrypt.compare(req.body.password, user.password)
//                     .then(passwordMatch => passwordMatch ? res.sendStatus(200) : res.sendStatus(204))
//             }
//         });
// });
//Add Review
productRoutes.route(ProductRouteNames.add_review).post(function(req, res) {
    Product.findOne({ product_name: req.body.product_name })
        .then(product => {
            // console.log("User from login", user)
            if (!product) res.sendStatus(204);
            else {
                console.log(req.body.reviews);
                product.reviews.push(req.body.reviews);
                console.log(req.body);
                product.save()
                .then(reg => {
                    res.sendStatus(200);
                })
                .catch(err => {
                    res.status(400).send("Failed to store to database");
                });            
            }
        });
});

// Username validation Router
productRoutes.route(ProductRouteNames.validate)
    .post(function(req, res) {
        Product.findOne({ product_name: req.body.product_name })
            .then(user => user ? res.sendStatus(204) : res.sendStatus(200))
    });
//order
productRoutes.route(ProductRouteNames.order).post(function(req, res) {
    Product.findOne({ product_name: req.body.product_name })
        .then(product => {
            // console.log("User from login", user)
            if (!product) res.sendStatus(204);
            else {
                console.log(product);
                product.orders.push(req.body.orders);
                console.log(product);
                product.save()
                .then(reg => {
                    res.sendStatus(200);
                })
                .catch(err => {
                    res.status(400).send("Failed to store to database");
                });            
            }
        });
});

//change State:
productRoutes.route(ProductRouteNames.change_state).post(function(req, res) {
    console.log(req.body.product_name);
    Product.findOne({ product_name: req.body.product_name })
        .then(product => {
            // console.log("User from login", user)
            if (!product) res.sendStatus(204);
            else {
                console.log(req.body.status);
                product.status=req.body.status;
                console.log(product);
                product.save()
                .then(reg => {
                    res.sendStatus(200);
                })
                .catch(err => {
                    res.status(400).send("Failed to store to database");
                });            
            }
        });
});

productRoutes.route(ProductRouteNames.cancel).post(function(req, res) {
    Product.findOne({ product_name: req.body.product_name })
        .then(product => {
            // console.log("User from login", user)
            if (!product) res.sendStatus(204);
            else {
                product.status='Cancelled';
                console.log(product.status);
                product.save()
                .then(reg => {
                    res.sendStatus(200);
                })
                .catch(err => {
                    res.status(400).send("Failed to store to database");
                });            
            }
        });
});



// Get allData
productRoutes.route(ProductRouteNames.data).get(function(req, res) {
    Product.find((err, data) => err ? res.status(400).send("Error occured") : res.json(data));
});

module.exports = productRoutes;