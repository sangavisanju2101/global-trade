const apiRoutes = (app)=>{
    app.use('/api/user', require('./api/user'));
    app.use('/api/vendor', require('./api/vendor'));
    app.use('/api/admin', require('./api/admin')); 
    app.use('/api/product', require('./api/product')); 
    app.use('/api/adv', require('./api/adv')); 
    app.use('/api/address', require('./api/address'));
    app.use('/api/review', require('./api/review'));
    app.use('/api/country', require('./api/country'));
    app.use('/api/state', require('./api/state'));
    app.use('/api/category', require('./api/category'));
    app.use('/api/subcategory', require('./api/subcategory'));
    app.use('/api/plan', require('./api/plan'));
    app.use('/api/order', require('./api/order'));
    app.use('/api/cart', require('./api/cart'));
    app.use('/api/wishlist', require('./api/wishlist'));
    app.use('/api/payment', require('./api/payment'));

    //getting hbs routes
    app.use('/task', require('./hbs-routes/admin'));
}

module.exports = {
    apiRoutes : apiRoutes
} ; 