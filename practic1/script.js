'use strict'

let inp = document.querySelector('#inp');
let inpNum = document.querySelector('#inpNum');
let inpSymb = document.querySelector('#inpSymb');

let button = document.querySelector('button');

button.addEventListener('click', createString);

function createString() {
	let str = '';
	let symbols = inpSymb.value;
	for (let i = 0; i < inpNum.value; i++) {
		let symbol = symbols.charAt(Math.floor(Math.random() * symbols.length));
		str += symbol;
	}
	inp.value = str;
}