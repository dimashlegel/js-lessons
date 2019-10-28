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

let monthIndex = month; // counter for month;
let monthBefore = monthIndex - 1;
let monthAfter = monthIndex + 1;

let yearIndex = year; // counter for year;
let prevYear; // = getYearForPrevMonth(yearIndex, monthIndex, monthBefore);
let nextYear; // = getYearForNextMonth(yearIndex, monthIndex, monthAfter);

function getlastDayOfMonth(data, monthIndex) {
	let lastDayOfMonth = new Date(yearIndex, monthIndex + 1, 0);
	// console.log('last day of current month:', lastDayOfMonth.getDate());
	return lastDayOfMonth.getDate();
}
// console.log(getlastDayOfMonth(data, 9)); // show last day of month;

function getDays(from, to, child, currentMonth, year, className) { // get all days in month
	// let wrapper = document.createElement(parent);
	// debugger;
	for (let i = from; i <= to; i++) {
		let item = document.createElement(child);
		let dayOfWeek = getDayOfWeek(year, currentMonth, i);
		item.innerHTML = i + '<br/><span>' + dayOfWeek + '</span>';
		item.classList.add(className);
		markWeekandDay(item, i, currentMonth, year);
		markCurrentDay(item, currentMonth, year);
		calendar.appendChild(item);
	}
	return calendar;
}

function createCalendar(month, year) {
	// calendar.innerHTML = "";
	return getDays(1, getlastDayOfMonth(data, month), 'li', month, year, 'active');
}

function createCalendarBefore(monthBefore, month, prevYear) {
	let startDay = getlastDayOfMonth(data, monthBefore) - howManyDaysToMonday(month) + 1;
	return getDays(startDay, getlastDayOfMonth(data, monthBefore), 'li', monthBefore, prevYear, 'not-active');
}

function createCalendarAfter(monthAfter, month, nextYear) {
	return getDays(1, howManyDaysToSunday(yearIndex, month), 'li', monthAfter, nextYear, 'not-active');
}

getYearForPrevMonth(yearIndex, monthIndex, monthBefore);
getYearForNextMonth(yearIndex, monthIndex, monthAfter);
createCalendarBefore(monthBefore, month, prevYear);
createCalendar(month, year);
createCalendarAfter(monthAfter, month, nextYear);
// getFirstDayOfCurrMonth(month);
// howManyDaysToMonday(month);
// howManyDaysToSunday(month);

function markCurrentDay(elem, currentMonth, yeari) { // show green current day
	if (+elem.firstChild.textContent == day && month == currentMonth && yeari == year) {
		elem.style.background = 'green';
	}
}

function markWeekandDay(item, elem, currentMonth, year) { // show red weekend day
	let weekandDay = new Date(year, currentMonth, elem);
	if (weekandDay.getDay() == 0 || weekandDay.getDay() == 6) {
		item.style.background = 'red';
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
	getYearForPrevMonth(yearIndex, monthIndex, monthBefore);
	getYearForNextMonth(yearIndex, monthIndex, monthAfter);
	showNextPrevYearMonth(yearIndex, monthIndex);
	calendar.innerHTML = '';
	createCalendarBefore(monthBefore, monthIndex, prevYear);
	createCalendar(monthIndex, yearIndex);
	createCalendarAfter(monthAfter, monthIndex, nextYear);
	// getFirstDayOfCurrMonth(monthIndex);
	// howManyDaysToMonday(monthIndex);
});

function increaseMonthIndex(monthIndex) {

}

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
	getYearForPrevMonth(yearIndex, monthIndex, monthBefore);
	getYearForNextMonth(yearIndex, monthIndex, monthAfter);
	showNextPrevYearMonth(yearIndex, monthIndex);
	calendar.innerHTML = '';
	createCalendarBefore(monthBefore, monthIndex, prevYear);
	createCalendar(monthIndex, yearIndex);
	createCalendarAfter(monthAfter, monthIndex, nextYear);
	// getFirstDayOfCurrMonth(monthIndex);
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

function howManyDaysToSunday(currentYear, currentMonth) {
	let lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
	let lastDay = lastDayOfMonth.getDay();
	let dayName = week[lastDay];
	let counter = 0;
	for (let i = 0; i < 7; i++) {
		if (dayName === 'Sun') {
			// console.log('days to Sunday:', counter);
			return counter;
		} else {
			counter += 1;
			lastDay += 1;
			if (lastDay > 6) {
				lastDay = 0;
			}
			dayName = week[lastDay];
		}
	}
}

function getDayOfWeek(currentYear, currentMonth, numberDay) {
	let dayOfWeek = new Date(currentYear, currentMonth, numberDay);
	return week[dayOfWeek.getDay()];
}

function getYearForPrevMonth(yearIndex, monthIndex, monthBefore) {
	if (monthIndex == 0 && monthBefore == 11) {
		prevYear = yearIndex - 1;
	} else {
		prevYear = yearIndex;
	}
}

function getYearForNextMonth(yearIndex, monthIndex, monthAfter) {
	if (monthIndex == 11 && monthAfter == 0) {
		nextYear = yearIndex + 1;
	} else {
		nextYear = yearIndex;
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