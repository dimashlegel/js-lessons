'use strict'

class User {
	constructor(name, surname) {
		this._name = name, // privat property
			this._surname = surname;
	}

	getFullName() {
		return this._name + ' ' + this._surname;
	}

	getName() { // getter - just read privat property
		return this._name;
	}

	getSurName() { // getter - just read privat property
		return this._surname;
	}
}

let user = new User('qw', 'as');

console.log(user.getName());
console.log(user.getSurName());
console.log(user.getFullName());
