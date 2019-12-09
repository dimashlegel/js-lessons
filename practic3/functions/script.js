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
// 6. Chunk Array on SubArrays;
// [1,2,3,4] => [[1,2], [3,4]];
function chunkArr(array, items) {
	let iterCount = Math.ceil(array.length / items);
	let result = [];
	for (let i = 0; i < iterCount; i++) {
		let arrChunk = [];
		arrChunk = array.splice(0, items);
		result.push(arrChunk);
	}
	return result;
}
chunkArr([1,2,3,4]);

////
////
// 7. ForEach
let arr = [1, 2, 3];
// function declaration for each
let newArr = [];
// console.log(each(arr, forEach));
function each(array, func) {
	for (let i = 0; i < array.length; i++) {
		newArr.push(func(array[i]));
	}
	return newArr;
}
function forEach(elem) {
	elem = elem - 1;
	return elem;
}
// function expression for each
let forEach = function(arr, func) {
	return func(arr);
}
let each = function(array) {
	let newArr = [];
	for (let i = 0; i < array.length; i++) {
		newArr.push(array[i] - 1);
	}
	return newArr;
}
// console.log(forEach(arr, each));
//
//
//
// 8. Рекурсивний обхід об'єкту
let company = { // тот же самый объект, сжатый для краткости
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};
// Функция для подсчёта суммы зарплат
function sumSalaries(department) {
	// debugger;
  if (Array.isArray(department)) { // случай (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
  } else { // случай (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
			console.log(Object.values(department));
      sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
  }
}
sumSalaries(company); // 6700