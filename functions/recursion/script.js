'use strict'
// 1. sum numbers
// 1.1
function sumTo(n) {
	if (n > 0) {
		if (n == 1) return 1;
		return n + sumTo(n - 1);
	}
	return n;
}
// console.log(sumTo(100));
// 1.2
function sumTo(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}
// console.log(sumTo(100));
//

// 2. Factorial
// 5! = 5 * 4 * 3 * 2 * 1
function factorial(n) {
	if (n == 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
	// return (n != 1) ? n * factorial(n - 1) : 1;
}

// console.log(factorial(4));
//

// 3. Fibonachi
// (7) = 1 + 1 + 2 + 3 + 5 + 8 ==> 13
// 3.1
function fibonachi(n) {
	let accum = 1;
	let current = 1;
	let arr = [1];
	for (let i = 1; i < n - 1; i++) {
		arr.push(current);
		current += accum;
		accum = arr[i];
	}
	return arr[arr.length - 1] + arr[arr.length - 2];
}
// console.log(fibonachi(7));

// 3.2 --> slow solution
function fibonachi(n) {
	if (n <= 1) {
		return n;
	} else {
		return fibonachi(n - 1) + fibonachi(n - 2);
	}
}
// console.log(fibonachi(7));

// 3.3 
function fib(n) {
	let a = 1;
	let b = 1;
	for (let i = 3; i <= n; i++) {
		let c = a + b;
		a = b;
		b = c;
	}
	return b;
}

// 4. odnosvyaznyi spisok
let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

// 4.1 cycle
function printList(list) {
	let tmp = list;
	while (tmp) {
		// console.log(tmp.value);
		tmp = tmp.next;
	}
}
// printList(list);

// 4.2 recursion

function printList(list) {
	console.log(list.value);
	if (list.next) {
		return printList(list.next);
	}
}
// printList(list);

// 4. odnosvyaznyi spisok obratnuy poriadok
// 4.1 recirsion
function printListObr(list) {
	let tmp = list;
	if (tmp.next) {
		printListObr(tmp.next);
	}
	console.log(tmp.value);
}

// 4.2 cycle

function printListObr(list) {
	let tmp = list;
	let arr = [];
	while (tmp) {
		arr.push(tmp.value);
		tmp = tmp.next;
	}
	for (let i = arr.length - 1; i >= 0; i--) {
		const element = arr[i];
		console.log(element);
	}
}

// printListObr(list);