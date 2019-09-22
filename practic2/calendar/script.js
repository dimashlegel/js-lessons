'use strict'

let calendar = document.getElementById('calendar');


let data = new Date();
let month = data.getMonth();
let weekDay = data.getDay();
let day = data.getDate();

// var optionsMonth = {
// 	month: 'long',
// };
// var optionsDay = {
// 	weekday: 'long',
// };


// console.log('data:', data.getDate() + ' ' + new Intl.DateTimeFormat('en-US', optionsMonth).format(data) + ' ' + data.getFullYear());
// console.log('day:', new Intl.DateTimeFormat('en-US', optionsDay).format(data));

function getlastDayOfMonth(data) {
	let lastDayOfMonth = new Date(data.getFullYear(), data.getMonth() + 1, 0);
	// console.log('last day of current month:', lastDayOfMonth.getDate());
	return lastDayOfMonth.getDate();
}
// console.log(getlastDayOfMonth(data)); // show last day of month;

function getDays(from, to, parent, child) {
	let wrapper = document.createElement(parent);
	for (let i = from; i <= to; i++) {
		let item = document.createElement(child);
		item.innerHTML = i;
		markCurrentDay(item);
		markWeekandDay(item);
		wrapper.appendChild(item);
	}
	return wrapper;
}

calendar.appendChild(getDays(1, getlastDayOfMonth(data), 'ul', 'li'));

function markCurrentDay(elem) {
	if (elem.innerHTML == day) {
		elem.style.color = 'green';
	}
}

function markWeekandDay(elem) {

}