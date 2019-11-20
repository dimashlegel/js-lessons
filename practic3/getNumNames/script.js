//
//
//
//
// 6. Сделайте функцию, которая параметром будет принимать число, а возвращать это же число прописью. Например, число 115 прописью это сто пятнадцать. Пусть функция работает с числами до миллиона.

let numNames = {
	simple: ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
	decimal: ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
	hundreds: ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
	thousands: ['одна тысяча', 'тысячи', 'тысяч'],
	million: ['миллион'],
};

function getNumberNames(num) {
	let result = '';
	let length = getNumLength(num);
	if (length <= 2 && num < 20) {
		result = getSimple(num);
	}
	if (length <= 2 && num >= 20) {
		result = getDecimal(num);
	}
	if (length == 3) {
		result = getHundreds(num);
	}
	if (length == 4) {
		result = getThousands(num);
	}
	if (length == 5) {
		result = getThousandsDec(num);
	}
	if (length == 6) {
		result = getThousandsHund(num);
	}
	if (length == 7) {
		result = getMillion(num);
	}
	return result;
}

function getNumLength(num) {
	let str = '';
	str += num;
	return str.length;
}

function getSimple(num) {
	let index = parseInt(num.toString().slice(0, 2));
	return numNames.simple[index] + ' ';
}

function getDecimal(num) {
	if (num % 10 == 0) {
		let index = parseInt(num.toString().slice(0, 1)) - 2;
		return numNames.decimal[index] + ' ';
	}
	let start = 30;
	for (let i = 0; i < numNames.decimal.length; i++) {
		const element = numNames.decimal[i]
		if (num < start) {
			return numNames.decimal[i] + ' ' + decreaseNumber(num);
		} else {
			start += 10;
		}
	}
}

function getHundreds(num) {
	if (num % 100 == 0) {
		let index = parseInt(num.toString().slice(0, 1)) - 1;
		return numNames.hundreds[index] + ' ';
	}
	let start = 200;
	for (let i = 0; i < numNames.hundreds.length; i++) {
		const element = numNames.hundreds[i]
		if (num < start) {
			return numNames.hundreds[i] + ' ' + decreaseNumber(num);
		} else {
			start += 100;
		}
	}
}

function getThousands(num) {
	let firstNum = parseInt(num.toString().slice(0, 1));
	if (num % 1000 == 0 && num < 2000) {
		return numNames.thousands[0];
	} else if (num % 1000 == 0 && num < 3000) {
		return 'две ' + numNames.thousands[1];
	} else if (num % 1000 == 0 && num >= 3000 && num < 5000) {
		return numNames.simple[firstNum] + ' ' + numNames.thousands[1];
	} else if (num % 1000 == 0) {
		return numNames.simple[firstNum] + ' ' + numNames.thousands[2];
	}

	if (num < 2000) {
		return numNames.thousands[0] + ' ' + decreaseThousands(num);
	} else if (num < 3000) {
		return 'две ' + numNames.thousands[1] + ' ' + decreaseThousands(num);
	} else if (num >= 3000 && num < 5000) {
		return numNames.simple[firstNum] + ' ' + numNames.thousands[1] + ' ' + decreaseThousands(num);
	} else {
		return numNames.simple[firstNum] + ' ' + numNames.thousands[2] + ' ' + decreaseThousands(num);
	}
}

function getThousandsDec(num) {
	let firstNum = parseInt(num.toString().slice(0, 2));
	let lastNum = parseInt(num.toString().slice(2));

	if (num % 1000 == 0 && num < 20000) {
		return getSimple(firstNum) + numNames.thousands[2];
	} else if (num % 1000 == 0) {
		return getDecimal(firstNum) + numNames.thousands[2]
	}
	if (num > 20000) {
		if (getNumLength(lastNum) <= 2) {
			return getDecimal(firstNum) + numNames.thousands[2] + ' ' + getSimple(lastNum);
		}
		return getDecimal(firstNum) + numNames.thousands[2] + ' ' + getHundreds(lastNum);
	} else if (getNumLength(lastNum) == 2) {
		return getSimple(firstNum) + numNames.thousands[2] + ' ' + getSimple(lastNum);
	}
	return getSimple(firstNum) + numNames.thousands[2] + ' ' + getHundreds(lastNum);
}

function getThousandsHund(num) {
	let firstNum = parseInt(num.toString().slice(0, 3));
	let lastNum = parseInt(num.toString().slice(3));
	if (num % 1000 == 0) {
		return getHundreds(firstNum) + numNames.thousands[2];
	}
	if (getNumLength(lastNum) <= 2 && lastNum < 20) {
		return getHundreds(firstNum) + numNames.thousands[2] + ' ' + getSimple(lastNum);
	} else if (getNumLength(lastNum) <= 2) {
		return getHundreds(firstNum) + numNames.thousands[2] + ' ' + getDecimal(lastNum);
	}
	return getHundreds(firstNum) + numNames.thousands[2] + ' ' + getHundreds(lastNum);
}

function getMillion(num) {
	let firstNum = parseInt(num.toString().slice(0, 1));
	return getSimple(firstNum) + numNames.million[0];
}

function decreaseNumber(num) {
	let index = parseInt(num.toString().slice(1, 3));
	return getNumberNames(index);
}

function decreaseThousands(num) {
	let index = parseInt(num.toString().slice(1, 4));
	return getNumberNames(index);
}

console.log(getNumberNames(300200));