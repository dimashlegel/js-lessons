'use strict'

function shuffle(array) {
	let newArr = [];
	let arrLength = array.length;

	for (let i = 0; i < arrLength; i++) {
		let random = getRandomInt(array.length);
		let elem = array.splice(random, 1)[0];
		newArr.push(elem);
	}

	return newArr;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

console.log('total ', shuffle([1, 2, 3, 20, 30, 10]));


/////
/////

// Отримання випадкового числа з-поміж двох значень ( min <= result < max )
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

// Отримання випадкового цілого з-поміж двох значень, включно

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум 
}