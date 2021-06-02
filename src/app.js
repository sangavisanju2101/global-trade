require("./db/mongoose")
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const User = require('./models/user'); 
const Vendor = require('./models/vendor');
const Admin = require('./models/admin'); 
const Product = require('./models/product'); 
const Adv= require('./models/adv'); 
const Address = require('./models/address'); 
const Review = require('./models/review'); 
const Country = require('./models/country');
const State = require('./models/state');
const Category = require('./models/category');
const Subcategory = require('./models/subcategory');
const Plan = require('./models/plan'); 
const Order = require('./models/order'); 
const Cart = require('./models/cart'); 
const Wishlist = require('./models/wishlist'); 
const Payment = require('./models/payment'); 

const routes = require('./router');
routes.apiRoutes(app); 

// Define Path for express config
const publicDirPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../template/views');
const partialPath = path.join(__dirname,'../template/partials' );

// setup static directory to serve

app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);

hbs.registerPartials(partialPath);

const adminService = require('../src/api/admin/admin.service');

app.get('',(req,res) => {
    res.render('login');
});

app.get('/register',(req,res)=>{
    res.render("register")
})


app.get('/forgot',(req,res)=>{
    res.render("forgot")
})

app.get('/home',(req,res)=>{
    res.render("home")
})

app.get('/admin/add',(req,res)=>{
    res.render("addAdmin")
})

//app.get('*', (req,res) => {
//   res.render("404")
//});

app.listen('3000', () =>{
    console.log("the server is up on 3000 port")
});