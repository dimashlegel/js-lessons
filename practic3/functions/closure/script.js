'use strict'

// laern.js
// 1. independense counter

// function makeCounter() {
// 	let count = 0;
// 	return function() {
// 		return count++;
// 	};
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter2()); // 0
// console.log(counter2()); // 1

// 2. counter object

// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }

// let counter = new Counter();

// console.log( counter.up() ); // 1
// console.log( counter.up() ); // 2
// console.log( counter.down() ); // 1

// 3. Сумма с помощью замыканий

// function sum(a) {
// 	return function(b) {
// 		return a + b;
// 	};
// }

// console.log(sum(1)(-1));

// 4. Фильтрация с помощью функции


// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
// let arr = [ 2, 3, 4, 5, 6, 7];

// function inBetween(from, to) {
// 	return function(elem) {
// 		if (elem >= from && elem <= to) {
// 			return elem;
// 		}
// 	}
// }

// function inArray(arrfilt) {
// 	return function(elem) {
// 		return arrfilt.includes(elem);
// 	}
// }

// console.log(arr.filter(inBetween(5, 7)));
// console.log(arr.filter(inArray([1, 2, 5, 6])));

// 5. Сортировать по полю

// // по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, скажем, вот таким?

// users.sort(byField('name'));
// users.sort(byField('age'));

// let users = [
//   { name: "John", age: 20, surname: "Aohnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(field) {
// 	// var 1
// 	// return function(a, b) {
// 	// 	return a[field] > b[field] ? 1 : -1
// 	// }
// 	//var 2 
// 	return (a, b) => a[field] > b[field] ? 1 : -1
// }

// console.log(users.sort(byField('age')));

// 6. army of functions

// function makeArmy() {
// 	// debugger;
// 	let shooters = [];
// 	for (let i = 0; i < 10; i++) {
// 		let shooter = function() { // функция shooter
// 			console.log(i); // должна выводить порядковый номер
// 		};
// 		shooters.push(shooter);
// 	}
// 	return shooters;
// }


// let army = makeArmy();
// console.log(army);

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...



// code.mu
///
// 7. Сделайте функцию, которая считает и выводит количество своих вызовов.

// function getFuncCounter() {
// 	let counter = 0;
// 	return function() {
// 		counter += 1;
// 		return counter;
// 	}
// }

// let num = getFuncCounter();
// console.log(num()); // 1
// console.log(num()); // 2
// console.log(num()); // 3
//
//
// 8. Даны кнопки. Привяжите к каждой кнопке событие по клику, которое будет считать количество нажатий по кнопке и выводить его в текст кнопки. Количество нажатий для каждой кнопки должно хранится в замыкании.

// let buttons = document.querySelectorAll('.btn');

// buttons.forEach(function(elem) {
// 	let f1 = getClicks();
// 	elem.addEventListener('click', function() {
// 		this.innerHTML = f1();
// 	})
// })

// function getClicks() {
// 	let count = 1;
// 	return function() {
// 		return count++;
// 	};
// }

// 9.  Дан массив цветов. Даны абзацы. По первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - во второй и так далее. Все абзацы работают независимо.

let parArr = document.querySelectorAll('p');
let colors = ['red', 'green', 'blue'];

parArr.forEach(function(elem) {
	let getColor = changeColor(elem);
	elem.addEventListener('click', getColor);
})

function changeColor(elem) {
	let index = 0;
	return function() {
		elem.style.color = colors[index];
		index++;
		if (index >= colors.length) {
			index = 0;
		}
	};
}