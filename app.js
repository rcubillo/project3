const express = require('express');
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require ('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

// Invoquing this function
const app = express();

// Set the view engine
app.set('view engine', 'ejs');

//Encrypting a coockie for a day long
app.use(cookieSession({
    //Maxage of the cookcie
    maxAge: 24*60*60*1000,
    keys:[keys.session.cookiekey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () =>{
    console.log('connected to mongodb');
});

//Set up routes
app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);

//create the home route
app.get('/', (req,res) =>{
    res.render('home', {user: req.user});
});

app.listen(3000,() => {
    console.log('app now listening for request on port 3000');
});