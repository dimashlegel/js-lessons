'use strict'

let currentCurrency = document.getElementById('currentCurrency');
let newCurrency = document.getElementById('newCurrency');
let amount = document.getElementById('amount');
let result = document.getElementById('result');

let currency = {
	grn: 1,
	dolar: 0.04,
	euro: 0.036
}

amount.addEventListener('input', exchange);
newCurrency.addEventListener('change', exchange);
currentCurrency.addEventListener('change', exchange);


function exchange() {
	disableOption();

	let currentAmount = +amount.value;
	console.log(currency[newCurrency.value]);
	
	let newAmount = currentAmount * currency[newCurrency.value] / currency[currentCurrency.value];
	// result.value = newAmount;
	result.value = Math.floor10(newAmount, -2);
}

function disableOption() {
	for (let i = 0; i < newCurrency.options.length; i++) {
		if (newCurrency.options[i].value === currentCurrency.value) {
			newCurrency.options[i].disabled = true;
			newCurrency.options[i].selected = false;
		} else {
			newCurrency.options[i].disabled = false;
		}
	}
}

disableOption();

// Decimal rounding 0,....
(function() {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();
