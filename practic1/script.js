'use strict'

let inp = document.getElementById('inp');

inp.addEventListener('blur', getYear);

function getYear() {
	let date = new Date();
	let currentY = date.getFullYear();
	let rez = currentY - Number(inp.value);
	console.log(rez);
}