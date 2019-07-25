'use strict'
let tds = document.getElementsByTagName('td');
let btn = document.querySelector('button');

btn.addEventListener('click', func);

function func() {
	let val = 0;
	let current;
	for (let i = 0; i < tds.length; i++) {
		const element = tds[i];
		if (val >= Number(element.innerHTML)) {
			val = val;
		} else {
			val = Number(element.innerHTML);
			current = i;
		}
	}
	tds[current].style.border = '1px solid red';
}