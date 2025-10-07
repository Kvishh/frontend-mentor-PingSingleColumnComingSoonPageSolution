"use strict"

const input = document.querySelector("input");
const emailTest = /^\S+@\S+\.\S+$/;
const form = document.querySelector("form");

form.addEventListener("submit", (evt) => {

    if (input.value === ""){
        evt.preventDefault();
    } else if (!emailTest.test(input.value)) {
        evt.preventDefault();
    } else {
        error.classList.remove("error-on");
    }
});