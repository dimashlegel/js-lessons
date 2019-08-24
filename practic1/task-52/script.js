'use strict'

let tdArr = document.querySelectorAll('#table tr td');
let btn = document.querySelector('#btn');
let inp = document.querySelector('#inp');
let reset = document.querySelector('#reset');

tdArr.forEach((elem) => {
	elem.addEventListener('click', addActive);
})

function addActive() {
	this.classList.add('active');
}

btn.addEventListener('click', getSum);

function getSum() {
	let activeTds = document.querySelectorAll('#table tr td.active');
	let sum = 0;
	activeTds.forEach((elem) => {
		sum += +elem.innerText;
	});
	inp.value = sum;
}

reset.addEventListener('click', resetActive);

function resetActive() {
	let activeTds = document.querySelectorAll('#table tr td.active');
	activeTds.forEach((elem) => {
		elem.classList.remove('active');
	})
	inp.value = '';
}