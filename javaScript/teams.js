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
