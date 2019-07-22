'use strict'

let img = document.getElementById('img');

// var 1

// img.addEventListener('click', zoomImg);
// let counter = 0;
// function zoomImg() {
// 	counter += 1;
// 	if (counter % 2 == 0) {
// 		this.width = this.width / 2;
// 		return;
// 	}
// 	this.width *= 2;
// }

// var 2

img.addEventListener('click', zoomInImg);

function zoomInImg() {
	this.height *= 2;
	this.removeEventListener('click', zoomInImg);
	this.addEventListener('click', zoomOutImg);
}

function zoomOutImg() {
	this.height /= 2;
	this.removeEventListener('click', zoomOutImg);
	this.addEventListener('click', zoomInImg);
}