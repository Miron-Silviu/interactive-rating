"use strict";

// Store classes in variables

const submitButton = document.querySelector(".submit");
const buttonNumbers = document.querySelector("button");
const popUp = document.querySelector(".pop-up");

// Create event for submit button
submitButton.addEventListener("click", function () {
  document.querySelector(".submit").style.backgroundColor = "#fff";
  document.querySelector(".submit").style.color = "hsl(25, 97%, 53%)";
  document.querySelector(".pop-up").classList.remove("hidden");
});
