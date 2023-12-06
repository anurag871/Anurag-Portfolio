//fix nav

const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
    }
    else {
        navBar.classList.remove("fix-nav");
    }


     //set waypoints
     var waypoint = new Waypoint({
      element: document.getElementById('exp-Id'),
      handler: function() {
       //Expeirence Section

     var p = document.querySelectorAll(".skills-bar");
     p[0].setAttribute("style","width:100%;transition:1s all");
     p[1].setAttribute("style","width:90%;transition:1.2s all");
     p[2].setAttribute("style","width:84%;transition:1.4s all");
     p[3].setAttribute("style","width:70%;transition:1.7s all");
     p[4].setAttribute("style","width:92%;transition:1.9s all");
      },
    offset: '100%'     
      
    });
    
});


//preloader
window.addEventListener("load", () => {
    const loader = document.querySelector("#pre-loader");
    setTimeout(() => {
        loader.classList.add("hide");
    },);

});


// Scroll To

const links = [...document.querySelectorAll(".scroll-link")];
links.map((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("href").slice(1);
        const el = document.getElementById(id);
        const fixNav = navBar.classList.contains("fix-nav");
        let position = el.offsetTop - navHeight;

        window.scrollTo({
            top: position,
            left: 0,
        });
        navBar.classList.remove("show");
        menu.classList.remove("show");
        document.body.classList.remove("show");
    });

});


//TOOGLE MENU
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});
navClose.addEventListener("click", () => {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
});


//typing effect

var typed = new Typed('.element', {
    strings: ["Anurag Yadav.", "a Developer.", "a Businessman.", "a Web Designer."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000
});

var typed = new Typed('.element2', {
    strings: ["Anurag Yadav.", "a Developer.", "a Businessman.", "a Web Designer."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000
});


//glide


const glide = document.querySelector(".glide");

if (glide)
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "linear",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();






// Colors

const widget = document.querySelector(".widget");
const control = document.querySelector(".control");

widget.addEventListener("click", () => {
  control.classList.toggle("open");
});

const colors = [...document.querySelectorAll(".colors span")];
document.querySelector(":root").style.setProperty("--customColor", "#0044ff");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    const currentColor = color.dataset.id;
    document
      .querySelector(":root")
      .style.setProperty("--customColor", currentColor);
  });
});

window.addEventListener("scroll", () => {
  control.classList.remove("open");
});


     


//_Fade Effect

AOS.init();

new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Designer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

new TypeIt("#type2", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Designer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 0.8, x: 20 });
gsap.from(".banner", { opacity: 0, duration: 1, delay: 1.1, x: -200 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 1.4, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 1.7, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 2.1, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 2.4, y: -10 });

gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
  stagger: 0.2,
});

gsap.from(".icons span", {
  opacity: 0,
  duration: 1,
  delay: 2.5,
  x: -30,
  stagger: 0.2,
});