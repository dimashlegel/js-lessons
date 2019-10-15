'use strict'

let calendar = document.getElementById('calendar');
let display = document.getElementById('display');
let nextMonth = document.getElementById('nextMonth');
let prevMonth = document.getElementById('prevMonth');


let data = new Date();
let year = data.getFullYear();
let month = data.getMonth();
let weekDay = data.getDay();
let day = data.getDate();

let monthes = ['Januar', 'Februar', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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
		markWeekandDay(item, i);
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

function markWeekandDay(item, elem) {
	let weekandDay = new Date(year, month, elem);
	if (weekandDay.getDay() == 0 || weekandDay.getDay() == 6) {
		item.style.color = 'red';
	}
}

function showCurrentYearMonth(currYear, currMonth) {
	return currYear + ' ' + monthes[currMonth];
}

display.innerHTML = showCurrentYearMonth(year, month);

let monthIndex = month; // counter;
let yearIndex = year; // counter;
nextMonth.addEventListener('click', function() {
	if (monthIndex >= 11) {
		monthIndex = 0;
		yearIndex += 1;
		showNextPrevYearMonth(yearIndex, monthIndex);
	} else {
		monthIndex += 1;
		showNextPrevYearMonth(yearIndex, monthIndex);
	}
});

prevMonth.addEventListener('click', function() {
	if (monthIndex <= 0) {
		monthIndex = 11;
		yearIndex -= 1;
		showNextPrevYearMonth(yearIndex, monthIndex);
	} else {
		monthIndex -= 1;
		showNextPrevYearMonth(yearIndex, monthIndex);
	}
});

function showNextPrevYearMonth(currentYear, currentMonth) {
	display.innerHTML = showCurrentYearMonth(currentYear, currentMonth);
}