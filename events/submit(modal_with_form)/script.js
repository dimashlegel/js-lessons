'use strict'

let btn = document.getElementById('showForm');
let formCont = document.getElementById('prompt-form-container');
let container = document.querySelector('.container');

let form = document.querySelector('#prompt-form');

function openModal() {
	formCont.classList.add('show');
	container.classList.add('show');
	document.body.style.overflow = 'hidden';
}

function closeModal() {
	formCont.classList.remove('show');
	container.classList.remove('show');
	document.body.style.overflow = '';
}

function showPrompt(text, callback) {

	openModal();

	let form = document.getElementById('prompt-form');
	document.getElementById('prompt-message').innerHTML = text;

	form.text.value = '';

	function complete(value) {
		closeModal();
		document.onkeydown = null;
		callback(value);
	}

	form.onsubmit = function() {
		let value = form.text.value;
		if (value == '') return false;

		complete(value);
		return false;
	}

	form.cancel.onclick = function() {
		complete(null);
	}

	document.onkeydown = function(e) {
		if (e.key == "Escape") {
			complete(null);
		}
	}

	let lastElem = form.elements[form.elements.length - 1];
	let firstElem = form.elements[0];

	lastElem.onkeydown = function(e) {
		if (e.key == 'Tab' && !e.shiftKey) {
			firstElem.focus();
			return false;
		}
	}

	firstElem.onkeydown = function(e) {
		if (e.key == "Tab" && e.shiftKey) {
			lastElem.focus();
			return false;
		}
	}

	form.elements.text.focus();

}

btn.addEventListener('click', function() {
	showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
		alert("Вы ввели: " + value);
	});
});