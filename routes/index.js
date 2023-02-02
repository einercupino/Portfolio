var express = require('express');
var router = express.Router();

/* HOME */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* HOME */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* ABOUT US */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me'});
});

/* PRODUCTS */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* SERVICES */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});


/* CONTACT US */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us'});
});


module.exports = router;
