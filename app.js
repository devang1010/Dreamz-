const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


mongoose.connect("mongodb+srv://dangivishva005:vishit1121@cluster0.xqnempu.mongodb.net/userDB", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    phoneNumber: String

});
let login=false;
const User = new mongoose.model("User", userSchema);

app.get("/", function (req, res) {
    console.log("Running!!");
    res.render('index',{login:login});

});

app.get("/home", function(req, res){
    res.render('index');
})

app.get("/login", function (req, res) {
    console.log("Running!!");
    res.render('login');
});

app.get("/burger", function (req, res) {
    res.render('menu_burgur');
});

app.get("/chinese", function (req, res) {
    res.render('menu_chinese');
});

app.get("/pizza", function (req, res) {
    res.render('menu_pizza');
});

app.get("/sandwich", function (req, res) {
    res.render('menu_sendwich');
});

app.get("/logout",function(req,res){
    login=false;
    res.redirect("/login");
});

app.post("/register", async function  (req, res) {
    // console.log(req.body);
    const user =  new User ({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        gender:req.body.gender,
        phoneNumber:req.body.phoneNumber
    })
    // console.log(user);
    user.save();
    login=true;
    res.redirect("/");
});

app.post("/login",async function(req,res){
    const result = await User.findOne({email:req.body.email, password:req.body.password});
    // console.log(result);
    if(!result)
    {
        res.redirect("/login");
    }
    else
    {
        login=true;
        res.redirect("/");
    }
})

app.post("/", function(req, res){
    var emailInput = req.body.emailInput;
    console.log(emailInput);
})

app.listen(3000);


