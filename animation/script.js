'use strict'

// requestAnimationFrame - Это встроенный метод браузера, который вызывает переданную в него функцию в тот момент, когда браузер готовится совершить перерисовку
// Вспомогательная функция animate для создания анимации:

function animate({
	timing,
	draw,
	duration
}) {

	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
}

// Опции:

// duration – общая продолжительность анимации в миллисекундах.
// timing – функция вычисления прогресса анимации. Получается момент времени от 0 до 1, возвращает прогресс анимации, обычно тоже от 0 до 1.
// draw – функция отрисовки анимации.

// Timing functions
// timing(timeFraction)  - Функция расчёта времени

// linear
function linear(timeFraction) {
	return timeFraction;
}

// параболическая кривая
function quad(timeFraction) {
	return Math.pow(timeFraction, 2)
}

// Дуга
// EasyIn
function circ(timeFraction) {
	return 1 - Math.sin(Math.acos(timeFraction));
}

// Эта функция совершает «выстрел из лука». В начале «натягивается тетива», а затем «выстрел».
function back(x, timeFraction) {
	return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
}

// bounce - «отскоки» начинаются сразу
function bounce(timeFraction) {
	for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
		if (timeFraction >= (7 - 4 * a) / 11) {
			return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
		}
	}
}

// easeOut Реверсивные функции
// timingEaseOut(timeFraction) = 1 - timing(1 - timeFraction);

// bounce function - «отскоки» вконце
function makeEaseOut(timing) {
	return function(timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}

// easeInOut

function makeEaseInOut(timing) {
	return function(timeFraction) {
		if (timeFraction < .5)
			return timing(2 * timeFraction) / 2;
		else
			return (2 - timing(2 * (1 - timeFraction))) / 2;
	}
}
let bounceEaseOut = makeEaseOut(bounce);

// 1

let ball = document.getElementById('ball');
let field = document.getElementById('field');

let fieldBottomCoord = field.clientHeight - ball.clientHeight;
let width = 100;
ball.addEventListener('click', function() {
	animate({
		duration: 2000,
		timing: bounceEaseOut,
		draw: function(progress) {
			ball.style.top = progress * fieldBottomCoord + 'px';
		}
	})
	animate({
		duration: 2000,
		timing: makeEaseOut(quad),
		draw: function(progress) {
			ball.style.left = progress * width + 'px';
		}
	})
});
