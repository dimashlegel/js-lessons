'use strict'

let inp = document.getElementById('inp');

inp.addEventListener('blur', getSum);

function getSum() {
	let str = inp.value.split(',');
	console.log(str);
	
	let rez = 0;
	
	for (let i = 0; i < str.length; i++) {
		const element = str[i];
		rez += Number(element);
	}
	let average = rez/str.length
	console.log(average);
	
}