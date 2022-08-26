let navbar = document.getElementById("navbar")

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 70) {
    navbar.classList.add("cambio")
  } else {
    navbar.classList.remove("cambio")
  }
}