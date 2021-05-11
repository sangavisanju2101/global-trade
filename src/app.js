require("./db/mongoose")
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
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

//CRUD operation for user table to post a data
app.post('/api/user', (req,res) => {
    var user = new User(req.body); 
    user.save().then((user) => {
        res.status(201).send({
            "user" : user
        })
    }).catch((err) => {
        res.status(500).send(err); 
    })
})

//CRUD operation for user table to find a data 
app.get('/api/user', (req,res) => {  
    User.find(req.query).then((users) => {
        res.status(200).send({
            users : users
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for user table -- findOne 
app.get('/api/users', (req,res) => { 
    User.findOne(req.query).then((users) => {
        res.status(200).send({
            users : users
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for user table to findById
app.get('/api/user/:id', (req,res) => {
    User.findById(req.params.id).then((users) => {
        res.status(200).send({
            users : users
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for user table to findByIdAndUpdate
app.put('/api/user/:id', (req,res) => { 
    User.findByIdAndUpdate(req.params.id,req.body).then((updateuser) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for user table to delete data
app.delete('/api/user/:id', (req,res) => { 
    User.findByIdAndDelete(req.params.id).then((updateuser) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for vendor table to post a data
app.post('/api/vendor', (req,res) => {
    var vendor = new Vendor(req.body);
    vendor.save().then((vendor) => {
        res.status(201).send({
            "vendor" : vendor
        })
    }).catch((err) => {
        res.status(500).send(err);
    })
})

//CRUD operation for vendor table to find a data 
app.get('/api/vendor', (req,res) => { 
    Vendor.find(req.query).then((vendors) => {
        res.status(200).send({
            vendors : vendors
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for vendor table -- findOne 
app.get('/api/vendors', (req,res) => { 
    Vendor.findOne(req.query).then((vendors) => {
        res.status(200).send({
            vendors : vendors
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for vendor table to findById
app.get('/api/vendor/:id', (req,res) => {
    Vendor.findById(req.params.id).then((vendors) => {
        res.status(200).send({
            vendors : vendors
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for vendor table to findByIdAndUpdate
app.put('/api/vendor/:id', (req,res) => { 
    Vendor.findByIdAndUpdate(req.params.id,req.body).then((updatevendor) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for vendor table to delete data
app.delete('/api/vendor/:id', (req,res) => { 
    Vendor.findByIdAndDelete(req.params.id).then((updatevendor) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for admin table to post a data
app.post('/api/admin', (req,res) => {
    var admin = new Admin(req.body);
    admin.save().then((admin) => {
        res.status(201).send({
            "admin" : admin
        })
    }).catch((err) => {
        res.status(500).send(err);
    })
})

//CRUD operation for admin table to find a data 
app.get('/api/admin', (req,res) => {
    Admin.find(req.query).then((admins) => {
        res.status(200).send({
            admins : admins
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for Admin table -- findOne 
app.get('/api/admins', (req,res) => { 
    Admin.findOne(req.query).then((admins) => {
        res.status(200).send({
            admins : admins
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for Admin table to findById
app.get('/api/admin/:id', (req,res) => {
    Admin.findById(req.params.id).then((admins) => {
        res.status(200).send({
            admins : admins
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for Admin table to findByIdAndUpdate
app.put('/api/admin/:id', (req,res) => { 
    Admin.findByIdAndUpdate(req.params.id,req.body).then((updateadmin) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for admin table to delete data
app.delete('/api/admin/:id', (req,res) => { 
    Admin.findByIdAndDelete(req.params.id).then((updateadmin) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for product table to post a data
app.post('/api/product', (req,res) => {
    var product = new Product(req.body);
    product.save().then((product) => {
        res.status(201).send({
            "product" : product
        })
    }).catch((err) => {
        res.status(500).send(err);
    })
})

//CRUD operation for product table to find a data 
app.get('/api/product', (req,res) => { 
    Product.find(req.query).then((products) => {
        res.status(200).send({
            products : products
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for Product table -- findOne 
app.get('/api/products', (req,res) => {  
    Product.findOne(req.query).then((products) => {
        res.status(200).send({
            products : products
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for Product table to findById
app.get('/api/product/:id', (req,res) => {
    Product.findById(req.params.id).then((products) => {
        res.status(200).send({
            products : products
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for Product table to findByIdAndUpdate
app.put('/api/product/:id', (req,res) => { 
    Product.findByIdAndUpdate(req.params.id,req.body).then((updateproduct) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for Product table to delete data
app.delete('/api/product/:id', (req,res) => { 
    Product.findByIdAndDelete(req.params.id).then((updateproduct) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for adv table to post a data
app.post('/api/adv', (req,res) => {
    var adv = new Adv(req.body);
    adv.save().then((adv) => {
        res.status(201).send({
            "adv" : adv
        })
    }).catch((err) => {
        res.status(500).send(err);
    })
})

//CRUD operation for adv table to find a data 
app.get('/api/adv', (req,res) => { 
    Adv.find(req.query).then((advs) => {
        res.status(200).send({
            advs : advs
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for adv table -- findOne 
app.get('/api/advs', (req,res) => { 
    Adv.findOne(req.query).then((advs) => {
        res.status(200).send({
            advs : advs
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for adv table to findById
app.get('/api/adv/:id', (req,res) => {
    Adv.findById(req.params.id).then((advs) => {
        res.status(200).send({
            advs : advs
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for adv table to findByIdAndUpdate
app.put('/api/adv/:id', (req,res) => { 
    Adv.findByIdAndUpdate(req.params.id,req.body).then((updateadv) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for adv table to delete data
app.delete('/api/adv/:id', (req,res) => { 
    Adv.findByIdAndDelete(req.params.id).then((updateadv) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for address table to post a data
app.post('/api/address', (req,res) => {
    var address = new Address(req.body);
    address.save().then((address) => {
        res.status(201).send({
            "address" : address
        })
    }).catch((err) => {
        res.status(500).send(err);
    })
})

//CRUD operation for address table to find a data 
app.get('/api/address', (req,res) => {
    Address.find(req.query).then((addresses) => {
        res.status(200).send({
            addresses : addresses
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for Address table -- findOne 
app.get('/api/addresses', (req,res) => { 
    Address.findOne(req.query).then((addresses) => {
        res.status(200).send({
            addresses : addresses
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for Address table to findById
app.get('/api/address/:id', (req,res) => {
    Address.findById(req.params.id).then((addresses) => {
        res.status(200).send({
            addresses : addresses
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for Address table to findByIdAndUpdate
app.put('/api/address/:id', (req,res) => { 
    Address.findByIdAndUpdate(req.params.id,req.body).then((updateaddress) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for Address table to delete data
app.delete('/api/address/:id', (req,res) => { 
    Address.findByIdAndDelete(req.params.id).then((updateaddress) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for review table to post a data
app.post('/api/review', (req,res) => {
    var review = new Review(req.body);
    review.save().then((review) => {
        res.status(201).send({
            "review" : review
        })
    }).catch((err) => {
        res.status(500).send(err);
    })
})

//CRUD operation for review table to find a data 
app.get('/api/review', (req,res) => { 
    Review.find(req.query).then((reviews) => {
        res.status(200).send({
            reviews : reviews
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for review table -- findOne 
app.get('/api/reviews', (req,res) => {
    Review.findOne(req.query).then((reviews) => {
        res.status(200).send({
            reviews : reviews
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for review table to findById
app.get('/api/review/:id', (req,res) => {
    Review.findById(req.params.id).then((reviews) => {
        res.status(200).send({
            reviews : reviews
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for review table to findByIdAndUpdate
app.put('/api/review/:id', (req,res) => { 
    Review.findByIdAndUpdate(req.params.id,req.body).then((updatereview) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for review table to delete data
app.delete('/api/review/:id', (req,res) => { 
    Review.findByIdAndDelete(req.params.id).then((updatereview) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for country table to post a data
app.post('/api/country', (req,res) => {
    var country = new Country(req.body);
    country.save().then((country) => {
        res.status(201).send({
            "country" : country
        })
    }).catch((err) => {
        res.status(500).send(err);
    })
})

//CRUD operation for country table to find a data 
app.get('/api/country', (req,res) => {
    Country.find(req.query).then((countries) => {
        res.status(200).send({
            countries : countries
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for country table -- findOne 
app.get('/api/countries', (req,res) => { 
    Country.findOne(req.query).then((countries) => {
        res.status(200).send({
            countries : countries
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for country table to findById
app.get('/api/country/:id', (req,res) => {
    Country.findById(req.params.id).then((countries) => {
        res.status(200).send({
            countries : countries
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for country table to findByIdAndUpdate
app.put('/api/country/:id', (req,res) => { 
    Country.findByIdAndUpdate(req.params.id,req.body).then((updatecountry) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for country table to delete data
app.delete('/api/country/:id', (req,res) => { 
    Country.findByIdAndDelete(req.params.id).then((updatecountry) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for state table to post a data
app.post('/api/state', (req,res) => {
    var state = new State(req.body);
    state.save().then((state) => {
        res.status(201).send({
            "state" : state
        })
    }).catch((err) => {
        res.status(500).send(err);
    })
})

//CRUD operation for state table to find a data 
app.get('/api/state', (req,res) => {
    State.find(req.query).then((states) => {
        res.status(200).send({
            states : states
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for state table -- findOne 
app.get('/api/states', (req,res) => { 
    User.findOne(req.query).then((states) => {
        res.status(200).send({
            states : states
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for state table to findById
app.get('/api/state/:id', (req,res) => {
    State.findById(req.params.id).then((states) => {
        res.status(200).send({
            states : states
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for state table to findByIdAndUpdate
app.put('/api/state/:id', (req,res) => { 
    State.findByIdAndUpdate(req.params.id,req.body).then((updatestate) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for state table to delete data
app.delete('/api/user/:id', (req,res) => { 
    State.findByIdAndDelete(req.params.id).then((updatestate) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for category table to post a data
app.post('/api/category', (req,res) => {
    var category = new Category(req.body);
    category.save().then((category) => {
        res.status(201).send({
            "category" : category
        })
    }).catch((err) => {
        res.status(500).send(err);
    })
})

//CRUD operation for category table to find a data 
app.get('/api/category', (req,res) => {
    Category.find(req.query).then((cats) => {
        res.status(200).send({
            cats : cats
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for category table -- findOne 
app.get('/api/categories', (req,res) => {
    Category.findOne(req.query).then((cats) => {
        res.status(200).send({
            cats : cats
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for category table to findById
app.get('/api/category/:id', (req,res) => {
    Category.findById(req.params.id).then((cats) => {
        res.status(200).send({
            cats : cats
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for category table to findByIdAndUpdate
app.put('/api/category/:id', (req,res) => { 
    Category.findByIdAndUpdate(req.params.id,req.body).then((updatecat) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for category table to delete data
app.delete('/api/category/:id', (req,res) => { 
    Category.findByIdAndDelete(req.params.id).then((updatecat) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for sub-category table to post a data
app.post('/api/subcategory', (req,res) => {
    var subcategory = new Subcategory(req.body);
    subcategory.save().then((subcategory) => {
        res.status(201).send({
            "subcategory" : subcategory
        })
    }).catch((err) => {
        res.status(500).send(err);
    })
})

//CRUD operation for sub-category table to find a data 
app.get('/api/subcategory', (req,res) => { 
    Subcategory.find(req.query).then((subcats) => {
        res.status(200).send({
            subcats : subcats
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for sub-category table -- findOne 
app.get('/api/subcategories', (req,res) => { 
    Subcategory.findOne(req.query).then((subcats) => {
        res.status(200).send({
            subcats : subcats
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for sub-category table to findById
app.get('/api/subcategory/:id', (req,res) => {
    Subcategory.finyId(req.params.iddB).then((subcats) => {
        res.status(200).send({
            subcats : subcats
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for sub-category table to findByIdAndUpdate
app.put('/api/subcategory/:id', (req,res) => { 
    Subcategory.findByIdAndUpdate(req.params.id,req.body).then((updatesubcats) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for sub-category table to delete data
app.delete('/api/subcategory/:id', (req,res) => { 
    Subcategory.findByIdAndDelete(req.params.id).then((updatesubcats) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for plan table to post a data
app.post('/api/plan', (req,res) => {
    var plan = new Plan(req.body); 
    plan.save().then((plan) => {
        res.status(201).send({
            "plan" : plan
        })
    }).catch((err) => {
        res.status(500).send(err); 
    })
})

//CRUD operation for plan table to find a data 
app.get('/api/plan', (req,res) => {  
    Plan.find(req.query).then((plans) => {
        res.status(200).send({
            plans : plans
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for plan table -- findOne 
app.get('/api/plans', (req,res) => {
    Plan.findOne(req.query).then((plans) => {
        res.status(200).send({
            plans : plans
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for plan table to findById
app.get('/api/plan/:id', (req,res) => {
    Plan.findById(req.params.id).then((plans) => {
        res.status(200).send({
            plans : plans
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for plan table to findByIdAndUpdate
app.put('/api/plan/:id', (req,res) => { 
    Plan.findByIdAndUpdate(req.params.id,req.body).then((updateplan) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for plan table to delete data
app.delete('/api/plan/:id', (req,res) => { 
    Plan.findByIdAndDelete(req.params.id).then((updateplan) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for order table to post a data
app.post('/api/order', (req,res) => {
    var order = new Order(req.body); 
    order.save().then((order) => {
        res.status(201).send({
            "order" : order
        })
    }).catch((err) => {
        res.status(500).send(err); 
    })
})

//CRUD operation for order table to find a data 
app.get('/api/order', (req,res) => {  
    Order.find(req.query).then((orders) => {
        res.status(200).send({
            orders : orders
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for order table -- findOne 
app.get('/api/orders', (req,res) => {
    Order.findOne(req.query).then((orders) => {
        res.status(200).send({
            orders : orders
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for order table to findById
app.get('/api/order/:id', (req,res) => {
    Order.findById(req.params.id).then((orders) => {
        res.status(200).send({
            orders : orders
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for order table to findByIdAndUpdate
app.put('/api/order/:id', (req,res) => { 
    Order.findByIdAndUpdate(req.params.id,req.body).then((updateorder) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for order table to delete data
app.delete('/api/order/:id', (req,res) => { 
    Order.findByIdAndDelete(req.params.id).then((updateorder) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for cart table to post a data
app.post('/api/cart', (req,res) => {
    var cart = new Cart(req.body); 
    cart.save().then((cart) => {
        res.status(201).send({
            "cart" : cart
        })
    }).catch((err) => {
        res.status(500).send(err); 
    })
})

//CRUD operation for cart table to find a data 
app.get('/api/cart', (req,res) => {
    Cart.find(req.query).then((carts) => {
        res.status(200).send({
            carts : carts
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for cart table -- findOne 
app.get('/api/carts', (req,res) => { 
    Cart.findOne(req.query).then((carts) => {
        res.status(200).send({
            carts : carts
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for cart table to findById
app.get('/api/cart/:id', (req,res) => {
    Cart.findById(req.params.id).then((carts) => {
        res.status(200).send({
            carts : carts
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for cart table to findByIdAndUpdate
app.put('/api/cart/:id', (req,res) => { 
    Cart.findByIdAndUpdate(req.params.id,req.body).then((updatecart) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for cart table to delete data
app.delete('/api/cart/:id', (req,res) => { 
    Cart.findByIdAndDelete(req.params.id).then((updatecart) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})


//CRUD operation for wishlist table to post a data
app.post('/api/wishlist', (req,res) => {
    var wishlist = new Wishlist(req.body); 
    wishlist.save().then((wishlist) => {
        res.status(201).send({
            "wishlist" : wishlist
        })
    }).catch((err) => {
        res.status(500).send(err); 
    })
})

//CRUD operation for wishlist table to find a data 
app.get('/api/wishlist', (req,res) => { 
    Wishlist.find(req.query).then((wishlists) => {
        res.status(200).send({
            wishlists : wishlists
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for wishlist table -- findOne 
app.get('/api/wishlists', (req,res) => { 
    Wishlist.findOne(req.query).then((wishlists) => {
        res.status(200).send({
            wishlists : wishlists
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for Wishlist table to findById
app.get('/api/wishlist/:id', (req,res) => {
    Wishlist.findById(req.params.id).then((wishlists) => {
        res.status(200).send({
            wishlists : wishlists
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for wishlist table to findByIdAndUpdate
app.put('/api/wishlist/:id', (req,res) => { 
    Wishlist.findByIdAndUpdate(req.params.id,req.body).then((updatewishlist) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for wishlist table to delete data
app.delete('/api/wishlist/:id', (req,res) => { 
    Wishlist.findByIdAndDelete(req.params.id).then((updatewishlist) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for payment table to post a data
app.post('/api/payment', (req,res) => {
    var payment = new Payment(req.body); 
    payment.save().then((payment) => {
        res.status(201).send({
            "payment" : payment
        })
    }).catch((err) => {
        res.status(500).send(err); 
    })
})

//CRUD operation for payment table to find a data 
app.get('/api/payment', (req,res) => { 
    Payment.find(req.query).then((payments) => {
        res.status(200).send({
            payments : payments
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for payment table -- findOne 
app.get('/api/payments', (req,res) => { 
    Payment.findOne(req.query).then((payments) => {
        res.status(200).send({
            payments : payments
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for payment table to findById
app.get('/api/payment/:id', (req,res) => {
    Payment.findById(req.params.id).then((payments) => {
        res.status(200).send({
            payments : payments
        })
    }).catch((err) => {
        console.log("Error : ", err);
        res.status(500).send(err);
    })
})

//CRUD operation for payment table to findByIdAndUpdate
app.put('/api/payment/:id', (req,res) => { 
    Payment.findByIdAndUpdate(req.params.id,req.body).then((updatepayment) => {
        res.status(200).send("Updated Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

//CRUD operation for payment table to delete data
app.delete('/api/payment/:id', (req,res) => { 
    Payment.findByIdAndDelete(req.params.id).then((updatepayment) => {
        res.status(200).send("Deleted Successfully...")
    }).catch((err) => {
        res.status(500).send(err)
    })
})

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