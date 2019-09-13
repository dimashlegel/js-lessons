'use strict'
let field = document.querySelector('#field');
let win = document.querySelector('#win');
let reset = document.querySelector('#reset');
let row, col;
let rows = 3;
let cols = 3;

for (let i = 0; i < rows; i++) {
	row = document.createElement('tr');
	for (let j = 0; j < cols; j++) {
		field.appendChild(row);
		col = document.createElement('td');
		col.classList.add('col');
		col.addEventListener('click', getNumber);
		row.appendChild(col);
	};
}

let player = 'X';
let counter = 0;

function getNumber() {
	if (this.innerHTML === '' && player === 'X') {
		this.innerHTML = player;
		player = '0';
		counter++;
		checkWinCombination(counter);
	} else if (this.innerHTML === '' && player === '0') {
		this.innerHTML = player;
		player = 'X';
		counter++;
		checkWinCombination(counter);
	} else return false;
}

let colsArray = document.querySelectorAll('.col');

function checkWinCombination(count) {

	let winnerCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[6, 4, 2],
	]

	for (let i = 0; i < winnerCombinations.length; i++) {
		const comb = winnerCombinations[i];
		if (colsArray[comb[0]].innerHTML == colsArray[comb[1]].innerHTML && colsArray[comb[0]].innerHTML == colsArray[comb[2]].innerHTML && colsArray[comb[0]].innerHTML != '') {
			for (let i = 0; i < colsArray.length; i++) {
				const col = colsArray[i];
				col.removeEventListener('click', getNumber);
			}
			return win.innerHTML = colsArray[comb[0]].innerHTML;
		} else {
			if (count >= 9) {
				win.innerHTML = 'nichia';
			}
		}

	}
}

reset.addEventListener('click', resetGame);

function resetGame() {
	for (let i = 0; i < colsArray.length; i++) {
		const element = colsArray[i];
		element.innerHTML = '';
		element.addEventListener('click', getNumber);
	}
	win.innerHTML = '';
	counter = 0;
}