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
// 6. Сделайте функцию, которая параметром будет принимать число, а возвращать это же число прописью. Например, число 115 прописью это сто пятнадцать. Пусть функция работает с числами до миллиона.

let numNames = {
	simple: ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
	double: ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
	decimal: ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
	hundreds: ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
	thousands: ['одна тысяча', 'тысячи', 'тысяч'],
	million: ['миллион', 'миллиона']
};

function getNumberNames(num) {
	let result = '';
	let length = getNumLength(num);
	if (length == 1) {
		result = getSimple(num);
	}
	if (length == 2 && num < 20) {
		result = getDouble(num);
	}
	if (length == 2 && num >= 20) {
		result = getDecimal(num);
	}
	if (length == 3) {
		result = getHundreds(num);
	}
	if (length == 4) {
		result = getThousands(num);
	}
	if (length == 5) {
		result = getThousandsDec(num);
	}
	if (length == 6) {
		result = getThousandsHund(num);
	}
	if (length == 7) {
		result = getMillion(num);
	}
	return result;
}

function getNumLength(num) {
	let str = '';
	str += num;
	return str.length;
}

function getSimple(num) {
	return numNames.simple[num] + ' ';
}

function getDouble(num) {
	let index = parseInt(num.toString().slice(1, 2));
	return numNames.double[index] + ' ';
}

function getDecimal(num) {

	if (num % 10 == 0) {
		let index = parseInt(num.toString().slice(0, 1)) - 2;
		return numNames.decimal[index] + ' ';
	}
	let start = 30;
	for (let i = 0; i < numNames.decimal.length; i++) {
		const element = numNames.decimal[i]
		if (num < start) {
			return numNames.decimal[i] + ' ' + decreaseNumber(num);
		} else {
			start += 10;
		}
	}
}

function getHundreds(num) {
	if (num % 100 == 0) {
		let index = parseInt(num.toString().slice(0, 1)) - 1;
		return numNames.hundreds[index] + ' ';
	}
	let start = 200;
	for (let i = 0; i < numNames.hundreds.length; i++) {
		const element = numNames.hundreds[i]
		if (num < start) {
			return numNames.hundreds[i] + ' ' + decreaseNumber(num);
		} else {
			start += 100;
		}
	}
}

function getThousands(num) {
	let firstNum = parseInt(num.toString().slice(0, 1));
	if (num % 1000 == 0 && num < 2000) {
		return numNames.thousands[0];
	} else if (num % 1000 == 0 && num < 3000) {
		return 'две ' + numNames.thousands[1];
	} else if (num % 1000 == 0 && num >= 3000 && num < 5000) {
		return numNames.simple[firstNum] + ' ' + numNames.thousands[1];
	} else if (num % 1000 == 0) {
		return numNames.simple[firstNum] + ' ' + numNames.thousands[2];
	}

	if (num < 2000) {
		return numNames.thousands[0] + ' ' + decreaseThousands(num);
	} else if (num < 3000) {
		return 'две ' + numNames.thousands[1] + ' ' + decreaseThousands(num);
	} else if (num >= 3000 && num < 5000) {
		return numNames.simple[firstNum] + ' ' + numNames.thousands[1] + ' ' + decreaseThousands(num);
	} else {
		return numNames.simple[firstNum] + ' ' + numNames.thousands[2] + ' ' + decreaseThousands(num);
	}
}

function getThousandsDec(num) {
	let firstNum = parseInt(num.toString().slice(0, 2));
	let lastNum = parseInt(num.toString().slice(2));

	if (num % 1000 == 0 && num < 20000) {
		return getDouble(firstNum) + numNames.thousands[2];
	} else if (num % 1000 == 0) {
		return getDecimal(firstNum) + numNames.thousands[2]
	}
	// console.log(firstNum);
	// console.log(getDecimal(firstNum));
	return getDouble(firstNum) + numNames.thousands[2] + ' ' + getHundreds(lastNum);
}

function getThousandsHund(num) {
	let firstNum = parseInt(num.toString().slice(0, 3));
	let lastNum = parseInt(num.toString().slice(3));
	return getHundreds(firstNum) + numNames.thousands[2] + ' ' + getHundreds(lastNum);
}

function getMillion(num) {
	let firstNum = parseInt(num.toString().slice(0, 1));
	let lastNum = parseInt(num.toString().slice(3));
	return getSimple(firstNum) + numNames.million[0] + ' ' + getThousandsHund(lastNum);
}

function decreaseNumber(num) {
	let index = parseInt(num.toString().slice(1, 3));
	return getNumberNames(index);
}

function decreaseThousands(num) {
	let index = parseInt(num.toString().slice(1, 4));
	return getNumberNames(index);
}

console.log(getNumberNames(23020));


// let holder = 0;
// let result;

// function getNum(num) {
// 	for (const key in numNames) {
// 		if (numNames.hasOwnProperty(key)) {
// 			const element = numNames[key];
// 			if (num > +key) {
// 				holder = key;
// 			}
// 			if (num === +key) {
// 				result = element;
// 				return result;
// 			} else {
// 				if (num < +key) {
// 					result = numNames[holder];
// 					num = num - holder;
// 					result += ' ' + getNum(num);
// 					return result;
// 				}
// 			}
// 		}
// 	}
// }