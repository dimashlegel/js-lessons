'use strict'

// 1. forEach
// 1.1 get pow of number
// let arr = [1, 2, 3];
// let newArr = [];

// arr.forEach(function(elem) {
// 	newArr.push(Math.pow(elem,2));
// })
// console.log(newArr);

// 1.2 get sum of arr elements

// let arr = [1, 2, 3];
// let sum = 0;
// arr.forEach(function(elem) {
// 	sum += elem
// })
// console.log(sum);

// 2. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел. 

// let arr = [1, 2, 3];
// let newArr = arr.map(function(elem) {
// 	return elem *= elem;
// })

// console.log(newArr);

// 3. Every

// let arr = [1,2,3];

// let check = arr.every(function(elem) {
// 	if(elem>0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// })

// console.log(check);

// 3.1 Some

// let arr = [1,2,-3];

// let check = arr.some(function(elem) {
// 	if(elem < 0) {
// 		return true;
// 	}
// })

// console.log(check);

// 4 Filter
// 4.1 get num < 0

// let arr = [1,2,3,-1,-2];

// let newArr = arr.filter(function(elem) {
// 	if(elem < 0) {
// 		return true;
// 	}
// })

// console.log(newArr);

// 4.2 get num % 2 = 0

// let arr = [1,2,3,-1,-2];

// let newArr = arr.filter(function(elem) {
// 	if(elem % 2 == 0) {
// 		return true;
// 	}
// })

// console.log(newArr);

// 4.3 get elem.length >= 5
// let arr = ['qwe', 'qwerty'];

// let newArr = arr.filter(function(elem) {
// 	if(elem.length >= 5) {
// 		return true;
// 	}
// })

// console.log(newArr);

// 4.4 get just subarrays
// let arr = [1,2,[13,4], [3,5]];

// let newArr = arr.filter(function(elem) {
// 	// if(elem.length > 1) {
// 	// 	return true;
// 	// }

// 	if(Array.isArray(elem)) {
// 		return true;
// 	}
// })

// console.log(newArr);

// 5.5 Посчитайте количество отрицательных чисел в этом массиве

// let arr = [1,2,-1,-2];

// let newArr = arr.filter(function(elem) {
// 	if(elem < 0) {
// 				return true;
// 			}
// })

// console.log(newArr.length);

// 6 reduce, reduceRight

// 6.1  Найдите сумму этих чисел.

// let arr = [1, 2, 3];

// let sum = arr.reduce(function(sum, elem) {
// 	return sum + elem;
// }, 0)
// console.log(sum);

// 6.2 Reduce Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

// let arr = [11, 2, 3, 0, 4, 5, 6];
// let result = 0;

// let sum = arr.reduce(function(sum, elem) {
// 	if (elem == 0) {
// 		result = sum;
// 	} else {
// 		return sum + elem;
// 	}
// }, 0);
// if (sum == NaN) {
// 	result = sum
// }
// console.log(result);

// 6.2 ReduceRight Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.
// let arr = [11, 2, 3, 0, 4, 5, 6];
// let result = 0;

// let sum = arr.reduceRight(function(sum, elem) {
// 	if (elem == 0) {
// 		result = sum;
// 	} else {
// 		return sum + elem;
// 	}
// }, 0);

// if (sum == NaN) {
// 	result = sum
// }

// console.log(result);

// 6.3 Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. 

// let arr = [5, 5, 1, 6];
// let amount = 0;
// arr.reduce(function(sum, elem) {
// 	if (sum > 10) {
// 		console.log(amount);
// 	} else {
// 		amount++;
// 		return sum + elem;
// 	}
// },0)

// console.log(amount);

// 7. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел

// let arr = [1, 4, 9, -1, -2, 2];

// let newArr = arr.filter(function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	}
// }).map(function(elem) {
// 	return Math.sqrt(elem);
// })

// console.log(newArr);
