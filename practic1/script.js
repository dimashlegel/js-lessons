'use strict'

let par = document.querySelector('#par');
let arr = ['red', 'green', 'blue'];
let count = 0;
// par.style.color = arr[0];
window.setInterval(changeColor, 1000);

function changeColor() {
	par.style.color = arr[count];
	count++;
	if (count == arr.length) {
		count = 0;
	}
}