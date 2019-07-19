'use strict'

let inp = document.getElementById('inp');

// inp.addEventListener('blur', getSum);

// function getSum() {

// 	let str = inp.value.split(' ');
// 	let newArr = [];
// 	for (let i = 0; i < str.length; i++) {
// 		const element = str[i];
// 		let newStr = element.replace(element.charAt(0), element.charAt(0).toUpperCase());
// 		newArr.push(newStr);
// 	}
// 	inp.value = newArr.join(' ');
// }

// var 2

inp.addEventListener('blur', bigLetter);

function uswords(str) {
	var arr = str.split(' ');
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].split('');
		arr[i][0] = arr[i][0].toUpperCase();
		arr[i] = arr[i].join('');
	}
	str = arr.join(' ');
	return str;
}

function bigLetter() {
	inp.value = uswords(inp.value);
}  