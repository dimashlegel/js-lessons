'use strict'

let inp = document.getElementById('inp');
let par = document.getElementById('par');
console.log(par.innerHTML);

inp.addEventListener('blur', getValue);

function longestWord(str) {
	
	let arrWord = str.split(' ');
	let wordL = [];
	let rez;

	for (let i = 0; i < arrWord.length; i++) {
		const word = arrWord[i];
		wordL.push(word.length);
	}
	rez = getMaxOfArray(wordL);
	return rez;
}

function getValue() {
	par.innerHTML = longestWord(inp.value);
}

function getMaxOfArray(numArray) {
	return Math.max.apply(null, numArray);
}