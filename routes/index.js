var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var auth = require('../module/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});





router.post('/mail', function(req, res, next) {
  // res.send('index');
  var email = req.body.email;
  var msg = req.body.message;
	
	auth.sendEmail(email, msg, function(obj){
			console.log(obj);
			res.render('message');
	});



});

router.get('/mail', function(req, res, next) {

	res.render('error');

});








module.exports = router;
