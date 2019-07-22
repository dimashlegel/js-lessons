'use strict'

let inp = document.getElementById('inp');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');

plus.addEventListener('click', increase);
minus.addEventListener('click', decrease);

function increase() {
	let val = Number(inp.value);
	val += 1;
	inp.value = val;
	minus.disabled = false;

}

function decrease() {
	if (inp.value == 0) {
		minus.disabled = true;
	} else {
		minus.disabled = false;
		inp.value -= 1;
	}
}