'use strict'

initGame(document.querySelector('#container'));

function initGame(game) {
	let fieldSize = 3;
	let field = createGameField(game);
	let roundTime = 2;
	let timer = createTimer(game);

	newGame();

	function newGame() {
		clearGameField(field);
		let cells = drawGameField(fieldSize, field);
		addActivateHandler(cells);
	}

	function createGameField(game) {
		var table = document.createElement('table');
		game.appendChild(table);
		return table;
	}

	function createTimer(game) {
		var timer = document.createElement('p');
		game.appendChild(timer);
		return timer;
	}

	function startTimer() {
		timer.innerHTML = 'Time to end : ';
		let startRoundTime = roundTime;
		window.timerId = window.setInterval(function() {
			timers(roundTime, startRoundTime);
		}, 1000);
	}

	function timers(time, startTime) {
		roundTime = time - 1;
		timer.innerHTML = roundTime;
		if (time == 0) {
			stopTimer(startTime);
			window.setTimeout(newGame, 2000);
		}
	}

	function stopTimer(startTime) {
		window.clearInterval(window.timerId);
		timer.innerHTML = 'You lose';
		window.setTimeout(function() {
			timer.innerHTML = '';
		}, 2000);
		roundTime = startTime;
	}

	function clearGameField(field) {
		field.innerHTML = '';
	}

	function addActivateHandler(elems) {
		let counter = 1;
		for (let i = 0; i < elems.length; i++) {
			const element = elems[i];
			element.addEventListener('click', function() {
				let elem = this;
				if (elem.innerText == 1) {
					startTimer();
				}
				if (elem.innerText == counter) {
					showBgColor(elem);
					if (counter == fieldSize * fieldSize) {
						fieldSize++;
						newGame();
					}
					counter++;
				}
			});
		}
	}
}

function drawGameField(size, field) {
	let from = 1;
	let to = size * size;
	let arr = [];
	arr = createArr(from, to);
	arr = shuffle(arr);
	arr = chunkArr(arr, size);
	return createCells(arr, field);
}

function showBgColor(elem) {
	elem.classList.add('active');
}

function createArr(from, to) {
	let arr = [];
	for (let i = from; i <= to; i++) {
		arr.push(i);
	}
	return arr;
}

function shuffle(array) {
	let result = [];
	let random;
	while (array.length > 0) {
		random = Math.floor(Math.random() * Math.floor(array.length));
		result.push(array[random]);
		array.splice(random, 1);
	}
	return result;
}

// [1,2,3,4] => [[1,2], [3,4]]
function chunkArr(array, items) {
	let iterCount = Math.ceil(array.length / items);
	let result = [];
	for (let i = 0; i < iterCount; i++) {
		let arrChunk = [];
		arrChunk = array.splice(0, items);
		result.push(arrChunk);
	}
	return result;
}

function createCells(array, parent) {
	let cells = [];
	for (let i = 0; i < array.length; i++) {
		let row = document.createElement('tr');
		for (let j = 0; j < array[i].length; j++) {
			let cell = document.createElement('td');
			cell.innerHTML = array[i][j];
			row.appendChild(cell);
			cells.push(cell);
		}
		parent.appendChild(row);
	}
	return cells;
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум 
}