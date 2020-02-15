'use strict'

// set & WeakSet 
// Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

// WeakSet – это Set-подобная коллекция, которая хранит только объекты и удаляет их, как только они становятся недостижимыми иными путями.

let collSet = new Set(); // create new collection // може містити лише унікальні елементи 
collSet.add(1); // add element to collection
collSet.add(2);
collSet.add(2);
collSet.add(3);
collSet.size // -> 3 -> розмір колекції
collSet.has(2) // true // перевіряє на наявність
collSet.has(4) // false
collSet.delete(2);
console.log(collSet); // -> {1,3}
collSet.clear(); // clean all collection;

for (const iterator of collSet) { // перебір колекції
	console.log(iterator);
}


// Фільтрація масиву на дублі

let arr = [1, 2, 3, 1, 2];
// var 1
// function getUniq(arr) {
// 	let collection = new Set();
// 	for (let index = 0; index < arr.length; index++) {
// 		const element = arr[index];
// 		collection.add(element);
// 	}
// 	let newArr = [];
// 	for (const iterator of collection) {
// 		newArr.push(iterator)
// 	}
// 	return newArr;
// }
// console.log(getUniq(arr));

// var 2 

function getUniq(arr) {
	// return [...new Set(arr)];
	return Array.from(new Set(arr));
}

console.log(getUniq(arr));
