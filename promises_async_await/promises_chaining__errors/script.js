'use strict'

// Если обработчик в .then (или в catch/finally, без разницы) возвращает промис, последующие элементы цепочки ждут, пока этот промис выполнится. Когда это происходит, результат его выполнения (или ошибка) передаётся дальше.

// Пример: loadScript
loadScript("/article/promise-chaining/one.js")
	.then(function(script) {
		return loadScript("/article/promise-chaining/two.js");
	})
	.then(function(script) {
		return loadScript("/article/promise-chaining/three.js");
	})
	.then(function(script) {
		// вызовем функции, объявленные в загружаемых скриптах,
		// чтобы показать, что они действительно загрузились
		one();
		two();
		three();
	});
//
//
// Более сложный пример: fetch

fetch('/article/promise-chaining/user.json')
	// .then в коде ниже выполняется, когда удалённый сервер отвечает
	.then(function(response) {
		// response.text() возвращает новый промис,
		// который выполняется и возвращает полный ответ сервера,
		// когда он загрузится
		return response.text();
	})
	.then(function(text) {
		// ...и здесь содержимое полученного файла
		alert(text); // {"name": "iliakan", isAdmin: true}
	});

// full example
function loadJson(url) {
	return fetch(url)
		.then(response => response.json());
}

function loadGithubUser(name) {
	return fetch(`https://api.github.com/users/${name}`)
		.then(response => response.json());
}

function showAvatar(githubUser) {
	return new Promise(function(resolve, reject) {
		let img = document.createElement('img');
		img.src = githubUser.avatar_url;
		img.className = "promise-avatar-example";
		document.body.append(img);

		setTimeout(() => {
			img.remove();
			resolve(githubUser);
		}, 3000);
	});
}

// Используем их:
loadJson('/article/promise-chaining/user.json')
	.then(user => loadGithubUser(user.name))
	.then(showAvatar)
	.then(githubUser => alert(`Показ аватара ${githubUser.name} завершён`));
// ...

//
//
// Промисы: обработка ошибок
//
//
// Если происходит ошибка, и отсутствует её обработчик, то генерируется событие unhandledrejection, и соответствующий объект event содержит информацию об ошибке.

window.addEventListener('unhandledrejection', function(event) {
  // объект события имеет два специальных свойства:
  alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
  alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
});

new Promise(function() {
  throw new Error("Ошибка!");
}); // нет обработчика ошибок