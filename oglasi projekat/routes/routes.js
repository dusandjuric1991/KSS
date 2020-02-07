const express = require('express');
const router = express.Router();
const Ad = require('../models/ad');

router.get('/', function(req, res){
    Ad.find({}).then((ads) => {
        res.locals = {
            ads: ads
        }
        res.render('home.ejs');
    })
})

router.get('/new_ad', function(req, res){
    res.render('new_ad.ejs');
})

router.post('/new_ad', function(req, res){
    Ad.create({
        title: req.body.title,
        location: req.body.location,
        price: req.body.price,
        description: req.body.description,
        date: req.body.date,
        picture: req.body.picture
    }).then((ad) => {
        res.redirect('/');
    })
})

module.exports = router;