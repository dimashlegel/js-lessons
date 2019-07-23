'use strict'

let inp = document.querySelector('input');
let par = document.querySelector('p');

document.documentElement.addEventListener('mouseup', func);

function func(event) {
	inp.value = window.getSelection().toString();
}