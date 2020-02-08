'use strict'

// 1

// let title = document.querySelector('h1');
// let container = document.querySelector('div');

// container.addEventListener('scroll', function() {
// 	let data = new Date();
// 	let elem = document.createElement('DIV');
// 	elem.innerHTML = data;
// 	if (container.clientHeight + container.scrollTop >= container.scrollHeight - 50) {
// 		container.appendChild(elem);
// 	}
// });

// variant 2 learnjs
// function scrollingInfinite() {
// 	while (true) {
// 		let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
// 		if (windowRelativeBottom > document.documentElement.clientHeight + 100) {
// 			break;
// 		}
// 		document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`);
// 	}
// }

// window.addEventListener('scroll', scrollingInfinite);
// scrollingInfinite();

// 2 scroll button toTop

// window.addEventListener('scroll', scrolling);

// let btnToTop = document.querySelector('#arrowTop');

// function scrolling() {
// 	if (document.documentElement.scrollTop >= document.documentElement.clientHeight) {
// 		btnToTop.style.visibility = 'visible';
// 	} else {
// 		btnToTop.style.visibility = 'hidden';
// 	}
// }

// btnToTop.addEventListener('click', scrollTop);

// function scrollTop() {
// 	document.documentElement.scrollTop = '0';
// 	btnToTop.style.visibility = 'hidden';
// }

/// var 2 learnjs
arrowTop.onclick = function() {
	window.scrollTo(pageXOffset, 0);
	// после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener('scroll', function() {
	arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});