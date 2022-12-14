let navbar = document.getElementById("navbar");
let opB = document.getElementById("opB");
let opC = document.getElementById("opC");
let opD = document.getElementById("opD");
let circle = document.querySelector(".fa-circle");
let btn = document.getElementById("nav-btn");
let btnClose = document.getElementById("btn-close");
let ul = document.getElementById("nav-ul");
let points = document.getElementById('points')

window.onscroll = function () {
  headerColor();
};

function headerColor() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    navbar.classList.add("cambio");
  } else {
    navbar.classList.remove("cambio");
  }
}

carousel();

function carousel() {
  setTimeout(() => {
    opB.classList.add("show");
    opC.classList.remove("show");
    opD.classList.remove("show");
    points.children[0].style.opacity = 0.5
    points.children[1].style.opacity = 1
    points.children[2].style.opacity = 1
  }, 0);
  setTimeout(() => {
    opB.classList.remove("show");
    opC.classList.add("show");
    opD.classList.remove("show");
    points.children[1].style.opacity = 0.5
    points.children[0].style.opacity = 1
    points.children[2].style.opacity = 1
  }, 4000);
  setTimeout(() => {
    opB.classList.remove("show");
    opC.classList.remove("show");
    opD.classList.add("show");

    points.children[2].style.opacity = 0.5
    points.children[0].style.opacity = 1
    points.children[1].style.opacity = 1
  }, 8000);
  setTimeout(() => {
    carousel()
  }, 12000);
}

btn.addEventListener("click", () => {
  click();
});

function click() {
  ul.classList.toggle("show-nav");
  ul.classList.remove("hide-nav");
}

function clickClose() {
  ul.classList.toggle("show-nav");
  ul.classList.add("hide-nav");
}