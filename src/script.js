let navbar = document.getElementById("navbar");
let opB = document.getElementById("opB");
let opC = document.getElementById("opC");
let opD = document.getElementById("opD");
let circle = document.querySelector(".fa-circle");
let btn = document.getElementById("nav-btn");
let btnClose = document.getElementById("btn-close");
let ul = document.getElementById("nav-ul");

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

function carousel() {
  setTimeout(() => {
    opB.classList.add("show");
    opC.classList.remove("show");
    opD.classList.remove("show");
  }, 2000);
  setTimeout(() => {
    opB.classList.remove("show");
    opC.classList.add("show");
    opD.classList.remove("show");
  }, 4000);
  setTimeout(() => {
    opB.classList.remove("show");
    opC.classList.remove("show");
    opD.classList.add("show");
    carousel();
  }, 6000);
}

carousel();

btn.addEventListener("click", () => {
  click();
});

function click() {
  ul.classList.toggle("show-nav");
  ul.classList.remove("hide-nav");
  ul.innerHTML = `<button id="btn-close" onclick="clickClose()"><i class="fa-solid fa-xmark"></i></button>

  <li><a onclick="clickClose()" href="#home">Home</a></li>
  <li><a onclick="clickClose()" href="#serv">Servicios</a></li>
  <li><a onclick="clickClose()" href="#nos">Nosotros</a></li>
  <li><a onclick="clickClose()" href="#testi">Testimonios</a></li>
  <li><a onclick="clickClose()" href="#cont">Contacto</a></li>
  
  <div class="navIcons">
    <a
      href="https://www.linkedin.com/company/legion-talents"
      ><i class="fa-brands fa-linkedin"></i
    ></a>
    <a href="https://www.instagram.com/legiontalents/"
      ><i class="fa-brands fa-instagram"></i
    ></a>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-twitter"></i>
  </div>`;
}

function clickClose() {
  ul.classList.toggle("show-nav");
  ul.classList.add("hide-nav");
}
