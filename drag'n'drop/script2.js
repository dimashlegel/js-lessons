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
let img = new Image();
img.src = 'image.png'
// let shiftX;
// let shiftY;
let currentElem;

elems.forEach((elem, index) => {
	elem.addEventListener('dragstart', function(event) {
		currentElem = this;
		event.dataTransfer.setData('text', index); // work just in gragstart event
	})
});

parent.addEventListener('dragover', function(event) {
	event.preventDefault();
	event.dataTransfer.dropEffect = 'link'; // link, copy, move, none;
})

parent.addEventListener('drop', function(event) {
	// this.appendChild(currentElem);
	this.appendChild(elems[event.dataTransfer.getData('text')]);
})
