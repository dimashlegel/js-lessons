'use strict'

let slider = document.getElementById('slider');
let thumb = slider.querySelector('.thumb');

thumb.onmousedown = function(event) {

	event.preventDefault(); // предотвратить запуск выделения (действие браузера)

	// запомним расстояние от курсора до левого верхнего угла thumb
	let shiftX = event.clientX - thumb.getBoundingClientRect().left;

	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);

	function onMouseMove(event) {
		let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
		console.log(newLeft);

		if (newLeft < 0) {
			newLeft = 0;
		}
		let rightEdge = slider.offsetWidth - thumb.offsetWidth;
		if (newLeft > rightEdge) {
			newLeft = rightEdge;
		}

		thumb.style.left = newLeft + 'px';

	}

	// отпустить элемент, удалить ненужные обработчики
	function onMouseUp() {
		document.removeEventListener('mouseup', onMouseUp);
		document.removeEventListener('mousemove', onMouseMove);
	}
};

// відключаємо власний Drag’n’Drop браузера
thumb.ondragstart = function() {
	return false;
};



// 
// 
// soccer

let isDragging = false;

document.addEventListener('mousedown', function(event) {

	let dragElement = event.target.closest('.draggable');

	if (!dragElement) return;

	event.preventDefault();

	dragElement.ondragstart = function() {
		return false;
	};

	let coords, shiftX, shiftY;

	startDrag(dragElement, event.clientX, event.clientY);

	function onMouseUp(event) {
		finishDrag();
	};

	function onMouseMove(event) {
		moveAt(event.clientX, event.clientY);
	}

	// on drag start:
	//   remember the initial shift
	//   move the element position:fixed and a direct child of body
	function startDrag(element, clientX, clientY) {
		if (isDragging) {
			return;
		}

		isDragging = true;

		document.addEventListener('mousemove', onMouseMove);
		element.addEventListener('mouseup', onMouseUp);

		shiftX = clientX - element.getBoundingClientRect().left;
		shiftY = clientY - element.getBoundingClientRect().top;

		element.style.position = 'fixed';

		moveAt(clientX, clientY);
	};

	// switch to absolute coordinates at the end, to fix the element in the document
	function finishDrag() {
		if (!isDragging) {
			return;
		}

		isDragging = false;

		dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
		dragElement.style.position = 'absolute';

		document.removeEventListener('mousemove', onMouseMove);
		dragElement.removeEventListener('mouseup', onMouseUp);
	}

	function moveAt(clientX, clientY) {
		// new window-relative coordinates
		let newX = clientX - shiftX;
		let newY = clientY - shiftY;

		// check if the new coordinates are below the bottom window edge
		let newBottom = newY + dragElement.offsetHeight; // new bottom

		// below the window? let's scroll the page
		if (newBottom > document.documentElement.clientHeight) {
			// window-relative coordinate of document end
			let docBottom = document.documentElement.getBoundingClientRect().bottom;

			// scroll the document down by 10px has a problem
			// it can scroll beyond the end of the document
			// Math.min(how much left to the end, 10)
			let scrollY = Math.min(docBottom - newBottom, 10);

			// calculations are imprecise, there may be rounding errors that lead to scrolling up
			// that should be impossible, fix that here
			if (scrollY < 0) scrollY = 0;

			window.scrollBy(0, scrollY);

			// a swift mouse move make put the cursor beyond the document end
			// if that happens -
			// limit the new Y by the maximally possible (right at the bottom of the document)
			newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
		}

		// check if the new coordinates are above the top window edge (similar logic)
		if (newY < 0) {
			// scroll up
			let scrollY = Math.min(-newY, 10);
			if (scrollY < 0) scrollY = 0; // check precision errors

			window.scrollBy(0, -scrollY);
			// a swift mouse move can put the cursor beyond the document start
			newY = Math.max(newY, 0); // newY may not be below 0
		}


		// limit the new X within the window boundaries
		// there's no scroll here so it's simple
		if (newX < 0) newX = 0;
		if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
			newX = document.documentElement.clientWidth - dragElement.offsetWidth;
		}

		dragElement.style.left = newX + 'px';
		dragElement.style.top = newY + 'px';
	}

});

/////
/////
/////
/////

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

elem.addEventListener('drag', function(event) {
	console.log(this);
	
});

parent.addEventListener('dragover', function(event) {
	event.preventDefault();
	console.log('?');

});

parent.addEventListener('dragover', function(event) {
	console.log('!');
});
