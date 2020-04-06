// 'use strict'
// code.mu
// events for drag and drop 

// for dargable element 

// dragstart 
// drag 
// dragend 

// for parent 

// dragenter
// dragleave
// dragover
// drop

// 1.1

// let elem = document.querySelector('#elem');
let elems = document.querySelectorAll('.elem');
let parent = document.querySelector('#parent');
let shiftX;
let shiftY;

let currentElem;
elems.forEach(elem => {
	elem.addEventListener('dragstart', function(event) {
		currentElem = this;
	})
});
// elem.addEventListener('drag', function(event) {
// 	console.log('ss');
// });

// elem.addEventListener('dragstart', function(event) {
// 	shiftX = event.pageX - elem.getBoundingClientRect().left;
// 	shiftY = event.pageY - elem.getBoundingClientRect().top;
// });

// elem.addEventListener('dragend', function(event) {
// 	elem.style.top = event.pageY - shiftY + 'px';
// 	elem.style.left = event.pageX - shiftX + 'px';
// });

parent.addEventListener('dragover', function(event) {
	// console.log(this);
	event.preventDefault();
})
parent.addEventListener('drop', function(event) {
	this.appendChild(currentElem);
	// console.log(currentElem);
})
