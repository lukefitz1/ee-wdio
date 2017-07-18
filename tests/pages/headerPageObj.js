class Header {
	get header() { return $('body > div.wrapper > div > div.header-container > div.header'); }
	get logo() { return $('body > div.wrapper > div > div.header-container > div.header > a'); }
	get search() { return $('body > div.wrapper > div > div.header-container > div.top-nav > form > div.nav > div.nav-input.UI-NAV-INPUT > input'); }
	get miniCartIcon() { return $('#new-cart-widget'); }
	get miniCartDropdown() { return $('#new-cart-container'); }
	get miniCartCheckoutBtn() { return $('#new-cart-container > div.cart-footer > div.actions > button.button.arrow'); }
	get myAccountTab() { return $('#base-a'); }
	get loginForm() { return $('#mini-form-container > form'); }
	get un() { return $('#email'); }
	get pw() { return $('#pass'); }
	get loginBtn() { return $('#send2'); }

	login(un, pw) {
		this.un.setValue(un);
		this.pw.setValue(pw);

		this.loginForm.submitForm();
	}
}

module.exports = new Header();