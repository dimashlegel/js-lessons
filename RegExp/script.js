'use strict'

// RegExp

// Являются спецсимволами:      $ ^ . * + ? \ {} [] () |
// Не являются спецсимволами:   @ : , ' '' ; - _ = < > % # ~ `& ! /

// 1. 
// '.'  заміна любого символу.
// 1.1 Напишите регулярку, которая найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'.
let str1 = 'ahb acb aeb aeeb adcb axeb';
// console.log(str1.replace(/a.?b/g, '!'));
// 1.2 Напишите регулярку, которая найдет строки abba adca abea по шаблону: буква 'a', 2 любых символа, буква 'a'. 
let str2 = 'aba aca aea abba adca abea';
// console.log(str2.replace(/a..a/g, '!'));
// 1.3  Напишите регулярку, которая найдет строки abba и abea, не захватив adca.
let str3 = 'aba aca aea abba adca abea';
// console.log(str3.replace(/ab.a/g, '!'));


//  На '+', '*', '?', ()

// '+' один або більше повторень
// 1.4 Дана строка . Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'. 
let str4 = 'aa aba abba abbba abca abea';
// console.log(str4.replace(/ab+a/g, '!'));

// '*' нуль або більше повторень
// 1.5 Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba, abba, abbba 
let str5 = 'aa aba abba abbba abca abea';
// console.log(str5.replace(/ab*a/g, '!'));

// '?' нуль або одне повторення
// 1.6  Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'. 
let str6 = 'aa aba abba abbba abca abea';
// console.log(str6.replace(/ab?a/g, '!'));

// 1.7  Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba, abba, abbba, не захватив abca abea. 
let str7 = 'aa aba abba abbba abca abea';
// console.log(str7.replace(/ab*a/g, '!'));

// (ab)+ - групування символів ab та повторення >=1
// 1.8  Дана строка 'ab abab abab abababab abea'. Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.
let str8 = 'ab abab abab abababab abea';
// console.log(str8.replace(/(ab)+/g, '!'));

// На екранування 
' \ '

// 1.9  Дана строка 'a.a aba aea'. Напишите регулярку, которая найдет строку a.a, не захватив остальные.
let str9 = 'a.a aba aea';
// console.log(str9.replace(/a\.a/g, '!'));
// 1.10  Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные.
let str10 = '2+3 223 2223';
// console.log(str10.replace(/2\+3/g, '!'));
// 1.11  Дана строка '23 2+3 2++3 2+++3 345 567'. Напишите регулярку, которая найдет строки 2+3, 2++3, 2+++3, не захватив остальные (+ может быть любое количество).
let str11 = '23 2+3 2++3 2+++3 345 567';
// console.log(str11.replace(/2\++3/g, '!'));
// 1.12 Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'. Напишите регулярку, которая найдет строки *q+, *qq+, *qqq+, не захватив остальные. 
let str12 = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
// console.log(str12.replace(/\*q+\+/g, '!'));
//
// На жадность
// '....?' обмеження жадності 
// 1.13 Дана строка 'aba accca azzza wwwwa'. Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. Между буквами a может быть любой символ (кроме a).
let str13 = 'aba accca azzza wwwwa';
// console.log(str13.replace(/a.*?a/g, '!')); // ! ! ! wwwwa
// console.log(str13.replace(/a.*a/g, '!')); // !
//
//
//
// 2.
//
// {} Фигурные скобки указывающий количество повторений
// {5} – пять повторений, {2,5} – повторяется от двух до пяти (оба включительно), {2,} - повторяется два и более раз. Обратите внимание на то, что такого варианта - {,2} - нет.

// 2.1  Дана строка 'aa aba abba abbba abbbba abbbbba'. Напишите регулярку, которая найдет строки abba, abbba, abbbba и только их
let str21 = 'aa aba abba abbba abbbba abbbbba';
// console.log(str21.replace(/ab{2,4}a/g, '!'));

// 2.2 Дана строка 'aa aba abba abbba abbbba abbbbba'. Напишите регулярку, которая найдет строки вида aba, в которых 'b' встречается менее 3-х раз (включительно).
// console.log(str21.replace(/ab{0,3}a/g, '!'));

// 2.3 Дана строка 'aa aba abba abbba abbbba abbbbba'. Напишите регулярку, которая найдет строки вида aba, в которых 'b' встречается более 4-х раз (включительно). 
// console.log(str21.replace(/ab{4,}a/g, '!'));
//
//
// Группы символов \s, \S, \w, \W, \d, \D
// \s	- Обозначает пробел или пробельный символ (имеется ввиду перевод строки, табуляция и т.п.).
// \S	- Не пробел, то есть всё, кроме \s.
// \w	- Цифра или буква (кириллица не входит в буквы).
// \W	- Не цифра и не буква. - також входять пробілиб таби і тд..
// \d	- Цифра от 0 до 9.
// \D	- Не цифра от 0 до 9 - все крім цифр.
//
// 2.4 Дана строка 'a1a a2a a3a a4a a5a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра. 
let str24 = 'a1a a2a a3a a4a a5a aba aca';
// console.log(str24.replace(/a\da/g, '!'));

// 2.5 Дана строка 'a1a a22a a333a a4444a a55555a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр.
let str25 = 'a1a a22a a333a a4444a a55555a aba aca';
// console.log(str25.replace(/a\d+a/g, '!'));

// 2.6 Дана строка 'aa a1a a22a a333a a4444a a55555a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр (в том числе и ноль цифр, то есть строка 'aa'). 
let str26 = 'a1a a22a a333a a4444a a55555a aba aca';
// console.log(str26.replace(/a\d*a/g, '!'));

// 2.7 Дана строка 'avb a1b a2b a3b a4b a5b abb acb'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число.
let str27 = 'avb a1b a2b a3b a4b a5b abb acb';
// console.log(str27.replace(/a\Db/g, '!'));

// 2.8 Дана строка 'ave a#b a2b a$b a4b a5b a-b acb'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.
let str28 = 'ave a#b a2b a$b a4b a5b a-b acb';
// console.log(str28.replace(/a\Wb/g, '!'));

// 2.9 Дана строка 'ave a#a a2a a$a a4a a5a a-a aca'. Напишите регулярку, которая заменит все пробелы на '!'.
let str29 = 'ave a#a a2a a$a a4a a5a a-a aca';
// console.log(str29.replace(/\s/g, '!'));
//
//
// Квадратные скобки '[' и ']' которые представляют собой операцию 'или':
// С помощью шляпки '^' мы можем сделать отрицание:
'axx bxx cxx exx'.replace(/[^abc]xx/g, '!'); //вернет 'axx bxx cxx !'
// В данном примере шаблон поиска выглядит так: первый символ - это НЕ буква 'a', 'b' или 'c' (любой символ кроме них), потом две буквы 'x'.

// 2.10 Дана строка 'aba aea aca aza axa'. Напишите регулярку, которая найдет строки aba, aea, axa, не затронув остальных.
let str30 = 'aba aea aca aza axa';
// console.log(str30.replace(/a[bex]a/g, '!'));

// 2.11 Дана строка 'aba aea aca aza axa a.a a+a a*a'. Напишите регулярку, которая найдет строки aba, a.a, a+a, a*a, не затронув остальных..
let str31 = 'aba aea aca aza axa a.a a+a a*a';
// console.log(str31.replace(/a[b.+*]a/g, '!'));

// 2.12 Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - цифра от 3-х до 7-ми. 
let str32 = 'a1a a2a a3a a4a a5a a6a a7a aba';
// console.log(str32.replace(/a[3-7]a/g, '!'));

// 2.13 Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - буква от a до g. 
let str33 = 'aaa aba aca ada ana a6a aga';
// console.log(str33.replace(/a[a-g]a/g, '!'));

// 2.14 Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - буква от a до f и от j до z.
let str34 = 'aaa aba aca ada afa aza aga';
// console.log(str34.replace(/a[a-fj-z]a/g, '!'));

// 2.15 Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - буква от a до f и от A до Z. 
let str35 = 'aaa aBa aca aDa afa aZa aga';
// console.log(str35.replace(/a[a-fA-Z]a/g, '!'));

// 2.16 Дана строка 'aba aea aca aza axa a-a a#a'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - не 'e' и не 'x'.
let str36 = 'aba aea aca aza axa a-a a#a';
// console.log(str36.replace(/a[^ex]a/g, '!'));

// 2.17 Дана строка 'wйw wяw wёw wqw'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'w', а между ними - буква кириллицы.
let str37 = 'wйw wяw wёw wqw';
// console.log(str37.replace(/w[а-яА-ЯёЁ]w/g, '!'));

// 2.18 Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - маленькие латинские буквы, не затронув остальных. 
let str38 = 'aAXa aeffa aGha aza ax23a a3sSa';
// console.log(str38.replace(/a[a-z]+a/g, '!'));

// 2.19  Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - маленькие и большие латинские буквы, не затронув остальных.
let str39 = 'aAXa aeffa aGha aza ax23a a3sSa';
// console.log(str39.replace(/a[a-zA-Z]+a/g, '!'));

// 2.20  Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - маленькие латинские буквы и цифры, не затронув остальных.
let str40 = 'aAXa aeffa aGha aza ax23a a3sSa';
// console.log(str20.replace(/a[a-z0-9]+a/g, '!'));

// 2.21  Дана строка 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'. Напишите регулярку, которая найдет все слова по шаблону: любая кириллическая буква любое количество раз.
let str41 = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
// console.log(str41.replace(/[а-яА-ЯёЁ]+/g, '!'));


// Начало '^' и конец '$' строки
// 'aaa aaa aaa'.replace(/^aaa/g, '!'); //вернет '! aaa aaa' Шаблон поиска такой: заменить 'aaa' на '!' только если оно стоит в начале строки.
// 'aaa aaa aaa'.replace(/aaa$/g, '!'); //вернет 'aaa aaa !' Шаблон поиска такой: заменить 'aaa' на '!' только если оно стоит в конце строки.
// 'aaa'.replace(/^a+$/g, '!'); //вернет '!' Шаблон поиска такой: буква 'a' повторяется один или более раз, заменить всю строку на '!' только она состоит из одних букв 'a'.

// 2.22   Дана строка 'aaa aaa aaa'. Напишите регулярку, которая заменит первое 'aaa' на '!'
let str42 = 'aaa aaa aaa';
// console.log(str42.replace(/^aaa/g, '!'));

// 2.23   Дана строка 'aaa aaa aaa'. Напишите регулярку, которая заменит первое 'aaa' на '!'
let str43 = 'aaa aaa aaa';
// console.log(str43.replace(/^aaa/g, '!'));

// 2.24  Дана строка 'aaa aaa aaa'. Напишите регулярку, которая заменит последнее 'aaa' на '!'.
let str44 = 'aaa aaa aaa';
// console.log(str44.replace(/aaa$/g, '!'));

// 'Или' через вертикальную черту |

// 2.25  Дана строка 'aeeea aeea aea axa axxa axxxa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - или буква 'e' любое количество раз или по краям стоят буквы 'a', а между ними - буква 'x' любое количество раз.
let str45 = 'aeeea aeea aea axa axxa axxxa';
// console.log(str45.replace(/ae+a|ax+a/g, '!'));

// 2.26 Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - или буква 'e' два раза или буква 'x' любое количество раз.
let str46 = 'aeeea aeea aea axa axxa axxxa';
// console.log(str46.replace(/ae{2}a|ax+a/g, '!'));

// На обратный слеш '\'

// 2.27 Дана строка 'a\a abc'. Напишите регулярку, которая заменит строку 'a\a' на '!'.
let str47 = 'a\\a abc';
// console.log(str47.replace(/a\\a/g, '!')); ??????

// 2.28 Дана строка 'a\a a\\a a\\\a'. Напишите регулярку, которая заменит строку 'a\\\a' на '!'.
let str48 = "a\a a\\\a a\\\\\a";
// console.log(str48.replace(/a\\\\\a/g, '!')); ??????

// 2.29 Дана строка 'bbb /aaa\ bbb /ccc\'. Напишите регулярку, которая найдет содержимое всех конструкций /...\ и заменит их на '!'
let str49 = 'bbb /aaa\\ bbb /ccc\\';
// console.log(str49);
console.log(str49.replace(/\/...\\/g, '!')); 
