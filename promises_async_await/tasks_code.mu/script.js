'use strict'

// Задача 1: Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, после которой промис должен зарезолвится (то есть выполнится успешно).

// let promise1 = new Promise(function(resolve, reject) {
// 	setTimeout(() => {
// 		let status = false;
// 		if (status) {
// 			resolve('success');
// 		} else {
// 			reject('error')
// 		}
// 	}, 3000);
// });

// promise1.then(
// 	result => console.log(result),
// 	error => console.log(error)
// );

// Задача 2: Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис. Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.

// let promise2 = new Promise(function(resolve, reject) {
// 	start();

// 	function start() {
// 		let interval = getRandomInt(1, 10);
// 		setTimeout(() => {
// 			console.log(interval);
// 			if (interval >= 1 && interval <= 5) {
// 				resolve('result')
// 			} else if (interval >= 6 && interval <= 10) {
// 				reject('error');
// 			} else {
// 				start();
// 			}
// 		}, interval * 1000);
// 	}
// })

// promise2.then(
// 	result => console.log(result),
// 	error => console.log(error)
// )

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// Задача 3: Сделайте промис, который через 5 секунд случайным образом выполнится или с успехом, или с ошибкой. Примените изученный метод catch для отлавливания ошибок.
let promise2 = new Promise(function(resolve, reject) {
	setTimeout(() => {
		let status = true;
		if (status) {
			resolve('success');
		} else {
			reject('error')
		}
	}, 3000);
});

promise2
	.then(
		result => console.log(result),
	)
	.catch(
		error => console.log(error)
	);