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
}

let worker = new Worker('Vasia', 'Pupkin', 350, 21);
console.log(worker.getSalary());
