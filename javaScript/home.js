let dispvalue = document.querySelectorAll(".num");
let Interval = 5000;

counter = () => {
  dispvalue.forEach((dispvalue) => {
    let startValue = 0;
    let endValue = parseInt(dispvalue.getAttribute("data-val"));
    let duration = Math.floor(Interval / endValue);
    let counter = setInterval(
      (increment = () => {
        startValue += 1;
        dispvalue.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }),
      duration
    );
  });
};
counter();

var tl = gsap.timeline();
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
  opacity: 0,
  duration: 1,
  display: "none",
});
ScrollTrigger.create({
  trigger: ".volunteers-count",
  onMouseEnter: counter(),
});
