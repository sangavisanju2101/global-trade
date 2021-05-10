const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/global-trade', 
{   useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.once("open", function() {
    console.log("MongoDB databse connection established successfully")
}); 