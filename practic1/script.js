'use strict'
let divs = document.getElementsByTagName('div');

for (let i = 0; i < divs.length; i++) {
	const element = divs[i];
	let str = element.innerHTML;
	// var 1
	let newStr = str.substr(0, 10) + '...';
	// var 2
	// let newStr = element.innerHTML.slice(0, 10)+'...';
	element.innerHTML = newStr;
}