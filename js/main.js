$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

// when we scroll and navbar be fixed;
let secNavbar = document.querySelector(".second-nav");
let topBtn = document.querySelector(".to-top");
let links = document.querySelectorAll(".second-nav .nav-item .nav-link");
let homeSec = document.querySelector(".hero");
let aboutSec = document.querySelector(".about");
let servicesSec = document.querySelector(".services");
let team = document.querySelector(".team-members");
let contact = document.querySelector(".contact-us");

window.onscroll = ()=>{
    if (scrollY > 200){
        secNavbar.classList.remove("none");
        topBtn.classList.remove("none")
    }else{
        secNavbar.classList.add("none");
        topBtn.classList.add("none");
    }
    
    if (scrollY > homeSec.offsetTop + homeSec.offsetHeight - window.innerHeight){
        links.forEach((el)=>{
            el.classList.remove("active");
        })
        links[0].classList.add("active");
    }
    if (scrollY > aboutSec.offsetTop + aboutSec.offsetHeight - window.innerHeight){
        links.forEach((el)=>{
            el.classList.remove("active");
        })
        links[1].classList.add("active");
    }
    if (scrollY > servicesSec.offsetTop + servicesSec.offsetHeight - window.innerHeight){
        links.forEach((el)=>{
            el.classList.remove("active");
        })
        links[2].classList.add("active");
    }
    if (scrollY > team.offsetTop - 200){
        links.forEach((el)=>{
            el.classList.remove("active");
        })
        links[3].classList.add("active");
    }
    if (scrollY > contact.offsetTop + contact.offsetHeight - window.innerHeight){
        links.forEach((el)=>{
            el.classList.remove("active");
        })
        links[4].classList.add("active");
    }
}

topBtn.addEventListener("click",()=>{
    scrollTo({
        top:0,
        behavior:"smooth"
    })
})