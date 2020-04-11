'use strict'
// learnjs
//класс – это разновидность функции.
// инкапсуляция - в терминах ООП отделение внутреннего интерфейса от внешнего.
// Class Expression (по аналогии с Function Expression):
let User1 = class {
	sayHi() {
		alert("Привет");
	}
};
// task extend Class

class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

// Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.
class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let {precision=1000} = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
};
// 
let lowResolutionClock = new ExtendedClock({
	template: 'h:m:s',
	precision: 1000,
});
lowResolutionClock.start();

//
//
// Static method 
class User2 {
  static staticMethod() { // Мы также можем присвоить метод самой функции-классу, а не её "prototype". Такие методы называются статическими.
    alert(this === User2);
  }
}
User2.staticMethod(); // true

// Static property 
class Article {
  static publisher = "Илья Кантор";
}
alert( Article.publisher ); // Илья Кантор
//
//
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