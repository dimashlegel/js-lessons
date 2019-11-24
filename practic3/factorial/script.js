'use strict'

let inp = document.querySelector('#inp');
let rez = document.querySelector('#rez');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
	rez.innerHTML = getFactorial(Number(inp.value));
});

/// var 1

// function getFactorial(value) {
// 	if (value <= 0) {
// 		return 'Enter number >= 1';
// 	} else {
// 		let factorial = 1;
// 		for (let i = value; i >= 1; i--) {
// 			factorial *= i;
// 		}
// 		return factorial;
// 	}
// }

// var 2

function getFactorial(value) {
	if (value <= 0) {
		return 'Enter number >= 1';
	} else {
		return factorial(value);
	}
}

function factorial(value) {
	if (value == 0) {
		return 1;
	} else {
		return value * factorial(value - 1);
	}
}