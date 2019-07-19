'use strict'

let inp = document.getElementById('inp');
let names = document.getElementsByClassName('name');

inp.addEventListener('blur', getSum);

function getSum() {
	let str = inp.value.split(' ');
	console.log(str);

	for (let i = 0; i < str.length; i++) {
		const element = str[i];
		names[i].value = str[i];
	}

}