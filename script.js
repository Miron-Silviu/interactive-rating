'use strict';

// Store classes in variables

const submitButton = document.querySelector('.submit');
const buttons = document.querySelectorAll('input');
const popUp = document.querySelector('.pop-up');
const select = document.querySelectorAll('label');

// Add event for buttons

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {});
}

// Create event for submit button
submitButton.addEventListener('click', function () {
  document.querySelector('.submit').style.backgroundColor = '#fff';
  document.querySelector('.submit').style.color = 'hsl(25, 97%, 53%)';
  document.querySelector('.pop-up').classList.remove('hidden');
});
