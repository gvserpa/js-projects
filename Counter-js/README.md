# JavaScript Counter

A simple counter application built with plain JavaScript. This project demonstrates basic DOM manipulation and event handling.

## Features

- Increment the count by clicking the "+" button
- Decrement the count by clicking the "−" button
- Reset the count to zero with the "Reset" button
- Real-time update of the displayed count


## Installation

No installation needed. Simply open the `index.html` file in your browser to run the counter.

## Usage

- Click the **"+"** button to increase the count.
- Click the **"−"** button to decrease the count.
- Click the **"Reset"** button to set the count back to zero.

## Code Overview

The project uses:

- HTML for the structure and buttons
- CSS for basic styling 
- JavaScript to handle the logic of incrementing, decrementing, and resetting the count

Example of JavaScript function:

```js
let count = 0;
const display = document.querySelector('#countDisplay');

function increment() {
  count++;
  display.textContent = count;
}

function decrement() {
  count--;
  display.textContent = count;
}

function reset() {
  count = 0;
  display.textContent = count;
}
