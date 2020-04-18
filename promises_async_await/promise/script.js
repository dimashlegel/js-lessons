'use strict'

// PROMISE – это специальный объект в JavaScript, который связывает «создающий» и «потребляющий» коды вместе. 

let promise = new Promise(function(resolve, reject) {
	// функция-исполнитель (executor) - function(resolve, reject) {} - запускается автоматически
	// resolve , reject - это колбэки, которые предоставляет сам JavaScript
	// resolve(value) -  если работа завершилась успешно, с результатом value.
	// reject(error) — если произошла ошибка, error – объект ошибки.
});

// У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:
//  - state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено с ошибкой») при 			 вызове reject.
//  - result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).


// методы - Потребители: then, catch, finally

// .then - 

promise.then(
	function(result) {
		/* обработает успешное выполнение */
	}, // – Первый аргумент метода .then функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат.
	function(error) {
		/* обработает ошибку */
	} // - Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», и получает ошибку. 
);

// .catch - Если мы хотели бы только обработать ошибку

let promise2 = new Promise((resolve, reject) => {
	setTimeout(() => reject(new Error("Ошибка!")), 1000);
});
// .catch(f) это тоже самое, что promise.then(null, f)
// promise2.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду 

// .finally - похож на .then(f, f), в том смысле, что f выполнится в любом случае, когда промис завершится: успешно или с ошибкой.
// new Promise((resolve, reject) => {
//   /* сделать что-то, что займёт время, и после вызвать resolve/reject */
// })
//   // выполнится, когда промис завершится, независимо от того, успешно или нет
//   .finally(() => остановить индикатор загрузки)
//   .then(result => показать результат, err => показать ошибку)

// finally не предназначен для обработки результата промиса. Так что он просто пропускает его через себя дальше.



// Пример: loadScript

function loadScript(src) {
	return new Promise(function(resolve, reject) {
		let script = document.createElement('script');
		script.src = src;

		script.onload = () => resolve(script);
		script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

		document.head.append(script);
	});
}

let promise4 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise4.then(
	script => alert(`${script.src} загружен!`),
	error => alert(`Ошибка: ${error.message}`)
);

promise4.then(script => alert('Ещё один обработчик...'));

// task

// 1.2 Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

function delay(ms) {
	return new Promise(function(resolve, reject) {
		setTimeout(resolve, ms);
	})
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));

// 1.3

function showCircle(cx, cy, radius) {

	let div = document.createElement('div');
	div.style.width = 0;
	div.style.height = 0;
	div.style.left = cx + 'px';
	div.style.top = cy + 'px';
	div.className = 'circle';
	document.body.append(div);

	return new Promise(function(resolve, reject) {

		setTimeout(() => {
			div.style.width = radius * 2 + 'px';
			div.style.height = radius * 2 + 'px';

			div.addEventListener('transitionend', function handler() {
				div.removeEventListener('transitionend', handler);
				resolve(div);
			})
		}, 0);


	})

}


let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
	showCircle(150, 150, 100).then(elem => {
		elem.classList.add('message-ball');
		elem.append("Hello, world!");
	});

	// showCircle(150, 150, 102, elem => {
	// 	elem.classList.add('message-ball');
	// 	elem.append('Hello');
	// });
})
