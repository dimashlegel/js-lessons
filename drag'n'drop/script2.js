// 'use strict'
// code.mu
// events for drag and drop 

// for dargable element 

// dragstar 
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

elem.addEventListener('dragend', function(event) {
	this.style.borderColor = 'green';
});

parent.addEventListener('dragover', function(event) {
	event.preventDefault();
	this.style.borderStyle = 'dotted';
});
 
parent.addEventListener('drop', function(event) { // must be event dragover
	this.style.borderColor = 'blue';
	this.style.borderStyle = 'solid';
	// this.innerHTML += '!';
});

parent.addEventListener('dragenter', function(event) { // must be event dragover
	this.innerHTML += '!';
});

parent.addEventListener('dragleave', function(event) { // must be event dragover
	this.innerHTML += '?';
});

