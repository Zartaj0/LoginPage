const express = require('express');
var router=express.Router();
var credential ={
  email:'admin@gmail.com',
  password:'admin123'
}
  router.post('/login',function (req,res) {
    if(req.body.email==credential.email && req.body.password==credential.password){
      req.session.user=req.body.email;
      res.redirect('/route/dashboard')

    }else {
      res.end('invalid')
    }

  });
  router.get('/dashboard',function(req,res) {
    if (req.session.user) {
      res.render('dashboard',{user:req.session.user})

    }else {
      res.send("Unauthorized user")
    }
})
router.get('/logout',function (req,res) {
  req.session.destroy(function (err) {
    if (err) {
      throw err
    }else{
      res.render('login',{title:"Express",logout:'Logout succesfull'})
    }

  })

})
module.exports=router
