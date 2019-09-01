// 'use strict'


let y;
let mon;
let years = document.querySelector('#year');


function Calendar(year, month) {
	
	let Dlast = 32 - new Date(year, month, 32).getDate(); // return last day (amount of days) in month
	let D = new Date(year, month, Dlast); // last day in month (28---31)
	let m = document.querySelector('option[value="' + month + '"]'); // marked month
	let option;

	let generate = function(item, id) {
		for (var i = item; i >= 0; i--) {
			option = document.createElement('option');
			option.textContent = i;			
			id.appendChild(option);
		}
	}
	
	date.innerHTML = '';
	generate(Dlast, date);
	m.selected = true;
	y = years;
	mon = m;
	if (document.querySelector('#year').length == 0) {
		generate(D.getFullYear(), y);
	}
}

Calendar(new Date().getFullYear(), new Date().getMonth());

calendar.addEventListener('change', function(event) {
	let target = event.target;
	while (target != calendar) {
		if (target.tagName == 'SELECT') {
			switch (target.getAttribute('id')) {
				case ('month'):
					Calendar(year.value, target.value)
					break;
				case ('year'):
					Calendar(target.value, mon.value);
					break;
			}
			return;
		}
		target = target.parentNode;
	}
})