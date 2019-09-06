'use strict'

let table = document.getElementById('table');
let result = document.getElementById('result');
let products = [
	{name: 'product1', price: 100, quantity: 4},
	{name: 'product2', price: 200, quantity: 5},
	{name: 'product2', price: 300, quantity: 6}
]

let total = 0;
for (let i = 0; i < products.length; i++) {
	const prod = products[i];
	let tr = document.createElement('tr');
	for (const key in prod) {
		if (prod.hasOwnProperty(key)) {
			const element = prod[key];
			let td = document.createElement('td');
			td.innerHTML = element;
			tr.appendChild(td); 
		}
	}

	let sum = prod.price * prod.quantity;
	let tdSum = document.createElement('td');
	tdSum.innerHTML = sum;
	tr.appendChild(tdSum);
	table.appendChild(tr);
	total += sum;
}
result.innerHTML += total;