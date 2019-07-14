'use strict'

// 1
// let el = document.getElementById('div');
// // Отримуємо текс вузла 
// console.dir(el.firstChild.data); // НЕ працює з ДОМ елементом
// console.dir(el.firstChild.nodeValue); // НЕ працює з ДОМ елементом
// console.dir(el.firstChild.textContent); // працює з ДОМ елементом

// el.firstChild.data = '!!!';
// 1

/* 2 
let el = document.getElementById('div');
let current = el.firstElementChild.nextElementSibling; 
console.log(current.nextElementSibling);
console.log(current.previousElementSibling);
*/

/* 3
<!-- nodeType -->

let el = document.getElementById('div');
for (let i = 0; i < el.childNodes.length; i++) {
	const element = el.childNodes[i];
	console.log(element.nodeType); // return number, which answer to some NodeType;
}
*/

/* 4
<!-- nodeList -->
			vs
<!-- HTMLCollection -->
			vs
<!-- transform to ARRAY -->
*/
let el = document.getElementById('div');

let nodeList = el.querySelectorAll('p'); // return nodeList, which IS NOT dynamic!!!
let HTMLCollection = el.getElementsByTagName('p'); // return HTMLCollection, which IS dynamic!!!
console.log(nodeList); // return 3 element p
console.log(HTMLCollection); // return 3 element p

let newP = document.createElement('p');
newP.innerHTML = 'new';
el.appendChild(newP);
console.log(nodeList); // return 3 element p
console.log(HTMLCollection); // return 4 element p

// 3 variants of transform to ARRAY

// 1
let newArray = Array.from(nodeList);
let newArray2 = Array.from(HTMLCollection);
console.log(newArray);
console.log(newArray2);
// 2
let newArray3 = Array.prototype.slice.call(nodeList);
let newArray4 = Array.prototype.slice.call(HTMLCollection); // crossBrowser
console.log(newArray3);
console.log(newArray4);
// 3
let newArray5 = [...nodeList];
let newArray6 = [...HTMLCollection];
console.log(newArray5);
console.log(newArray6);