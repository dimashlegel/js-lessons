'use strict'

let input = document.getElementById('input');
let btn = document.getElementById('button');
let list = document.getElementById('ul');

btn.addEventListener('click', func);

function func() {
	let arr = input.value.split(',');
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		let li = document.createElement('li');
		li.innerHTML = element;
		list.appendChild(li);
	}
}