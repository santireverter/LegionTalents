let navbar = document.getElementById("navbar");
let opB = document.getElementById("opB");
let opC = document.getElementById("opC");
let opD = document.getElementById("opD");

window.onscroll = function () {
  headerColor();
};

function headerColor() {
  if (document.documentElement.scrollTop > 70) {
    navbar.classList.add("cambio");
  } else {
    navbar.classList.remove("cambio");
  }
}

let count = 1;

function carousel() {
    setTimeout(() => {
      opB.classList.add("show");
      opC.classList.remove("show");
      opD.classList.remove("show");
      count++;
    }, 2000);
    setTimeout(() => {
      opB.classList.remove("show");
      opC.classList.add("show");
      opD.classList.remove("show");
      count++;
    }, 4000);
    setTimeout(() => {
    opB.classList.remove("show");
    opC.classList.remove("show");
    opD.classList.add("show");
    count = 0;
    carousel()
  }, 6000);
}

carousel()
