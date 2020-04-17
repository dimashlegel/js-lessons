'use strict'
try {
	// код...
} catch (err) {
	// обработка ошибки
	// err - содержит объект ошибки с подробной информацией о произошедшем
}

// Для всех встроенных ошибок этот объект имеет два основных свойства:
// name - // Имя ошибки. Например, для неопределённой переменной это "ReferenceError".
// message - // Текстовое сообщение о деталях ошибки.
// В большинстве окружений доступны и другие, нестандартные свойства. Одно из самых широко используемых и поддерживаемых – это:
// stack - // Текущий стек вызова: строка, содержащая информацию о последовательности вложенных вызовов, которые привели к ошибке. Используется в целях отладки.
//
//
// Генерация собственных ошибок
//
// throw - Оператор генерирует ошибку.
// throw <объект ошибки>

let json = '{ "age": 30 }'; // данные неполны
try {
	let user = JSON.parse(json); // <-- выполнится без ошибок
	if (!user.name) {
		throw new SyntaxError("Данные неполны: нет имени"); // (*)
	}
	alert(user.name);
} catch (e) {
	alert("JSON Error: " + e.message); // JSON Error: Данные неполны: нет имени
}

// try…catch…finally

// try {
// 	... пробуем выполнить код...
// } catch(e) {
// 	... обрабатываем ошибки ...
// } finally {
// 	... выполняем всегда ...
// }

// 1.1 Создайте класс FormatError, который наследует от встроенного класса SyntaxError.

class FormatError extends SyntaxError {
	constructor(message) {
		super(message)
		this.name = this.constructor.name;
	}
}

let err = new FormatError("ошибка форматирования");

alert(err.message); // ошибка форматирования
alert(err.name); // FormatError
alert(err.stack); // stack

alert(err instanceof FormatError); // true
alert(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)