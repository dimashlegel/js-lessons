'use strict'

class User {
	constructor(name, surname) {
		this._name = name, // privat property
			this._surname = surname;
	}

	setAge(age) {
		if (this._checkAge(age)) {
			this._age = age; // setter - add property to object;
		}
	}

	_checkAge(age) { // helper privat method for setter;
		if (age > 0 && age < 100) {
			return true;
		} else {
			return false;
		}
	}

	getAge(age) {
		return this._age;
	}

	getFullName() {
		return this._name + ' ' + this._surname;
	}

	getName() { // getter - just read privat property;
		return this._name;
	}

	getSurName() { // getter - just read privat property;
		return this._surname;
	}
}

let user = new User('qw', 'as');
user.setAge(35);
console.log(user.getName());
console.log(user.getSurName());
console.log(user.getFullName());
console.log(user.getAge());
