'use strict'

// Чтение из cookie
// document.cookie -> ключ=значение;

// Запись в document.cookie
// document.cookie = "user=John";

// Параметры 
// document.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"

// path=/mypath; - URL-префикс пути, куки будут доступны для страниц под этим путём. Должен быть абсолютным. По умолчанию используется текущий путь.
// path=/; - чтобы наше куки было доступно на всех страницах сайта.

// domain=site.com; - Домен, на котором доступны наши куки. На практике, однако, есть ограничения – мы не можем указать здесь какой угодно домен.

// expires=Tue, 19 Jan 2038 03:14:07 GMT; - Дата истечения срока действия куки, когда браузер удалит его автоматически.
// Если мы установим в expires прошедшую дату, то куки будет удалено.

// max-age=3600; - Альтернатива expires, определяет срок действия куки в секундах с текущего момента. Если задан ноль или отрицательное значение, то куки будет удалено:

// secure; - С этой настройкой, если куки будет установлено на сайте https://site.com, то оно не будет доступно на том же сайте с протоколом HTTP, как http://site.com.

// samesite - настройка безопасности, применяется для защиты от так называемой XSRF-атаки (межсайтовая подделка запроса).

// httpOnly - Эта настройка запрещает любой доступ к куки из JavaScript. Мы не можем видеть такое куки или манипулировать им с помощью document.cookie..
// 
// 
// Функции для работы с куки

// 1. возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

// 2. setCookie(name, value, options)

function setCookie(name, value, options = {}) {

	options = {
		path: '/',
		// при необходимости добавьте другие значения по умолчанию
		...options
	};

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (let optionKey in options) {
		updatedCookie += "; " + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue;
		}
	}

	document.cookie = updatedCookie;
}

// Пример использования:
// setCookie('user', 'John', {secure: true, 'max-age': 3600});

// 3.deleteCookie(name)

function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}