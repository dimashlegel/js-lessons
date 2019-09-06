'use strict'

let par = document.getElementById('par');
let btn = document.getElementById('btn');
let finish = document.getElementById('finish');


btn.addEventListener('click', function() {
	 window.timerId = window.setInterval(() => {
		par.innerHTML = Number(par.innerHTML) - 1;
		if (Number(par.innerHTML) == 0) {
			console.log(0);
			window.clearInterval(window.timerId);
		}
	}, 1000);
	
	this.disabled = true;
})

finish.addEventListener('click', function() {
	btn.disabled = false;
});
