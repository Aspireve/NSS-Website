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

   
    if(currScroll <= 10) {
        console.log("run")
        header.classList.remove("scrollup")
        header.classList.remove("navbaroverlay")
        r.style.setProperty('--hover-navbar', 'white');
    }

    if(currScroll <= 650 && currScroll >= 10) {
        header.classList.remove("scrollup")
        header.classList.remove("scrolldown")
        header.classList.add("navbaroverlay")
        r.style.setProperty('--hover-navbar', 'white');
    }

    if(currScroll > lastScroll && currScroll > 500 && !header.classList.contains("scrolldown")){
        header.classList.remove("scrollup")
        header.classList.remove("navbaroverlay")
        header.classList.add("scrolldown")
        r.style.setProperty('--hover-navbar', 'black');
    }

    if(currScroll < lastScroll && header.classList.contains("scrolldown")){
        header.classList.remove("scrolldown")
        header.classList.remove("navbaroverlay")
        header.classList.add("scrollup")
        r.style.setProperty('--hover-navbar', 'black');
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

// Testimonials

/* Create an array to hold the different image positions */
var itemPositions = [];

var items = document.querySelectorAll("#scroller .item")

var numberOfItems = items.length;
console.log(numberOfItems)
function assignPositions() {
  for (var i = 0; i < numberOfItems; i++) {
    if (i === 0) {
      itemPositions[i] = "left-hidden";
    } else if (i === 1) {
      itemPositions[i] = "left";
    } else if (i === 2) {
      itemPositions[i] = "middle";
    } else if (i === 3) {
      itemPositions[i] = "right";
    } else {
      itemPositions[i] = "right-hidden";
    }
  }

  items.forEach((e, idx) => {
    console.log(e)
    console.log(idx)
    e.classList.add(itemPositions[idx])
  })
}




function scroll(direction) {
  if (direction === "prev") {
    itemPositions.push(itemPositions.shift());
  } else if (direction === "next") {
    itemPositions.unshift(itemPositions.pop());
  }
  items.forEach((e, idx) => {
    e.classList.remove("left-hidden")
    e.classList.remove("left")
    e.classList.remove("middle")
    e.classList.remove("right")
    e.classList.remove("right-hidden")
    e.classList.add(itemPositions[idx])
  })
}

// /* Do all this when the DOMs ready */

assignPositions()
var autoScroll = setInterval(() => {scroll('next')}, 4000);

var scroller = document.getElementById("scroller");
var nav = document.querySelector(".nav");

// scroller.addEventListener("mouseout")

scroller.addEventListener("mouseenter", () => {
    console.log("entered")
    clearInterval(autoScroll)
    nav.style.display = "block"
})
scroller.addEventListener("mouseleave", () => {
    console.log("left")
    autoScroll = setInterval(() => {scroll('next')}, 4000);
    nav.style.display = "none"
})

// document.querySelectorAll("#scroller")[0].style.hover
//   $("#scroller").hover(
//     function () {
//       window.clearInterval(autoScroll);
//       $(".nav").stop(true, true).fadeIn(200);
//     },
//     function () {
//       autoScroll = window.setInterval("scroll('next')", 4000);
//       $(".nav").stop(true, true).fadeOut(200);
//     }
//   );
// document.readyState(function () {
//   assignPositions();
//   var autoScroll = window.setInterval("scroll('next')", 4000);

//   /* Hover behaviours */
//   $("#scroller").hover(
//     function () {
//       window.clearInterval(autoScroll);
//       $(".nav").stop(true, true).fadeIn(200);
//     },
//     function () {
//       autoScroll = window.setInterval("scroll('next')", 4000);
//       $(".nav").stop(true, true).fadeOut(200);
//     }
//   );

document.querySelector(".prev").addEventListener("click", () => {
    scroll("prev")
})

document.querySelector(".next").addEventListener("click", () => {
    scroll("next")
})
