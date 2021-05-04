const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const bodyParser = require('body-parser');

// Define Path for express config
const publicDirPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../template/views');
const partialPath = path.join(__dirname,'../template/partials' );

// setup static directory to serve

app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);

hbs.registerPartials(partialPath);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/login',function(req,res){
    res.render('login');
});

app.get('/registration',function(req,res){
    res.render('registration');
});

app.get('/forgotpwd',function(req,res){
    res.render('forgotpwd');
});

app.get('*',function(req,res){
    res.render("404")
});

app.listen('3000', ()=>{
    console.log("the server is up on 3000 port")
});