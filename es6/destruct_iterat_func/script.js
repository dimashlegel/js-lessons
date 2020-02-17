'use strict'

// Деструктурирующее присваивание – это специальный синтаксис, который позволяет нам «распаковать» массивы или объекты в кучу переменных, так как иногда они более удобны. Деструктуризация также прекрасно работает со сложными функциями, которые имеют много параметров, значений по умолчанию и так далее.
// code.mu

// for destructurization
// 1

let arr1 = ['q', 'w', 'e', 'r', 1, 2];
let [elem1, elem2, elem3, ...rest] = ['q', 'w', 'e', 'r', 1, 2];
// console.log(rest);

// 3
let arr2 = ['q', 'w'];
let [, elem22 = 'qqq', elem32 = 'www'] = arr2;
// console.log(elem32); // 'www'

// 5 {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}

let obj = {
	// name: 'Петр',
	surname: 'Петров',
	age: '20 лет'
};

let {
	name = 'Dima', surname, age
} = obj;
// console.log(name);
// console.log(surname);
// console.log(age);


// for Iteration

let arr3 = [1, 2, 3, 4, 5];
let sum = 0;
for (const iterator of arr3.reverse()) {
	// console.log(iterator);
	sum += iterator;
}
// console.log(sum);


let str = 'hello world';
let count = 0;
for (const iterator of str) {
	if (iterator == 'o') {
		count++;
	}
}
// console.log(count);


// for functions

let getName = (name = 'Anon') => console.log(name);
// getName('Diam'); // diam
// getName(); // Anon

//
// color: 'blue', border: '1px solid red', font: '15px Arial'.
let settings = {
	id: 'elem',
	// color: 'blue',
	border: '1px solid red',
	font: '15px Arial'
};

let getSettings = (obj) => {
	let {
		id,
		color = 'red',
		border = '1px solid green',
		font = '20px Arial'
	} = obj;

	document.body.style.cssText = 'color:' + color + '; border:' + border + '; font:' + font;
};

// getSettings(settings);


//
//

let parags = document.querySelectorAll('div');
parags.forEach(elem => elem.addEventListener('click',
	() => window.setInterval(
		() => elem.innerHTML = Number(elem.innerHTML) + 1, 1000)
));

//
//
//
let user = {
	name: "John",
	age: 30
};

// цикл по ключам и значениям

for (let [key, value] of Object.entries(user)) {
	alert(`${key}:${value}`); // name:John, then age:30
}