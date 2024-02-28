//Page navigation
const skillPage = document.querySelector(".skills-page");
const portfolio = document.getElementById("portfolio-works");
const home = document.querySelector(".opening-section");
const about = document.querySelector(".about-page");
const contact = document.querySelector(".contact-page");

function homeTarget(){
    home.scrollIntoView({behavior: 'smooth'});
}

function skillTarget(){
    skillPage.scrollIntoView({ behavior: 'smooth' });
}
function portfolioTarget(){
    portfolio.scrollIntoView({ behavior: 'smooth' });
}
function aboutTarget(){
    about.scrollIntoView({ behavior: 'smooth' });
}
function contactTarget(){
    contact.scrollIntoView({behavior:"smooth"});
}

//portfolio works
const firstItem = document.querySelector(".course-iq");
const secondItem = document.querySelector(".staff-master");
const thirdItem = document.querySelector(".shop-it");
const bg = document.querySelector(".bg");


firstItem.addEventListener('mouseover', () => {
    bg.style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.9) 100%), url('images/course-iq.png')";
    bg.style.transition = "background-image 1.5s ease-out";
});
secondItem.addEventListener('mouseover', () => {
    bg.style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.9) 100%), url('images/staff-master.png')";
    bg.style.transition = "background-image 1.5s ease-out";
    
});
thirdItem.addEventListener('mouseover', () => {
    bg.style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.9) 100%), url('images/shop-it.png')";
    bg.style.transition = "background-image 1.5s ease-out";
});

const fb = document.querySelector(".fb-button");
const ig = document.querySelector(".insta-button");
const linkedin = document.querySelector(".linkedin-button");
const github = document.querySelector(".github-button");

function socialMedia(){
    fb.onclick = () =>{
        window.open("https://www.facebook.com/iamorales.4");
    }
    ig.onclick = () => {
        window.open("https://www.instagram.com/iamorales_/");
    }
    linkedin.onclick = () => {
        window.open("https://www.linkedin.com/in/i%C3%B1igo-morales-136271284/");
    }
    github.onclick = () => {
        window.open("https://github.com/iamorales2");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    socialMedia();
});
