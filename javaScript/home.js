const header = document.getElementById("navbar-header")

let lastScroll = 0

var r = document.querySelector(':root');


window.addEventListener("scroll", () => {
    const currScroll = window.scrollY

    console.log(currScroll)

   
    if(currScroll <= 10) {
        console.log("run")
        header.classList.remove("scrollup")
        header.classList.remove("navbaroverlay")
        r.style.setProperty('--navbar-links-hover-color', 'white');
    }

    if(currScroll <= 500 && currScroll >= 10) {
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
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((e) => observer.observe(e))
