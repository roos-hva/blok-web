// JavaScript Document
var deButton = document.querySelector("nav button");

deButton.addEventListener("click", openMenu);

function openMenu() {
  document.body.classList.toggle("menuOpen");
}