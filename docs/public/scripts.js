"use strict";

window.addEventListener('DOMContentLoaded', (event) => {
	const mainMenu = document.querySelector('header > div.menu');
	const toggleMenuBtn = document.querySelector('header > a.menu-toggle');
	toggleMenuBtn.addEventListener('click', (event) => {
		mainMenu.classList.add('show');
	});

	const menuXBtn = mainMenu.querySelector('div.x-bar > a');
	menuXBtn.addEventListener('click', (event) => {
		mainMenu.classList.remove('show');
	});
});