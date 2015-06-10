var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next){
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user:'stephaniesnopek@gmail.com',
      pass: 'something'
    }
    //don't forget to add password for this to actually send.

  });

  var mailOptions = {
    from: 'Steve Gill <stevengill97@gmail.com>',
    to: 'stephaniesnopek@gmail.com',
    subject: 'Website Submission',
    text: 'you have a new submission with the following details...Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.message+'',
    html: '<p> You got a new submission with the following details...</p><ul><li>Name: '+req.body.name+'</li> Email: '+req.body.email+'</li> Message: '+req.body.message+'</li></ul>'

  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.redirect('/');
    } else {
      console.log('Message Sent:'+info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;
