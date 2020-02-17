'use strict'
// learnjs
// 1
let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

function sumSalaries(obj) {
	let sum = 0;
	for (const iterator of Object.values(obj)) {
		sum += iterator;
	}
	return sum;
}

sumSalaries(salaries);

// 2
let user = {
	name: 'John',
	age: 30,
};

console.log(Object.keys(user).length);
