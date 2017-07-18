class Cart {
	get checkoutBtn() { return $('body > div.wrapper > div > div.main-container.col2-right-layout > div > div.col-main > div > div.cart-collaterals > div.col-2 > ul > li:nth-child(2) > button'); }
}

module.exports = new Cart();