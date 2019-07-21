'use strict'

let inp = document.getElementById('inp');

inp.addEventListener('blur', getYear);

function getYear() {
	let weak = ['Ned', 'Pon', 'Viv', 'Ser', 'Chet', 'Piat', 'Sub'];
	let str = inp.value;
	let arr = str.split('.');
	let arr1 = arr.reverse();
	var str1 = arr1.join(',');
	let date = new Date(str1);
	console.log(date);
	let currentDay = date.getDay();
	console.log(weak[currentDay]);
}