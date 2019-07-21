'use strict'

// let select = document.getElementById('select');
// console.log(select.value); - return value of selected element; 
// select.value = 'three'; - make this opition (with value='three) selected;
// select.selectedIndex = 1 - make opition with (sequence-poriadkovyi) number = 1(value = 'two') selected;
// console.log(select.selectedIndex) - return number of selected element;
// select.options - return list with options;
// options[i].selected === true - check on selected

// tasks

// 1.

// let forms = document.forms;
// let btn = document.getElementById('btn');

// btn.addEventListener('click', function() {
// 	let sum = 0;
// 	for (let i = 0; i < forms.length; i++) {
// 		const form = forms[i];
// 		for (let j = 0; j < form.elements.length; j++) {
// 			const element = form.elements[j];
// 			sum += Number(element.value);
// 		}
// 	}
// 	console.log(sum);
// });
//////////////////////////////

// 2.

// let select = document.getElementById('select');
// let inp = document.getElementById('inp');
// let btn = document.getElementById('btn');

// btn.addEventListener('click', function() {
// 	select.value = inp.value;
// });

// 3.

let country = document.getElementById('country');
let city1 = document.getElementById('city1');
let city2 = document.getElementById('city2');



function showCity(choise) {
	switch (choise) {
		case 'Ukraine':

			break;

		case 'Israel':

			break;
	}
}
