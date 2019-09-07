'use strict'

let calculator = document.getElementById('calc');
let buttons = document.querySelectorAll('.button');
let display = document.getElementById('display');
let evalStr = '';


buttons.forEach(element => {
	element.addEventListener('click', getDataType);
});

function getDataType() {
	let attrValue = this.getAttribute('data-type');
	return getEvaluateStr(attrValue);
}

function getEvaluateStr(value) {
	if (value === '=') {
		console.log('evalStr:', evalStr);
		return getTotal(evalStr);
	} else if (value === 'C') {
		evalStr = '';
		display.value = '';
	} else {
		evalStr += value;
		display.value = evalStr;
	}
}

function getTotal(string) {
	display.value = eval(string);
}