const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");

const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res){
    console.log("Running!!");
    res.render('index');

});

app.get("/login", function(req, res){
    console.log("Running!!");
    res.render('login');
});

app.get("/burger", function(req, res){
    res.render('menu_burgur');
});

app.get("/chinese", function(req, res){
    res.render('menu_chinese');
});

app.get("/pizza", function(req, res){
    res.render('menu_pizza');
});

app.get("/sandwich", function(req, res){
    res.render('menu_sendwich');
});


app.listen(3000);
