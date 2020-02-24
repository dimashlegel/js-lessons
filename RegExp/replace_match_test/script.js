'use strict'
//  На карманы при замене

// 1.1 Дана строка 'aaa@bbb eee7@kkk'. Напишите регулярку, которая найдет строки по шаблону: любое количество букв и цифр, символ @, любое количество букв и цифр и поменяет местами то, что стоит до @ на то, что стоит после нее. Например, aaa@bbb должно превратиться в bbb@aaa.
let str1 = 'aaa@bbb eee7@kkk';
// console.log(str1.replace(/(\w+)@(\w+)/g, '$2@$1'));

// 1.2 Дана строка вида 'a1b2c3'. Напишите регулярку, которая найдет все цифры и удвоит их количество таким образом: 'a11b22c33' (то есть рядом с каждой цифрой напишет такую же).
let str2 = 'a1b2c3';
// console.log(str2.replace(/(\d)/g, '$1$1'));


// Задачи на test и match

// 1.3 С помощью метода test определите, что переданная строка является емэйлом. Примеры емэйлов для тестирования mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru, my_mail@mail.ru, mail@mail.com, mail@mail.by, mail@yandex.ru. 
let str3 = 'my_mail@mail.ru';
let regExp = /^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/;
console.log(regExp.test(str3));

// 1.4 Дана строка с текстом, в котором могут быть емейлы. С помощью match найдите все емэйлы в виде массива
let str4 = '';
let regExp = //;
console.log(regExp.test(str4));
