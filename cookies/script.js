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

// Examples

// 1.1 Установите куку с вашем именем и вашим возрастом. Выведите на экран содержимое этих двух кук.
// document.cookie = "name=Dima";
// document.cookie = "age=25";
// console.log(getCookie('name'));
// console.log(getCookie('age'));

// 1.3 Дан инпут. Ведите в него город, например, Минск. Сохраните его в куки. Зайдя на другую страницу сайта вы должны увидеть фразу 'ваш город - Минск'.

// document.addEventListener('DOMContentLoaded', function() {
// 	// your code goes here
// }, false);

// let city = document.getElementById('city');
// city.addEventListener('blur', function() {
// 	let cityName = city.value;
// 	document.cookie = "city=" + cityName;
// })

// 1.4 При заходе на страницу спросите с помощью инпута день рождения пользователя. Когда он зайдет с следующий раз - напишите сколько месяцев, дней, часов, минут и секунд осталось до его дня рождения. И пусть по этим числам запуститься обратный отсчет (то есть они будут тикать).

let dateBirth = document.getElementById('dateBirth');
let enter = document.getElementById('enter');

enter.addEventListener('click', function() {
	document.cookie = 'dateBirth=' + dateBirth.value;
})

let birthday = getCookie('dateBirth');

function getDaysToBirth() {
	let birthArr = birthday.split('.');
	let today = new Date();
	let nextBirth = new Date(today.getFullYear(), Number(birthArr[1]) - 1, Number(birthArr[0]));

	if (today - nextBirth > 0) {
		nextBirth = new Date(today.getFullYear() + 1, Number(birthArr[1]) - 1, Number(birthArr[0]));
	}

	today = Math.floor((nextBirth - today) / 1000);

	let tsec = today % 60;
	today = Math.floor(today / 60);
	if (tsec < 10) tsec = '0' + tsec;

	let tmin = today % 60;
	today = Math.floor(today / 60);
	if (tmin < 10) tmin = '0' + tmin;

	let thour = today % 24;
	today = Math.floor(today / 24);
	let timestr = today + " дней " + thour + " часов " + tmin + " минут " + tsec + " секунд";

	document.querySelector('#date').innerHTML = timestr;
	window.setTimeout(getDaysToBirth, 1000);
}

if (birthday) getDaysToBirth();


// 1.5 Дана форма с инпутами. Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму). Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.

let one = getCookie('one');
if (one) document.getElementById('one').value = one;
let two = getCookie('two');
if (two) document.getElementById('two').value = two;
let three = getCookie('three');
if (three) document.getElementById('three').value = three;

window.addEventListener('beforeunload', function() {
	document.querySelectorAll('#saveInput input').forEach(function(el) {
		document.cookie = el.id + '=' + el.value;
	})
});

// 1.6 Даны чекбоксы. Пользователь произвольно отмечает их и закрывает страницу. Сделайте так, чтобы при следующем заходе на страницу чекбоксы стали отмеченными так, как это сделал пользователь ранее. 

let one1 = getCookie('one1');
if (one1 == 'true') document.getElementById('one1').checked = true;
let two2 = getCookie('two2');
if (two2 == 'true') document.getElementById('two2').checked = true;
let three3 = getCookie('three3');
if (three3 == 'true') document.getElementById('three3').checked = true;

window.addEventListener('beforeunload', () => {
	document.querySelectorAll('input[type=checkbox]').forEach((el) => {
		document.cookie = el.id + '=' + el.checked;
	});
})

// 1.7 При заходе на страницу появляется счетчик обратного отсчета. Когда он доходит до нуля, на странице пишется - 'отсчет закончен'. При обновлении страницы счетчик не должен начинать идти заново.

document.addEventListener('DOMContentLoaded', function() {
	let ch = getCookie('ch');
	if (!ch) {
		let count = 10;
		window.idInterval = setInterval(function() {
			if (count == 0) {
				document.querySelector('#ch').innerHTML = 'Відлік закінчений';
				clearInterval(window.idInterval);
				document.cookie = "ch=true";
			} else {
				document.querySelector('#ch').innerHTML = count--;
			}
		}, 1000)
	} else {
		document.querySelector('#ch').innerHTML = 'Відлік закінчений';
	}
}, false);

// 1.8 Дан текcтареа. Пользователь может потянуть за его угол и изменить его размер. Сделайте так, чтобы при следующем заходе на страницу, текстареа был заданного размера.

document.addEventListener('DOMContentLoaded', function() {
	let textarea = document.getElementById('textarea');
	let areaHeight = getCookie('areaHeight');
	let areaWidth = getCookie('areaWidth');
	if (areaHeight || areaWidth) {
		textarea.style.height = areaHeight;
		textarea.style.width = areaWidth;
	}
	window.addEventListener('beforeunload', function() {
		document.cookie = 'areaHeight=' + textarea.style.height;
		document.cookie = 'areaWidth=' + textarea.style.width;
	})
}, false)

// 1.9 Дан инпут. В него можно ввести данные, затем поредактировать их, затем еще поредактировать. Пусть инпут хранит историю своих изменений (даже после перезагрузки страницы). Сверху над инпутом должны появится стрелочки, с помощью которых можно перемещаться по истории.

document.addEventListener('DOMContentLoaded', function() {

	function getActiveHistory() {
		document.querySelector('#val').value = history[activ];
	}

	let history = getCookie("history");
	if (history) history = history.split('#');
	else history = [];
	let activ = history.length;

	window.addEventListener('beforeunload', function() {
		document.cookie = "history=" + history.join("#");
	})

	document.querySelector('#backward').addEventListener('click', function() {
		if (activ > 0) activ--;
		getActiveHistory();
	});

	document.querySelector('#forward').addEventListener('click', function() {
		if (activ < history.length - 1) activ++;
		getActiveHistory();
	});

	document.querySelector('#val').addEventListener('change', function() {
		if (this.value)
			history.push(this.value);
		activ = history.length - 1;
	});

}, false);


// 1.10 Дан сайт. Пусть каждая страница для каждого посетителя хранит время последнего захода и количество заходов на нее этим посетителем. Пусть эти данные показываются при заходе в формате 'с последнего захода прошло ... вы посещали эту страницу ... раз'

document.addEventListener('DOMContentLoaded', function() {

	let visit = getCookie("visit");
	let dateVisit = getCookie("dateVisit");
	if (dateVisit) {
		dateVisit = dateVisit.split("-");
		dateVisit = new Date(dateVisit[0], dateVisit[1], dateVisit[2], dateVisit[3], dateVisit[4], dateVisit[5]);
	}

	let date = new Date();
	if (visit || dateVisit) {
		alert("с последнего захода прошло " + ((date - dateVisit) / 1000).toFixed(2) + " секунд, вы посещали эту страницу " + visit + " раз");
		visit++;
	} else {
		visit = 1;
	}

	dateVisit = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + "-" + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
	document.cookie = "visit=" + visit;
	document.cookie = "dateVisit=" + dateVisit;
	
})
