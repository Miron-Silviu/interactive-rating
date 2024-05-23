"use strict";

// Store classes in variables

const submitButton = document.querySelector(".submit");
const buttons = document.querySelectorAll(".button");
const popUp = document.querySelector(".pop-up");
const select = document.querySelectorAll(".select");
// Add event for buttons

// const switchNumber = function () {
//   this.style.backgroundColor = "hsl(216, 12%, 54%)";
//   buttons.classList.toggle("select");
//   select.classList.toggle("buttons");
// };

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    this.style.backgroundColor = "hsl(216, 12%, 54%)";
    this.style.color = "#fff";

    // TODO Add toggle classes
  });
}

// Create event for submit button
submitButton.addEventListener("click", function () {
  document.querySelector(".submit").style.backgroundColor = "#fff";
  document.querySelector(".submit").style.color = "hsl(25, 97%, 53%)";
  document.querySelector(".pop-up").classList.remove("hidden");
});
