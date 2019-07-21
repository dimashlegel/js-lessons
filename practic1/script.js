'use strict'

let inp = document.getElementById('inp');

inp.addEventListener('blur', checkOnNumber);

function checkOnNumber(num) {

	let str = inp.value;
	// var 1
	// return str.includes(num);

	// var 2 
	let array = str.split('');
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (Number(element) === Number(num)) {
			return true
		}
	}
}

console.log(checkOnNumber(3));