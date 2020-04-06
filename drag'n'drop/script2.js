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

let elem = document.querySelector('#elem');
let parent = document.querySelector('#parent');
let shiftX;
let shiftY;

elem.addEventListener('dragstart', function(event) {
	shiftX = event.pageX - elem.getBoundingClientRect().left;
	shiftY = event.pageY - elem.getBoundingClientRect().top;
});

elem.addEventListener('dragend', function(event) {
	elem.style.top = event.pageY - shiftY + 'px';
	elem.style.left = event.pageX - shiftX + 'px';
});

// parent.addEventListener('dragover', function(event) {
// 	event.preventDefault();
// 	this.style.borderStyle = 'dotted';
// });

// parent.addEventListener('drop', function(event) { // must be event dragover
// 	this.style.borderColor = 'blue';
// 	this.style.borderStyle = 'solid';
// 	// this.innerHTML += '!';
// });

// parent.addEventListener('dragenter', function(event) { // must be event dragover
// 	this.innerHTML += '!';
// });

// parent.addEventListener('dragleave', function(event) { // must be event dragover
// 	this.innerHTML += '?';
// });
