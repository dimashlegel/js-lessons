'use strict'

class User {
	constructor(name, surname) {
		this._name = name, // privat property
			this._surname = surname;
	}

	getFullName() {
		return this._name + ' ' + this._surname;
	}
}

class Worker extends User { // наследование класса

	constructor(name, surname, rate, days) {
		super(name, surname); // для використання конструктора в класі потомка потрібний метод super // must be before use this
		// this.name = name,
		// 	this.surname = surname, // use from parent constructor
		this.rate = rate,
			this.days = days;
	}

	getSalary() {
		return this.rate * this.days;
	}

	// rewrite parent method
	getFullName() {
		// return this._name + ' ' + this._surname + '!';
		return super.getFullName() + '!';
	}
}

let worker = new Worker('Vasia', 'Pupkin', 350, 21);
// console.log(worker.getSalary());
// console.log(worker.getFullName()); // Vasia Pupkin !

// work wuth DOM elements

class Elem {
	constructor(selector) {
		this.elem = document.querySelector(selector);
	}

	html(text) {
		this.elem.innerHTML = text;
		return this; // використовується для створення ланцюжка з методів
	}
	attr(attribute, value) {
		this.elem.setAttribute(attribute, value);
		return this; // використовується для створення ланцюжка з методів
	}
}

let elem = new Elem('#test');

elem.html('!').attr('title', 'qw').attr('class', 'class1'); // ланцюжок з методів


///
///
///

class Rectangle {
	constructor(height, width) {
		let elem = document.createElement('div');
		this.elem = elem;
		this.setWidth(width);
		this.setHeight(height);
		elem.style.border = '1px solid red';
		document.body.appendChild(elem);
	}
	setWidth(width) {
		this.elem.style.width = width + 'px';
	}
	setHeight(height) {
		this.elem.style.height = height + 'px';
	}
}

let rect = new Rectangle(200, 200);
rect.setWidth(122);
rect.setHeight(320);