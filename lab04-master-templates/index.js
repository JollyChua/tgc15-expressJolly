
const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

let app = express();

app.set('view engine', 'hbs')
app.use(express.static('public'));

wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts'); // inform wax-on where to find 

//2. define routes
app.get('/', function(req, res){
    res.render("home")
})

app.get('/about', function(req, res){
    res.render("about")
})

app.get('/contact-us', function(req, res){
    res.render("contact-us")
})

app.listen(3000, function(){
    console.log("server has started")
})