const loader_image = document.querySelector(".loader-image");
const loader_text = document.querySelector(".loader-text-title");
const loader_subtext = document.querySelector(".loader-text-subtitle");
const home_loader = document.querySelector(".home-loader");
const body = document.getElementsByTagName("body")[0]

setTimeout(() => {
  loader_image.classList.add("load-image");
  setTimeout(() => {
    loader_text.classList.add("load-text");
    setTimeout(() => {
      loader_subtext.classList.add("load-text");
      setTimeout(() => {
        home_loader.classList.add("hide-loader");
        body[0].style.overflowY = "auto"
      }, 2000);
    }, 1000);
  }, 1000);
}, 500);

// Navbar Animations
const header = document.getElementById("navbar-header")

let lastScroll = 0

var r = document.querySelector(':root');


body.addEventListener("scroll", () => {
    const currScroll = document.body.scrollTop
    console.log(currScroll)
    console.log("why not running")

    console.log(currScroll)

   
    if(currScroll <= 10) {
        console.log("run")
        header.classList.remove("scrollup")
        header.classList.remove("navbaroverlay")
        r.style.setProperty('--navbar-links-hover-color', 'white');
    }

    if(currScroll <= 650 && currScroll >= 10) {
        header.classList.remove("scrollup")
        header.classList.remove("scrolldown")
        header.classList.add("navbaroverlay")
        r.style.setProperty('--navbar-links-hover-color', 'white');
    }

    if(currScroll > lastScroll && currScroll > 500 && !header.classList.contains("scrolldown")){
        header.classList.remove("scrollup")
        header.classList.remove("navbaroverlay")
        header.classList.add("scrolldown")
        r.style.setProperty('--navbar-links-hover-color', 'black');
    }

    if(currScroll < lastScroll && header.classList.contains("scrolldown")){
        header.classList.remove("scrolldown")
        header.classList.remove("navbaroverlay")
        header.classList.add("scrollup")
        r.style.setProperty('--navbar-links-hover-color', 'black');
    }

    lastScroll = currScroll
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show")
            // entry.target.classList.remove("hidden")
        }
        if(entry.target.classList.contains("show") && entry.target.classList.contains('num')){
            entry.target.classList.remove("hidden")
            let Interval = 5000;
            let startValue = 0;
            let endValue = parseInt(entry.target.getAttribute("data-val"));
            console.log("run")
            let duration = Math.floor(Interval / endValue);
            let counter = setInterval(function () {
              startValue += 1;
              entry.target.textContent = startValue;
              if (startValue == endValue) {
                clearInterval(counter);
              }
            }, duration);
            entry.target.classList.remove('num')
        }
    })
    
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((e) => observer.observe(e))

// let dispvalue = document.querySelectorAll(".num");
// let Interval = 5000;

// dispvalue.forEach((dispvalue) => {
//   let startValue = 0;
//   let endValue = parseInt(dispvalue.getAttribute("data-val"));
//   let duration = Math.floor(Interval / endValue);
//   let counter = setInterval(function () {
//     startValue += 1;
//     dispvalue.textContent = startValue;
//     if (startValue == endValue) {
//       clearInterval(counter);
//     }
//   }, duration);
// });