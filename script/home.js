const loader_image = document.querySelector(".loader-image");
const loader_text = document.querySelector(".loader-text-title");
const loader_subtext = document.querySelector(".loader-text-subtitle");
const home_loader = document.querySelector(".home-loader");
const body = document.getElementsByTagName("body")

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
