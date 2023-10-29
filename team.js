function loco() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  
  // const nav = document.querySelector(".navbar");
  // function showNav() {
  //   nav.classList.add("show");
  // }
  // function hidewNav() {
  //   nav.classList.remove("show");
  // }
  // var currPos = window.scrollY;
  // document.addEventListener("scroll", () => {
  //   if (top == "100vh") {
  //     nav.classList.add("show");
  //   } else if (window.scrollY > currPos) {
  //     //scroll up
  //     hidewNav();
  //   } else {
  //     //scroll down
  //     showNav();
  //   }
  //   currPos = window.scrollY;
  // });
  
  const array = [
    "#feff86",
    "#e3dffd",
    "#ffe6e6",
    "#ea99d5",
    "#d6e5fa",
    "#c1ffd7",
    "#fcd1d1",
    "#ffebb4",
    "#fd8a8a",
    "#d5ebda",
    "#fbd3d3",
    "#efddf4",
    "#52ab98",
    "#fae5df",
    "#f5cac2",
    "#d1adcc",
    "#eddcd9",
  ];
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }
  
  const box = document.querySelectorAll("#box");
  for (i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = getRandomItem(array);
  }
  
  var a = 0;
  var tl = gsap.timeline();
  time = () => {
    setInterval(function () {
      a = a + Math.floor(Math.random() * 15);
    }, 50);
  };
  time();
  tl.to("page1 h1", {
    onStart: time(),
  });
  tl.from("#loader img", {
    scale: 0,
    opacity: 0,
    duration: 1,
  });
  tl.from("#loader h1", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.3,
  });
  tl.to("#loader", {
    top: "-100vh",
    delay: 0.5,
    duration: 5,
  });
  
  const races = document.querySelector("#container");
  let racesWidth = races.offsetWidth;
  let amountToScroll = racesWidth * 1.05 - window.innerWidth;
  
  function getScrollAmount() {
    let racesWidth = races.scrollWidth;
    return -(racesWidth - window.innerWidth);
  }
  
  const tween = gsap.to(container, {
    x: -amountToScroll,
    duration: 3,
    ease: "none",
  });
  ScrollTrigger.create({
    x: 100,
    trigger: "#page3",
    start: "top top",
    end: () => `+=${getScrollAmount() * -1.2}`,
    pin: true,
    delay: 10,
    animation: tween,
    scrub: 1,
    markers: false,
  });
  