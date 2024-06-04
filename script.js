'use strict';

// Store classes in variables

const submitButton = document.querySelector('.submit');
const buttons = document.querySelectorAll('input');
const popUp = document.querySelector('.pop-up');
const select = document.querySelectorAll('label');
// Add event for buttons

// const init = function () {
//   select.classList.add('button');
//   buttons.classList.remove('input');
// };

// const switchNumber = function () {
//   select.classList.toggle('input');
//   buttons.classList.toggle('button');
// };
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    // this.classList.toggle('input');
    // this.classList.toggle('label');
    // this.style.color = '#fff';
    // this.style.backgroundColor = 'hsl(216, 12%, 54%)';
    // TODO Add toggle classes
    // switchNumber();
  });
}

// Create event for submit button
submitButton.addEventListener('click', function () {
  document.querySelector('.submit').style.backgroundColor = '#fff';
  document.querySelector('.submit').style.color = 'hsl(25, 97%, 53%)';
  document.querySelector('.pop-up').classList.remove('hidden');
});
