'use strict'

var cityArr = {
	'aus': ['Мельбурн', 'Сидней', 'Аделаида', 'Брисбен', 'Хобарт'],
	'jap': ['Токио', 'Киото', 'Осака', 'Иокогама'],
	'sar': ['Кейптаун', 'Йоханесбург'],
 }

var prime_select = document.getElementById('country');
prime_select.addEventListener('change', func);
prime_select.addEventListener('change', toParagraph);

var city_select = document.getElementById('cities');
city_select.addEventListener('change', toParagraph);

function func(){
	city_select.innerHTML = '';
	var selected_country = prime_select.value;
	for (var i = 0; i < cityArr[selected_country].length; i++) {
		var new_option = document.createElement('option');
		new_option.innerHTML = cityArr[selected_country][i];
		city_select.appendChild(new_option);
	}
}

var parag = document.querySelector('p');
function toParagraph() {
	parag.innerHTML = '';
	parag.innerHTML = prime_select.options[prime_select.selectedIndex].text + ','
	+city_select.options[city_select.selectedIndex].text;
 }