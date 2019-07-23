'use strict'

let btn = document.querySelector('#btn');
let arr = document.getElementsByTagName('p');
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
	const element = arr[i];
	arr2.push(element.innerHTML);
}

btn.addEventListener('click', findMax);

function findMax() {
	let max = arr2.reduce(function(a, b, index) {
		return Math.max(a, b);
	});

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (+element.innerHTML == max) {
			element.style.color = 'red';
		}
	}
}