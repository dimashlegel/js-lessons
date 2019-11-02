'use strict'

document.addEventListener('scroll', showPopUp);

function getScrollFromTop() {
	return window.pageYOffset;
}

function showPopUp() {
	if (getScrollFromTop() == 300) {
		showDiv();
	}
}

let arrDivs = document.querySelectorAll('div');

// arrDivs.forEach(elem => {
// 	elem.addEventListener('load', addZindex);
// })

// function addZindex() {
// 	arrDivs.forEach(elem => {
// 		elem.style.zIndex = '2';
// 	})
// 	this.style.zIndex = '3';
// }

let indexes = [];

arrDivs.forEach(elem => {
	indexes.push(+elem.style.zIndex);
});

// let holder = indexes[0];
// indexes.forEach(elem => {
// 	if (holder <= +elem) {
// 		holder = elem;
// 	}
// })

let maxIndex = Math.max.apply(null, indexes); // max-value in array


let div2 = document.querySelector('#div2');
let exit = div2.querySelector('button');

function showDiv() {
	div2.style.zIndex = maxIndex + 100;
	div2.style.visibility = 'visible';
	document.body.style.overflow = 'hidden';
}

exit.addEventListener('click', function() {
	div2.remove();
	document.body.style.overflow = 'visible';
})
