'use strict'

let btn = document.getElementById('btn');
let rows = document.getElementsByTagName('tr');
btn.addEventListener('click', addInnerValueTd);

function addInnerValueTd() {
	let arr = [];
	for (let i = 0; i < rows.length - 1; i++) {
		for (let j = 0; j < rows[i].children.length; j++) {
			if (arr[j] == undefined) {
				arr[j] = 0;
			}
			arr[j] += Number(rows[i].children[j].innerHTML);
			console.log(arr);
			
		}
	}

	for (let i = 0; i < rows[rows.length - 1].children.length; i++) {
		rows[rows.length - 1].children[i].innerHTML = arr[i];
	}
}