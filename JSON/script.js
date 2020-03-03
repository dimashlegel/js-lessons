'use strict'

// JSON (JavaScript Object Notation) – это общий формат для представления значений и объектов.
// JSON.stringify для преобразования объектов в JSON.
// JSON.parse для преобразования JSON обратно в объект.
// JSON является независимой от языка спецификацией для данных, поэтому JSON.stringify пропускает некоторые специфические свойства объектов JavaScript.
// А именно:
// Свойства-функции (методы).
// Символьные свойства.
// Свойства, содержащие undefined.

// Полный синтаксис JSON.stringify:
// let json = JSON.stringify(value[, replacer, space])
// value - Значение для кодирования.
// replacer - Массив свойств для кодирования или функция соответствия function(key, value).
// space - Дополнительное пространство (отступы), используемое для форматирования.

// Полный синтаксис JSON.parse:
// let value = JSON.parse(str, [reviver]);
// str - JSON для преобразования в объект.
// reviver - Необязательная функция, которая будет вызываться для каждой пары (ключ, значение) и может преобразовывать значение.
// десериализовать - т.е. снова превратить в объект JavaScrip

// learnjs

// 1. Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};

let toJson = JSON.stringify(user);
// console.log(toJson);
let toStr = JSON.parse(toJson);
// console.log(toStr);

// 2 Исключить обратные ссылки
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

// console.log(room);

alert( JSON.stringify(meetup, function replacer(key, value) {
	/* ваш код */
	return (key != "" && value == meetup) ? undefined : value;
}));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/