'use strict'
// В классе Promise есть 5 статических методов. 

// 1. Promise.all - принимает массив промисов (может принимать любой перебираемый объект, но обычно используется массив) и возвращает новый промис. Новый промис завершится, когда завершится весь переданный список промисов, и его результатом будет массив их результатов.

// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(alert); // когда все промисы выполнятся, результат будет 1,2,3
// // каждый промис даёт элемент массива

// Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.

// 2. Promise.allSettled - Метод Promise.allSettled всегда ждёт завершения всех промисов. В массиве результатов будет
// {status:"fulfilled", value:результат} для успешных завершений,
// {status:"rejected", reason:ошибка} для ошибок.

// 3. Promise.race - Метод очень похож на Promise.all, но ждёт только первый промис, из которого берёт результат (или ошибку).

//4. Promise.resolve/reject

// Promise.resolve(value) создаёт успешно выполненный промис с результатом value.
// То же самое, что: let promise = new Promise(resolve => resolve(value));
// Promise.reject(error) создаёт промис, завершённый с ошибкой error.
// То же самое, что: let promise = new Promise((resolve, reject) => reject(error));

//
//
// Promisification - Мы берём функцию, которая принимает колбэк и меняем её, чтобы она вместо этого возвращала промис.
//
//
// promisify(f) – она принимает функцию для промисификации f и возвращает функцию-обёртку.

function promisify(f) {
	return function(...args) { // возвращает функцию-обёртку
		return new Promise((resolve, reject) => {
			function callback(err, result) { // наш специальный колбэк для f
				if (err) {
					return reject(err);
				} else {
					resolve(result);
				}
			}

			args.push(callback); // добавляем колбэк в конец аргументов f

			f.call(this, ...args); // вызываем оригинальную функцию
		});
	};
};

// использование:
// let loadScriptPromise = promisify(loadScript);
// loadScriptPromise(...).then(...);
