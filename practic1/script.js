'use strict'

// var 1

// let inp = document.querySelector('#inp');
// let par = document.querySelector('#par');
// let timer;
// let curr;
// inp.addEventListener('blur', startTimer);
// function startTimer() {
// 	curr = inp.value;
// 	timer = setInterval(decreaseFunc, 1000);
// }
// function decreaseFunc() {
// 	par.innerHTML = curr - 1;
// 	console.log(par.innerHTML);
// 	curr -= 1;
// 	console.log(curr);
// 	if (curr <= 0) {
// 		clearInterval(timer);
// 	}
// }

// var 2

var input = document.getElementById('task');
function func() {
	window.funcId = window.setInterval(go, 500);
 }

function go() {
	if (parseInt(input.value) > 0) {
		input.value = parseInt(input.value) -1;
	}
 	if(parseInt(input.value) == 0) {
		stop();
 	}
 }

function stop() {
	window.clearInterval(window.funcId);
 } 