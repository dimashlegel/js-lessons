'use strict'

// map & WeakMap 
// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

// WeakMap – это Map-подобная коллекция, позволяющая использовать в качестве ключей только объекты, и автоматически удаляющая их вместе с соответствующими значениями, как только они становятся недостижимыми иными путями.

let arr1 = [1, 2];
let arr2 = [2, 3];
let arr3 = [3, 4];

let map1 = new Map; // create map collection
map1.set(arr1, 'str1'); //встановлює пару ключ-значення (на відмінну від об'єкта ключ може бути любим типом даних (об'єкт, масив, булєан, число))// 
map1.set(arr2, 'str2');
map1.set(arr3, 'str3');
map1.get(arr3) // -> str3 
map1.has(arr3) // -> true 
// map1.delete(arr3) // -> delete arr3 
// map1.clear // -> clear all elems 
map1.size // -> 3
map1.keys(); // [1,2],[2,3],[3,4]// виводить масив ключів
map1.values(); // виводить масив значень
map1.entries(); //  возвращает итерируемый объект по парам вида [ключ, значение]


for (const iterator of map1.keys()) {
	// console.log(iterator);
}

// learnjs Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// 1
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
	let newArr = [];
	let map = new Map;
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		map.set(element.toLowerCase().split('').sort().join(''), element);
	}
	return Array.from(map.values());
}

aclean(arr);
console.log('aclean(arr):', aclean(arr))

// 2

let map = new Map();

map.set("name", "John");

// let keys = Array.from(map.keys());
let keys = [...map.keys()];
keys.push("more");
