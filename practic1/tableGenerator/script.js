// 'use strict'
let rowsNumb = document.getElementById('rowsNumb');
let colsNumb = document.getElementById('colsNumb');
let btn = document.getElementById('btn');
let table = document.getElementById('table');

btn.addEventListener('click', genTable);

function genTable() {
	let rows = +rowsNumb.value;
	let cols = +colsNumb.value;

	for (let i = 0; i < rows; i++) {
		let newRow = document.createElement('tr');
		for (let i = 0; i < cols; i++) {
			let newCol = document.createElement('td');
			newRow.appendChild(newCol);
		}
		table.appendChild(newRow);
	}
}