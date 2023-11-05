var a = 0;
var tl = gsap.timeline();
time = () => {
  setInterval(function () {
    a = a + Math.floor(Math.random() * 15);
  }, 50);
};
time();
console.log(a);
tl.to("page1 h1", {
  onStart: time(),
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
