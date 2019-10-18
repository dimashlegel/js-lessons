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
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let monthIndex = month; // counter;
let yearIndex = year; // counter;

function getlastDayOfMonth(data, monthIndex) {
	let lastDayOfMonth = new Date(year, monthIndex + 1, 0);
	// console.log('last day of current month:', lastDayOfMonth.getDate());
	return lastDayOfMonth.getDate();
}
// console.log(getlastDayOfMonth(data, 9)); // show last day of month;

function getDays(from, to, parent, child, currentMonth) { // get all days in month
	let wrapper = document.createElement(parent);
	for (let i = from; i <= to; i++) {
		let item = document.createElement(child);
		item.innerHTML = i;
		markCurrentDay(item, currentMonth);
		markWeekandDay(item, i, currentMonth);
		wrapper.appendChild(item);
	}
	return wrapper;
}

function createCalendar(month) {
	calendar.innerHTML = "";
	return calendar.appendChild(getDays(1, getlastDayOfMonth(data, month), 'ul', 'li', month));
}

createCalendar(month);
getFirstDayOfCurrMonth(month);
howManyDaysToMonday(month);

function markCurrentDay(elem, currentMonth) { // show green current day
	if (elem.innerHTML == day && month == currentMonth) {
		elem.style.color = 'green';
	}
}

function markWeekandDay(item, elem, currentMonth) { // show red weekend day
	let weekandDay = new Date(year, currentMonth, elem);
	if (weekandDay.getDay() == 0 || weekandDay.getDay() == 6) {
		item.style.color = 'red';
	}
}

function showCurrentYearMonth(currYear, currMonth) {
	return currYear + ' ' + monthes[currMonth];
}

display.innerHTML = showCurrentYearMonth(year, month);

nextMonth.addEventListener('click', function() {
	if (monthIndex >= 11) {
		monthIndex = 0;
		yearIndex += 1;
		showNextPrevYearMonth(yearIndex, monthIndex);
		createCalendar(monthIndex);
		getFirstDayOfCurrMonth(monthIndex);
		howManyDaysToMonday(monthIndex);
	} else {
		monthIndex += 1;
		showNextPrevYearMonth(yearIndex, monthIndex);
		createCalendar(monthIndex);
		getFirstDayOfCurrMonth(monthIndex);
		howManyDaysToMonday(monthIndex);
	}
});

prevMonth.addEventListener('click', function() {
	if (monthIndex <= 0) {
		monthIndex = 11;
		yearIndex -= 1;
		showNextPrevYearMonth(yearIndex, monthIndex);
		createCalendar(monthIndex);
		getFirstDayOfCurrMonth(monthIndex);
		howManyDaysToMonday(monthIndex);
	} else {
		monthIndex -= 1;
		showNextPrevYearMonth(yearIndex, monthIndex);
		createCalendar(monthIndex);
		getFirstDayOfCurrMonth(monthIndex);
		howManyDaysToMonday(monthIndex);
	}
});

function showNextPrevYearMonth(currentYear, currentMonth) {
	display.innerHTML = showCurrentYearMonth(currentYear, currentMonth);
}

function getFirstDayOfCurrMonth(currentMonth) {
	let FirstDayOfMonth = new Date(year, currentMonth, 1);
	console.log('First Day of current Month: ' + week[FirstDayOfMonth.getDay()]);
	return week[FirstDayOfMonth.getDay()];
}

function howManyDaysToMonday(currentMonth) {
	let FirstDayOfMonth = new Date(year, currentMonth, 1);
	let firstDay = FirstDayOfMonth.getDay();
	let dayName = week[firstDay];
	let counter = 0;

	for (let i = 0; i < 7; i++) {
		if (dayName === 'Monday') {
			console.log('Days from Monday: ' + counter);
			return counter;
		} else {
			counter += 1;
			firstDay -= 1;
			if (firstDay < 0) {
				firstDay = 6;
			}
			dayName = week[firstDay];
		}
	}
}

// var optionsMonth = {
// 	month: 'long',
// };
// var optionsDay = {
// 	weekday: 'long',
// };
// console.log('data:', data.getDate() + ' ' + new Intl.DateTimeFormat('en-US', optionsMonth).format(data) + ' ' + data.getFullYear());
// console.log('day:', new Intl.DateTimeFormat('en-US', optionsDay).format(data));
