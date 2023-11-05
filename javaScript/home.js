var a = 0;
var tl = gsap.timeline();
time = () => {
  setInterval(function () {
    a = a + Math.floor(Math.random() * 15);
  }, 50);
};
time();
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
  //   opacity: 0,
  duration: 1,
  display: "none",
});
