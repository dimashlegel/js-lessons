'use strict'

let img = document.getElementById('img');

img.addEventListener('click', zoomImg);

function zoomImg() {
	console.log(this.width);
	this.width *= 2;
}