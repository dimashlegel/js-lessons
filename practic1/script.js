'use strict'

let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let arr = document.getElementsByTagName('p');

btn.addEventListener('click', checkOnNumber);

function checkOnNumber() {
	let arr2 = [];

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		arr2[i] = +element.innerHTML;
	}

	inp.value = arr2.sort(sortArr);
}

function sortArr(a, b) {
	if (a > b) {
		return 1;
	}
	if (a < b) {
		return -1;
	}
	if (a == b) {
		return 0;
	}
}