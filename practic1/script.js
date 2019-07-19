'use strict'
let btn = document.getElementById('btn');
let rez = document.getElementById('rez');
let sum = 0;

btn.addEventListener('click', getSum);

function getSum() {
	sum = 0
	let inputs = document.getElementsByClassName('inp');
	for (let i = 0; i < inputs.length; i++) {
		const element = inputs[i];
		let value = Number(element.value);
		sum += value;
	}
	rez.value = sum;
}