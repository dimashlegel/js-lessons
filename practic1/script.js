'use strict'

let inp = document.getElementById('inp');

inp.addEventListener('blur', transformData);

function transformData() {
	let str = inp.value;
	let arr = str.split('.');

	let arr2 = arr.reverse();
	let newStr = arr2.join('-');
	inp.value = newStr;
}