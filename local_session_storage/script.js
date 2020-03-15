'use strict'

// Объекты хранилища localStorage и sessionStorage предоставляют одинаковые методы и свойства:

// setItem(key, value) – сохранить пару ключ/значение.
// getItem(key) – получить данные по ключу key.
// removeItem(key) – удалить данные с ключом key.
// clear() – удалить всё.
// key(index) – получить ключ на заданной позиции.
// length – количество элементов в хранилище.

// localStorage.setItem('test', 1);

// Также можно получать/записывать данные, как в обычный объект:

// установить значение для ключа
// localStorage.test = 2;

// получить значение по ключу
// alert( localStorage.test ); // 2

// удалить ключ
// delete localStorage.test;

// Перебор ключей
// 1.Но можно пройти по ним, как по обычным массивам:
// for (let i = 0; i < localStorage.length; i++) {
// 	let key = localStorage.key(i);
// 	alert(`${key}: ${localStorage.getItem(key)}`);
// }
// 2/ использовать цикл, как по обычному объекту for key in localStorage.
// for (let key in localStorage) {
// 	if (!localStorage.hasOwnProperty(key)) {
// 		continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
// 	}
// 	alert(`${key}: ${localStorage.getItem(key)}`);
// }
// 3 Либо просто получить «собственные» ключи с помощью Object.keys, а затем при необходимости вывести их при помощи цикла:
// let keys = Object.keys(localStorage);
// for(let key of keys) {
//   alert(`${key}: ${localStorage.getItem(key)}`);
// }

// 1. Создайте поле textarea, значение которого будет автоматически сохраняться при каждом его изменении. Когда пользователь закроет страницу и потом откроет её заново он должен увидеть последнее введённое значение.

let textArea = document.querySelector('#textArea');
textArea.value = localStorage.getItem('area');
textArea.addEventListener('change', function() {
	localStorage.setItem('area', this.value);
});
