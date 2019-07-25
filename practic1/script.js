'use strict'

let inputs = document.querySelectorAll('input');
let counter = 1;
let i = 0;

window.setInterval(newValue, 1000);

function newValue() {
	// console.log(i);
	inputs[i].value = counter;
	i++;
	counter++;
	if (i == inputs.length) {
		i = 0;
	}
}

