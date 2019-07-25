'use strict'

let p = document.querySelector('p');
let inputs = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < inputs.length; i++) {
	const element = inputs[i];
	element.addEventListener('change', func);
}

function func() {
	if (this.checked) {
		p.style.cssText += this.value;
	} else {
		let prop = this.value;
		let propName = prop.split(':');
		p.style.removeProperty(propName[0]);
	}
}