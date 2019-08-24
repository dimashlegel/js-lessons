'use strict'

window.onload = function() {
	var tdelements = document.querySelectorAll('td');

	for (var i = 0; i < tdelements.length; i++) {
		tdelements[i].addEventListener('click', function() {
			var val = this.innerHTML;
			this.style.display = "none";
			var inp = document.createElement('input');
			inp.value = val;
			inp.addEventListener('change', function() {
				this.previousElementSibling.innerHTML = this.value;
				this.previousElementSibling.style.display = "";
				this.parentNode.removeChild(this);
			});
			this.parentNode.insertBefore(inp, this.nextSibling);
		});
	}
}