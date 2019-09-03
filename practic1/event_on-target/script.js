'use strict'

let table = document.querySelector('#table');
let name = document.querySelector('#name');
let surname = document.querySelector('#surname');
let btn = document.querySelector('#btn');


btn.addEventListener('click', addToTable);

function addToTable(e) {
	createUser();
}

function createUser() {
	let newTr = document.createElement('tr');
	let newName = document.createElement('td');
	let newSurName = document.createElement('td');
	if (name.value != '' && surname.value != '') {
		newName.innerHTML = name.value;
		name.value = '';
		newSurName.innerHTML = surname.value;
		surname.value = '';
		newTr.append(newName, newSurName);
		table.appendChild(newTr);
	} else {
		if (name.value == '') {
			alert('Enter Name');
		} else {
			alert('Enter SurName');
		}
	}
}

table.addEventListener('click', editInfo);

function editInfo(e) {

	// if (e.target.tagName === 'TD') {
	// 	let newVal = prompt();
	// 	e.target.innerHTML = newVal;
	// }
	
	let target = e.target
	while (target != this) {
		if (target.tagName == "TD") {
			let newVal = prompt();
			target.innerHTML = newVal;
			break;
		}
		target = target.parentNode;
	}
}