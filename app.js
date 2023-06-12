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