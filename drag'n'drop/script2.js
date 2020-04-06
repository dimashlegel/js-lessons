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
		event.dataTransfer.setDragImage(img, 10, 10);
	})
});

parent.addEventListener('dragover', function(event) {
	// console.log(this);
	event.preventDefault();
})
parent.addEventListener('drop', function(event) {
	// this.appendChild(currentElem);
	this.appendChild(elems[event.dataTransfer.getData('text')]);
})
