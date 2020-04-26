'use strict'

// Асинхронные функции
async function f() {
	return 1;
}

// f().then(alert); // 1
// эта функция всегда возвращает промис. Значения других типов оборачиваются в завершившийся успешно промис автоматически.

// Await - работает только внутри async–функций
// let value = await promise; //  - Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится. 



// task

// 1. 
async function loadJson(url) {
	let response = await fetch(url);
	if (response.status == 200) {
		let json = await response.json();
		return json;
	}
	throw new Error(response.status);
}

loadJson('no-such-user.json') // (3)
	.catch(console.log); // Error: 404