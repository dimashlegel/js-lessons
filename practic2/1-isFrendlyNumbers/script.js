'use strict'

// 220 : +(1,2,4,5,10,11,20,22,44,55,110) = 284
// 284 : +(1,2,4,71,142) = 220

// check if the numbers is friendly

function isFrendly(num1, num2) {
	return getSum(num1) == num2 && getSum(num2) == num1;
}

console.log(isFrendly(220, 284));


function getDivisors(num) {
	let arr = [];
	for (let i = 1; i < num; i++) {
		if (num % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}

function getDivisorsSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function getSum(num) {
	return getDivisorsSum(getDivisors(num))
}