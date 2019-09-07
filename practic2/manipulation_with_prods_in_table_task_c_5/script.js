'use strict'

let table = document.getElementById('table');
let result = document.getElementById('result');
let resultNumb = result.querySelector('span');
let btn = document.getElementById('btn');
let inputs = document.getElementsByTagName('input');

btn.addEventListener('click', getProdData);

function getProdData() {
	let prodData = [];
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].value.length) {
			prodData[i] = inputs[i].value;
		} else {
			return alert('Fill all inputs');
		}
	}
	return addProduct(prodData);
}

function addProduct(prodArray) {
	let tr = document.createElement('tr');
	createTd(tr, prodArray[0], 'prodName');
	createTd(tr, prodArray[1], 'prodPrice');
	createTd(tr, prodArray[2], 'prodQuant');
	getTotalTd(tr);
	getRemoveTd(tr);
}

function createTd(tr, element, className) {
	let td = document.createElement('td');
	td.classList.add(className);
	td.innerHTML = element;
	td.addEventListener('click', editTd);
	tr.appendChild(td);
}

function getTotalTd(tr) {
	let sumTd = document.createElement('td');
	sumTd.classList.add('cost');
	sumTd.innerHTML = Number(tr.querySelector('.prodPrice').innerText) * Number(tr.querySelector('.prodQuant').innerText);
	tr.appendChild(sumTd);
	table.appendChild(tr);
	getTotal();
}

function getTotal() {
	let costs = document.querySelectorAll('td.cost');
	let res = 0;
	for (let i = 0; i < costs.length; i++) {
		const element = costs[i];
		res += +element.innerHTML
	}
	let finalResult = parseInt(resultNumb.innerHTML);
	finalResult = +res;
	resultNumb.innerHTML = finalResult;
}

function recalculateSum(tr) {
	tr.querySelector('.cost').innerHTML = Number(tr.querySelector('.prodPrice').innerText) * Number(tr.querySelector('.prodQuant').innerText);
}

function getRemoveTd(tr) {
	let removeTd = document.createElement('td');
	removeTd.innerHTML = '<a href="#">delete</a>'
	let delBtn = removeTd.querySelector('a');
	delBtn.addEventListener('click', function(e) {
		let target = e.target;
		while (target != 'TR') {
			if (target.tagName == "TR") {
				table.removeChild(target);
				break;
			}
			target = target.parentNode;
		}
		getTotal();
	});
	tr.appendChild(removeTd);
}

function editTd() {
	let tdCurrent = this;
	let editInput = document.createElement('input');
	editInput.value = this.innerHTML;
	this.appendChild(editInput);
	this.removeEventListener('click', editTd);

	editInput.addEventListener('blur', function() {
		tdCurrent.innerHTML = this.value;
		tdCurrent.addEventListener('click', editTd);
		recalculateSum(tdCurrent.parentElement);
		getTotal();
	})

}