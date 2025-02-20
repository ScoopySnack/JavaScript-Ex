const DEFAULT = 0         
let counter = DEFAULT     // state - Model

window.addEventListener('DOMContentLoaded', function() {
  this.document.querySelector('#btnDecr').addEventListener('click', () => onDecreaseClicked())
  this.document.querySelector('#btnReset').addEventListener('click', () => onResetClicked())
  this.document.querySelector('#btnIncr').addEventListener('click', () => onIncreaseClicked())
})

/**
 * Handlers - Controller
 */
function onDecreaseClicked() {
  decreaseCounter()
}

function onResetClicked() {
  resetCounter()
}

function onIncreaseClicked() {
  increaseCounter()
}

/**
 * Model
 */
function decreaseCounter() {
  counter--;
  render()
}

function resetCounter() {
  counter = DEFAULT
  render()
}

function increaseCounter() {
  counter++
  render()
}

/**
 * View
 */
function render() {
  const counterDOM = document.querySelector('#counter')
  counterDOM.textContent = counter
  styleCounter(counterDOM)
}

// function styleCounter(counterDOM) {
//   counterDOM.classList.toggle('color-green', counter > 0)
//   counterDOM.classList.toggle('color-red', counter < 0)
//   counterDOM.classList.toggle('color-black', counter === 0)
// }

//with ternary operator
function styleCounter(counterDOM) {
    counterDOM.classList.remove('color-green', 'color-red', 'color-black');
    counterDOM.classList.add(counter > 0 ? 'color-green' : counter < 0 ? 'color-red' : 'color-black');
}

















// let counter = 0;

// // DOM elements
// const counterDOM = document.getElementById('counter');
// const incrementBtn = document.getElementById('increase');
// const decrementBtn = document.getElementById('decrease');
// const resetBtn = document.getElementById('reset');

// // Initial counter value
// counterDOM.textContent = counter;    

// // Event listeners
// incrementBtn.addEventListener('click', () => {
//     counter++;
//     counterDOM.textContent = counter;
// });

// decrementBtn.addEventListener('click', () => {
//     counter--;
//     counterDOM.textContent = counter;
// });

// resetBtn.addEventListener('click', () => {
//     counter = 0;
//     counterDOM.textContent = counter;
// });
