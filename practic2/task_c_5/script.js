'use strict'

let table = document.getElementById('table');
let result = document.getElementById('result');
let resultNumb = result.querySelector('span');
let btn = document.getElementById('btn');

let inputs = document.getElementsByTagName('input');

for (let i = 0; i < inputs.length; i++) {
	const input = inputs[i];
	// input.addEventListener('input', getValue);
}

// function getValue() {

// }

btn.addEventListener('click', getProdData);

function getProdData() {
	let prodData = [];
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].value.length) {
			prodData[i] = inputs[i].value;
		} else {
			return alert('Feel all inputs');
		}
	}
	return addProduct(prodData);
}

function addProduct(prodArray) {
	let tr = document.createElement('tr');
	for (let i = 0; i < prodArray.length; i++) {
		const element = prodArray[i];
		let td = document.createElement('td');
		td.innerHTML = element;
		tr.appendChild(td);
	}
	let sumTd = document.createElement('td');
	sumTd.innerHTML = prodArray[1] * prodArray[2];
	tr.appendChild(sumTd);
	table.appendChild(tr);
	return getTotal(sumTd.innerHTML);
}

function getTotal(sum) {
	let finalResult = parseInt(resultNumb.innerHTML);
	finalResult += +sum;
	resultNumb.innerHTML = finalResult;
}