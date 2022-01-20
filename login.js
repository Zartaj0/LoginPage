const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const {v4:uuidv4} = require('uuid');
var app = express();
const router = require('./routers');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')

app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')))
app.use(session({
// secret:"secret",
   secret:uuidv4(),
  resave:false,
  saveUninitialized:true

}))
app.use('/route',router)
app.get('/',function (req,res) {
  res.render('login')
})

app.listen(3000)
