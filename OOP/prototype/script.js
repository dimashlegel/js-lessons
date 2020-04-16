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
	// alert(a + b);
}

f.defer2(1000)(1, 2); // выведет 3 через 1 секунду.

//
//
// Методы прототипов, объекты без свойства __proto__

// Современные же методы это:

// Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
// Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.
// Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto.
// Эти методы нужно использовать вместо __proto__.

let animal2 = {
	eats: true
};
// создаём новый объект с прототипом animal
let rabbit2 = Object.create(animal2);
// alert(rabbit2.eats); // true
// alert(Object.getPrototypeOf(rabbit2) === animal2); // получаем прототип объекта rabbit
Object.setPrototypeOf(rabbit2, {}); // заменяем прототип объекта rabbit на {}

// Мы также можем использовать Object.create для «продвинутого» клонирования объекта, более мощного, чем копирование свойств в цикле for..in:
// клон obj c тем же прототипом (с поверхностным копированием свойств)
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));


//
//

// 1.1 Добавьте toString в словарь

let dictionary = Object.create(null, {
	toString: {
		value() {
			return Object.keys(this).join();
		}
	}
});

// ваш код, который добавляет метод dictionary.toString

dictionary.toString;

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
	alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"