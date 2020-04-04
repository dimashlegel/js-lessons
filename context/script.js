'use strict'
// Привязывание контекста

// 1. Метод call

var elem = document.getElementById('elem');

function func(param1, param2) {
	console.log(this.value, param1, param2);
}

// func(); - undefined - this not allow
func.call(elem, 'www', 'qqq'); // - передає elem в функцію як this 

// 2. Метод apply
func.apply(elem, ['www', 'qqq']); // - в apply параметры передаются в виде массива

// 3. Метод bind - позволяет привязать контекст к функции навсегда. Он вызывается вот так: func.bind(elem), но результатом работы будет не результат функции func, а новая функция, которая такая же, как и func, но у нее this всегда указывает на elem.
// С помощью bind скажем, что this в ней всегда равен elem и запишем в новую переменную:
var newFunc = func.bind(elem); //обратите внимание - параметры не передаем

newFunc('a', 'w'); // привет a w