"use strict";

let navBar = document.querySelector(".app-nav");
let menuBtn = document.querySelector("#menu-bars");
let searchMeal = document.querySelector("#search-meal");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
    searchMeal.classList.remove("active");

});

searchMeal.addEventListener("click", () => {
    searchMeal.classList.toggle("active");
    navBar.classList.remove("active");

});

window.onscroll = () => {
    navBar.classList.remove("active");
    searchMeal.classList.remove("active");
}


