'use strict'

let ul = document.getElementById('ul-main');
let listItems = ul.querySelectorAll('li');

console.log(listItems);

listItems.forEach(element => {
	element.addEventListener('click', function() {
		this.firstElementChild.classList.toggle('active');
	})
});