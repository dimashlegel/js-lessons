'use strict'

let animal = {
	eats: true
};
let rabbit = {
	jumps: true
};

// rabbit.__proto__ = animal; //  "animal является прототипом для rabbit" или "rabbit прототипно наследует от animal".

// Изменение встроенных прототипов

String.prototype.show = function() {
	alert(this);
};

// "BOOM!".show(); // BOOM!

// Полифил – это термин, который означает эмуляцию метода, который существует в спецификации JavaScript, но ещё не поддерживается текущим движком JavaScript.

// Заимствование у прототипов - Это когда мы берём метод из одного объекта и копируем его в другой.

let obj = {
	0: "Hello",
	1: "world!",
	length: 2,
};

obj.join = Array.prototype.join;

// alert( obj.join(',') ); // Hello,world!


// task

// 1.1 Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

// Function.prototype.defer = function(time) {
// 	setTimeout(this, time);
// }

// function f() {
// 	console.log('hello');
// }

// f.defer(1000);

// 1.2 Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Function.prototype.defer2 = function(time) {
	let ff = this;
	return function(...args) {
		setTimeout(() => ff.apply(this, args), time);
	}
}

function f(a, b) {
	alert(a + b);
}

f.defer2(1000)(1, 2); // выведет 3 через 1 секунду.