'use strict'
let tds = document.getElementsByTagName('td');
let btn = document.querySelector('button');
let inp = document.querySelector('input');

btn.addEventListener('click', func);

function func() {
	let arr = [];
	for (let i = 0; i < tds.length; i++) {
		arr.push(Number(tds[i].innerHTML));
	}

	arr.sort(sortFunc);
	let str = arr.join(',');
	inp.value += str;
}

function sortFunc(b, a) {
	if (a < b) {
		return 1;
	}
	if (a > b) {
		return -1;
	}
	if (a == b) {
		return 0;
	}
}