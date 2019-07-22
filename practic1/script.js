'use strict'

let arr = document.getElementsByTagName('a');

window.addEventListener('DOMContentLoaded', addHref);

function addHref() {
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		// var 1

		// if (element.getAttribute('href').includes('http://')) {
		// 	element.innerHTML += element.getAttribute('href');
		// }
		
		// var 2

		if (element.getAttribute('href').indexOf('http://') == 0) {
			element.innerHTML += element.getAttribute('href');
		}
	}
}