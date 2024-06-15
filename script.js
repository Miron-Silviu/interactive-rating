'use strict';

// Store classes in variables

const submitButton = document.querySelector('.submit');
const popUp = document.querySelector('.pop-up');
const select = document.querySelectorAll('label');
const radioButton = document.querySelectorAll('.input-radio');
let span = document.querySelectorAll('.span-input');
let info = document.querySelector('.information');

// Add event for buttons

for (let i = 0; i < radioButton.length; i++) {
  radioButton[i].addEventListener('click', function () {
    for (let j = 0; j < span.length; j++) {
      info.textContent = `You selected ${[i + 1]} out of ${span.length + 1}`;
    }
  });
}
// Create event for submit button
submitButton.addEventListener('click', function () {
  let selected = false;
  for (const radio of radioButton) {
    if (radio.checked) {
      selected = true;
      break;
    }
  }
  if (selected) {
    document.querySelector('.submit').style.backgroundColor = '#fff';
    document.querySelector('.submit').style.color = 'hsl(25, 97%, 53%)';
    document.querySelector('.pop-up').classList.remove('hidden');
  } else {
    alert('Please select one of the feedback starts');
  }
});
