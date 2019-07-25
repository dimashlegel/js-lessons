'use strict'

let input = document.getElementById('input');
let btn = document.getElementById('button');
let list = document.getElementById('ul');

input.addEventListener('keypress', func);

function func(event) {
	if (event.keyCode == 13) {
		let li = document.createElement('li');
		li.innerHTML = input.value;
		list.appendChild(li);
		input.value = '';
	}
}