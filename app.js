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


app.listen(3000);


const gsap = require('gsap');

gsap.from(".nav-link", {
    duration: 1.5,
    opacity: 0
});


// ------------------------- Hero Section
gsap.from(".animate-hero", {
    duration: 1,
    y: '-100%',
    ease: 'linear',
    stagger: 0.3,
    opacity: 0,
    delay: 0.6
});

gsap.from(".button", {
    duration: 1,
    opacity: 0
});

// ------------------------ Service Section
gsap.from(".animate-service", {
    scrollTrigger: '.animate-service',
    duration: 0.5,
    x: '-30%',
    ease: 'linear',
    scrub: 3,
    stagger: 0.12,
    opacity: 0
});

gsap.from(".animate-img", {
    scrollTrigger: '.animate-img',
    duration: 0.5,
    x: '30%',
    ease: 'linear',
    scrub: 3,
    stagger: 0.12,
    opacity: 0
});

// ------------------ Membership Section
gsap.from(".animate-membership", {
    scrollTrigger: '.animate-membership',
    duration: 1.6,
    y: '-80%',
    ease: 'linear',
    scrub: 3,
    stagger: 0.3,
    opacity: 0
});

gsap.from(".animate-card", {
    scrollTrigger: '.animate-card',
    duration: 0.7,
    y: '30%',
    ease: 'linear',
    scrub: 3,
    stagger: 0.3,
    opacity: 0,
    delay: 0.2
});

// ------------------------ Team Section
gsap.from(".animate-team1", {
    scrollTrigger: '.animate-team1',
    duration: 0.3,
    y: '-80%',
    ease: 'linear',
    scrub: 3,
    stagger: 0.3,
    opacity: 0,
    delay: 0.7
});

gsap.from(".animate-team2", {
    scrollTrigger: '.animate-team2',
    duration: 0.3,
    y: '-80%',
    ease: 'linear',
    scrub: 3,
    stagger: 0.3,
    opacity: 0,
    delay: 0.7
});

gsap.from(".animate-img1", {
    scrollTrigger: '.animate-img1',
    duration: 0.7,
    x: '-30%',
    ease: 'linear',
    scrub: 3,
    stagger: 0.3,
    opacity: 0,
    delay: 0.5
});

gsap.from(".animate-img2", {
    scrollTrigger: '.animate-img2',
    duration: 0.7,
    x: '30%',
    ease: 'linear',
    scrub: 3,
    stagger: 0.3,
    opacity: 0,
    delay: 0.5
});

gsap.from(".animate-img3", {
    scrollTrigger: '.animate-img3',
    duration: 0.9,
    x: '-30%',
    ease: 'linear',
    scrub: 3,
    stagger: 0.3,
    opacity: 0
});

gsap.from(".animate-img4", {
    scrollTrigger: '.animate-img4',
    duration: 0.9,
    x: '30%',
    ease: 'linear',
    scrub: 3,
    stagger: 0.3,
    opacity: 0,
});

// --------------------- Email section
gsap.from(".animate-email", {
    scrollTrigger: '.animate-email',
    duration: 1,
    opacity: 0,
    stagger: 0.5
});

// ----------------------- Footer section
gsap.from("footer", {
    scrollTrigger: 'footer',
    duration: 0.5,
    opacity: 0,
    stagger: 0.5,
    y: '50%'
});
