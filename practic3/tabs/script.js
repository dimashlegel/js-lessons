'use strict'

let tabsNav = document.getElementById('tabs-nav');
let tabsContent = document.getElementById('tabs-content');

initTabs(tabsNav, tabsContent);

function initTabs(tabsNav, tabsContent) {

	let tabsLinks = tabsNav.querySelectorAll('[data-tab]');
	let tabsTexts = tabsContent.querySelectorAll('[data-tab]');

	addDataNumbers(tabsLinks);
	addDataNumbers(tabsTexts);

	for (let i = 0; i < tabsLinks.length; i++) {
		tabsLinks[i].addEventListener('click', function() {
			deactivateLink(findActiveLink(tabsLinks));
			this.classList.add('active');
			return showTabContent(tabsTexts, this.getAttribute('data-tab'));
		});
	}
}

function showTabContent(parent, data) {
	parent.forEach(element => {
		element.classList.remove('active');
		if (element.getAttribute('data-tab') == data) {
			element.classList.add('active');
		}
	});
}

function deactivateLink(link) {
	if (link) {
		link.classList.remove('active');
	}
}

function findActiveLink(arr) {
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (element.classList.contains('active')) {
			return element;
		}
	}
}

function addDataNumbers(arr) {
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		element.setAttribute('data-tab', i);
	}
}