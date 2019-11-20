'use strict'

// 1. Сделайте функцию detElem, которая параметром будет принимать массив и какое значение и возвращать массив, в котором все элементы с таким значением будут удалены.
// delete elems from array

function detElem(array, num) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (element === num) {
			array.splice(i, 1);
		}
	}
	return array;
}
detElem([1, 2, 3, 4, 5, 6, 7, 8, 1, 2], 2);
//
//
//
// 2. Сделайте функцию getDiff, которая параметром будет принимать два массива и возвращать массив элементов, которые не присутствуют одновременно в обоих массивах.
// 1 method
function getDiff(arr1, arr2) {
	let arrRez = [];
	for (let i = 0; i < arr1.length; i++) {
		const element = arr1[i];
		if (arr2.indexOf(element) === -1 && arrRez.indexOf(element) === -1) {
			arrRez.push(element);
		}
	}
	for (let i = 0; i < arr2.length; i++) {
		const element = arr2[i];
		if (arr1.indexOf(element) === -1 && arrRez.indexOf(element) === -1) {
			arrRez.push(element);
		}
	}
	return arrRez;
}
getDiff([1, 2, 3], [1, 4, 5]);
//
//
// 2 method
// function getDiff(arr1, arr2) {
// 	arrRez = arr1.concat(arr2);
// 	for (var i = 0; i < arr1.length; i++) {
// 		for (var j = 0; j < arr2.length; j++) {
// 			if (arr1[i] == arr2[j]) {
// 				arrRez = detElem(arrRez, arr1[i]);
// 			}
// 		}
// 	}
// 	return arrRez;
// }
// getDiff(arr1, arr2);
//
//
//
// 3. Сделайте функцию arrayRand, которая параметром будет принимать массив и возвращать случайный элемент из этого массива.
function arrayRand(arr) {
	let arrLength = arr.length;
	let random = Math.floor(Math.random() * Math.floor(arrLength));
	return arr[random];
}
arrayRand([1, 2, 3]);
//
//
//
//
// 4. Сделайте функцию uniq, которая будет оставлять в массиве только уникальные элементы (то есть будет удалять дубли)

function uniq(arr) {
	// debugger;
	let result = [];
	let length = arr.length;
	for (let i = 0; i < length; i++) {
		let currentElem = arr.shift();
		if (arr.indexOf(currentElem) === -1) {
			result.push(currentElem);
		}
	}
	return result;
}
uniq([5, 1, 3, 2, 3, 1, 2, 4, 4]);

//
//
//
//
// 5. Сделайте функцию shuffle, которая параметром будет принимать массив и перемешивать его элементы в случайном порядке.

function shuffle(arr) {
	let result = [];
	let random;
	while (arr.length > 0) {
		random = Math.floor(Math.random() * Math.floor(arr.length));
		result.push(arr[random]);
		arr.splice(random, 1);
	}
	return result;
}
shuffle([1, 2, 3, 4, 5]);


//
//
//
//
// 6. 
