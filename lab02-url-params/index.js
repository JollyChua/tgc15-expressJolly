const express = require('express')
const hbs = require('hbs')
let app = express();

//inform Express that the view engine (a.k.a template)
app.set('view engine', 'hbs');

//inform Express where to find static files
app.use(express.static('public'));

app.get('/', function(req, res){
    let luckyNumber = Math.floor(Math.random()*100 + 1);
    res.render('index',{
        "number": luckyNumber
    })
})

app.get("/contact-us", function(req, res){
    res.render('contact _form')
})

app.get('/add/:number1/:number2', function(req, res){
    console.log(req.params);
    let n1 = parseInt(req.params.number1);
    let n2 = parseInt(req.params.number2);
    let total = n1 + n2;
    res.send("The sum is " + total );
})

app.listen(3000, function(){
    console.log("server has started")
})