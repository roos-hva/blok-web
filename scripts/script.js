// JavaScript Document
var burgerMenu = document.querySelector("header nav button");

burgerMenu.addEventListener("click", openMenu);

burgerMenu.addEventListener("focus", openMenu);

function openMenu() {
  document.body.classList.toggle("menuOpen");
}

var eersteLink = document.querySelector("main a:first-of-type");


eersteLink.addEventListener("focus", closeMenu);

function closeMenu() {
  document.body.classList.remove("menuOpen");
}

// forEach functie gemaakt met hulp van Rowin

var linkGeluid = document.querySelectorAll("a");

linkGeluid.forEach(function(elem) {
  elem.addEventListener("click", function() {
    var audio = new Audio('geluid/mixkit-pebbles-click-1128.mp3');
    audio.play();  });
});

var knopGeluid = document.querySelectorAll("button");

knopGeluid.forEach(function(elem) {
  elem.addEventListener("click", function() {
    var audio = new Audio('geluid/mixkit-pebbles-click-1128.mp3');
    audio.play();  });
});

