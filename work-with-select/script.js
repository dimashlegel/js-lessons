'use strict'

// var country = document.querySelector('#country');
var countrySelect = document.querySelector('#country');
var citiesSelect = document.querySelector('#cities');

// variant 1

// var data = {
// 	ua: ['Kyiv', 'Lviv', 'Iziaslav'],
// 	is: ['Bat Yam', 'Tel Aviv'],
// }

// countrySelect.addEventListener('change', function() {
// 	var cities = data[this.value];
// 	citiesSelect.length = 0;
// 	for (var i = 0; i < cities.length; i++) {
// 		citiesSelect.add(new Option(cities[i]));
// 	}
// });

// variant 2 

var data = {
	Ukraine: ['Kyiv', 'Lviv', 'Iziaslav'],
	Israel: ['Bat Yam', 'Tel Aviv'],
}

var countries = Object.keys(data);
addOptions(countrySelect, countries);

var defaultCountry = data[countries[0]];
addOptions(citiesSelect, defaultCountry);

countrySelect.addEventListener('change', function() {
	var cities = data[this.value];
	citiesSelect.length = 0;
	addOptions(citiesSelect, cities);
});

function addOptions(select, arr) {
	for (var i = 0; i < arr.length; i++) {
		select.add(new Option(arr[i]));
	}
}