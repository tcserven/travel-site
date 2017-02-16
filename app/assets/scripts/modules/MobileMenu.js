import $ from 'jquery';



class MobileMenu {
	constructor() {
		// This is bad JS spaghetti code
		// $('.site-header__menu-icon').click(function() {
		// 	console.log('the top right icon was clicked');
		// });
		this.menuIcon = $('.site-header__menu-icon');
		this.menuContent = $('.site-header__menu-content');
		this.siteHeader = $('.site-header');

		// we want our browser to be listening for events right away
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		// console.log(this);
	}

	toggleTheMenu() {
		// console.log(this);
		// This is currently referring to menuIcon (before bind)
		this.menuContent.toggleClass('site-header__menu-content--is-visible');
		this.siteHeader.toggleClass('site-header--is-expanded');
		this.menuIcon.toggleClass('site-header__menu-icon--close-x');

	}
}

export default MobileMenu;