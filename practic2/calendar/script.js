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
let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let monthIndex = month; // counter;
let monthBefore = monthIndex - 1;
let monthAfter = monthIndex + 1;
let yearIndex = year; // counter;

function getlastDayOfMonth(data, monthIndex) {
	let lastDayOfMonth = new Date(yearIndex, monthIndex + 1, 0);
	// console.log('last day of current month:', lastDayOfMonth.getDate());
	return lastDayOfMonth.getDate();
}
// console.log(getlastDayOfMonth(data, 9)); // show last day of month;

function getDays(from, to, parent, child, currentMonth) { // get all days in month
	// console.log(currentMonth);

	let wrapper = document.createElement(parent);
	for (let i = from; i <= to; i++) {
		let item = document.createElement(child);		
		let dayOfWeek = getDayOfWeek(yearIndex, currentMonth, i);
		item.innerHTML = i + '<br/><span>' + dayOfWeek + '</span>';
		markWeekandDay(item, i, currentMonth);
		markCurrentDay(item, currentMonth);
		wrapper.appendChild(item);
	}
	return wrapper;
}

function createCalendar(month) {
	calendar.innerHTML = "";
	return calendar.appendChild(getDays(1, getlastDayOfMonth(data, month), 'ul', 'li', month));
}


function createCalendarBefore(monthBefore, month) {
	let startDay = getlastDayOfMonth(data, monthBefore) - howManyDaysToMonday(month) + 1;
	return calendar.prepend(getDays(startDay, getlastDayOfMonth(data, monthBefore), 'ul', 'li', monthBefore));
}

function createCalendarAfter(monthAfter, month) {
	// let startDay = getlastDayOfMonth(data, month);
	// debugger;
	return calendar.append(getDays(1, howManyDaysToSunday(month), 'ul', 'li', monthAfter));
}


createCalendar(month);
createCalendarBefore(monthBefore, month);
createCalendarAfter(monthAfter, month);
getFirstDayOfCurrMonth(month);
howManyDaysToMonday(month);
// howManyDaysToSunday(month);


function markCurrentDay(elem, currentMonth) { // show green current day
	if (+elem.firstChild.textContent == day && month == currentMonth) {
		elem.style.color = 'green';
	}
}

function markWeekandDay(item, elem, currentMonth) { // show red weekend day
	let weekandDay = new Date(yearIndex, currentMonth, elem);
	if (weekandDay.getDay() == 0 || weekandDay.getDay() == 6) {
		item.style.color = 'red';
	}
}

function showCurrentYearMonth(currYear, currMonth) {
	return currYear + ' ' + monthes[currMonth];
}

display.innerHTML = showCurrentYearMonth(year, month);

nextMonth.addEventListener('click', function() {
	monthIndex += 1;
	if (monthIndex == 11) {
		monthBefore = monthIndex - 1;
		monthAfter = 0;
	} else if (monthIndex > 11) {
		monthIndex = 0;
		yearIndex += 1;
		monthBefore = 11;
		monthAfter = monthIndex + 1;
	} else {
		monthBefore = monthIndex - 1;
		monthAfter = monthIndex + 1;
	}
	
	console.log('month:' , monthIndex);
	console.log('yaer:' , yearIndex);
	
	showNextPrevYearMonth(yearIndex, monthIndex);
	createCalendar(monthIndex);
	createCalendarBefore(monthBefore, monthIndex);
	createCalendarAfter(monthAfter, monthIndex);
	getFirstDayOfCurrMonth(monthIndex);
	// howManyDaysToMonday(monthIndex);
});

prevMonth.addEventListener('click', function() {
	monthIndex -= 1;
	if (monthIndex == 0) {
		monthBefore = 11;
		monthAfter = monthIndex + 1;
	} else if (monthIndex < 0) {
		monthIndex = 11;
		yearIndex -= 1;
		monthBefore = monthIndex - 1;
		monthAfter = 0;
	} else {
		monthBefore = monthIndex - 1;
		monthAfter = monthIndex + 1;
	}
	showNextPrevYearMonth(yearIndex, monthIndex);
	createCalendar(monthIndex);
	createCalendarBefore(monthBefore, monthIndex);
	createCalendarAfter(monthAfter, monthIndex);
	getFirstDayOfCurrMonth(monthIndex);
	// howManyDaysToMonday(monthIndex);
});

function showNextPrevYearMonth(currentYear, currentMonth) {
	display.innerHTML = showCurrentYearMonth(currentYear, currentMonth);
}

function getFirstDayOfCurrMonth(currentMonth) {
	let FirstDayOfMonth = new Date(year, currentMonth, 1);
	// console.log('First Day of current Month: ' + week[FirstDayOfMonth.getDay()]);
	return week[FirstDayOfMonth.getDay()];
}

function howManyDaysToMonday(currentMonth) {
	// console.log(yearIndex);
	let FirstDayOfMonth = new Date(yearIndex, currentMonth, 1);
	let firstDay = FirstDayOfMonth.getDay();
	let dayName = week[firstDay];
	let counter = 0;
	for (let i = 0; i < 7; i++) {
		if (dayName === 'Mon') {
			// console.log('Days from Monday: ' + counter);
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

function howManyDaysToSunday(currentMonth) {
	let lastDayOfMonth = new Date(year, currentMonth + 1, 0);
	console.log('lastDayOfMonth', lastDayOfMonth);
	
	let lastDay = lastDayOfMonth.getDay();
	console.log('lastDay', lastDay);

	let dayName = week[lastDay];
	console.log('dayName init', dayName);

	let counter = 0;
	console.log('counter', counter);

	for (let i = 0; i < 7; i++) {
		if (dayName === 'Sun') {
			console.log('days to Sunday:', counter);
			return counter;
		} else {
			counter += 1;
			lastDay += 1;
			if (lastDay > 6) {
				lastDay = 0;
			}
			dayName = week[lastDay];
			console.log('dayName', dayName);
			
		}
	}
}

// let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


function getDayOfWeek(currentYear, currentMonth, numberDay) {
	let dayOfWeek = new Date(currentYear, currentMonth, numberDay);
	// console.log(dayOfWeek);
	
	// console.log('Day of Week: ' + week[dayOfWeek.getDay()]);
	// debugger;
	return week[dayOfWeek.getDay()];
}

// var optionsMonth = {
// 	month: 'long',
// };
// var optionsDay = {
// 	weekday: 'long',
// };
// console.log('data:', data.getDate() + ' ' + new Intl.DateTimeFormat('en-US', optionsMonth).format(data) + ' ' + data.getFullYear());
// console.log('day:', new Intl.DateTimeFormat('en-US', optionsDay).format(data));