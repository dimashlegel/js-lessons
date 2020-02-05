'use strict'

let block = document.getElementById('block');
// block.addEventListener('wheel', wheelScale);
// var delta = 0;
// let scale = 1;
// function wheelScale(e) {
// 	let move = e.deltaY || e.detail || e.wheelDelta;
// 	let checker = delta;
// 	delta = delta + move;
// 	if (delta >= checker) {
// 		scale += 0.05;
// 	} else {
// 		scale -= 0.05;
// 	}
// 	this.style.transform = this.style.WebkitTransform = this.style.MsTransform = 'scale(' + scale + ')';
// 	e.preventDefault();
// }

// learnjs.ru

function addOnWheel(elem, handler) {

	if (elem.addEventListener) {
		if ('onwheel' in document) {
			// IE9+, FF17+
			elem.addEventListener("wheel", handler);
		} else if ('onmousewheel' in document) {
			// устаревший вариант события
			elem.addEventListener("mousewheel", handler);
		} else {
			// 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
			elem.addEventListener("MozMousePixelScroll", handler);
		}
	} else { // IE8-
		block.attachEvent("onmousewheel", handler);
	}
}

var scale = 1;

addOnWheel(block, function(e) {

	var delta = e.deltaY || e.detail || e.wheelDelta;

	// отмасштабируем при помощи CSS
	if (delta > 0) scale += 0.05;
	else scale -= 0.05;

	block.style.transform = block.style.WebkitTransform = block.style.MsTransform = 'scale(' + scale + ')';

	// отменим прокрутку
	e.preventDefault();
});



// task 2

document.addEventListener('wheel', function(e) {
	if (e.target.tagName != 'TEXTAREA') return;
	var area = e.target;

	var delta = e.deltaY || e.detail || e.wheelDelta;

	if (delta < 0 && area.scrollTop == 0) {
		e.preventDefault();
	}

	if (delta > 0 && area.scrollHeight - area.clientHeight - area.scrollTop <= 1) {
		// console.log(area.scrollHeight);
		// console.log(area.clientHeight);
		// console.log(area.scrollTop);
		e.preventDefault();
	}
}, {
	passive: false
});