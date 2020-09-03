"use strict";

window.addEventListener('DOMContentLoaded', (event) => {
	const mobileMenu = document.querySelector('#mobile-menu');
	const primaryMenuBtn = document.querySelector('header > a.menu-toggle');
	primaryMenuBtn.addEventListener('click', (event) => {
		mobileMenu.classList.add('show');
	});

	const mobileMenuXBtn = mobileMenu.querySelector('div.x-bar > a');
	mobileMenuXBtn.addEventListener('click', (event) => {
		mobileMenu.classList.remove('show');
	});
});