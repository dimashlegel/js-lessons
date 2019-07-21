'use strict'

let inp = document.getElementById('inp');

inp.addEventListener('blur', checkWordIsPalindrom);

function checkWordIsPalindrom() {
	// var 1

	let str = inp.value;
	let arr = str.split('');
	let arr2 = arr.reverse();
	let str2 = arr2.join('');
	if (str === str2) {
		console.log(true);
	} else {
		console.log(false);
	}

	// var 2
	// var arr2 = str.split('').reverse();
	// for (var i = 0; i < arr.length; i++) {
	// 	if (arr[i] !== arr2[i]) {
	// 		alert('это слово не палиндром');
	// 		return;
	// 	}
	// }
	// alert('это слово палиндром');
	// return;
}