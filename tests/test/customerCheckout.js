describe("Customer checkout - should login, add product to cart, then complete checkout", function() {
    this.timeout(25000);
    it("login to customer account", function() {
        browser.url("/customer/account/login");

        //assert that the login form is displayed on page load
        expect(account.loginForm.isVisible()).to.be.true;
        expect(account.loginBtn.isVisible()).to.be.true;

        //login
        account.login('luke.fitzgerald-test2@blueacorn.com', 'pass4luke');

        //assert that you made it to the dashboard page
        expect(account.dashboard.isVisible()).to.be.true;
    });

    it("should add product to cart, click checkout button", function () {
        browser.url("/green-home/water-filtration/lifestraw");

        //Ensure add to cart button is visible
        expect(prod.addToCart.isVisible()).to.be.true;
        
        //add simple product to cart
        prod.addToCart.click();
        
        //wait for mini cart to display, go to checkout
        header.miniCartDropdown.waitForVisible();
        header.miniCartCheckoutBtn.waitForVisible();
        header.miniCartCheckoutBtn.click();
    });

    it("should click checkout button on cart page", function() {
        //Ensure checkout button is visible
        expect(cart.checkoutBtn.isVisible()).to.be.true;

        //Click checkout button
        cart.checkoutBtn.click();
    });
    
    it("should submit billing address form with already saved address", function() {
        //submit billing address form
        checkout.billingAddressForm.waitForVisible();
        checkout.billingContinueBtn.waitForVisible();
        checkout.billingContinueBtn.click();
    });

    it("should submit shipping method form", function() {
        //select shipping method, submit form
        checkout.shippingMethodForm.waitForVisible();
        checkout.groundShippingLabel.click();
        checkout.submitShippingMethodForm();
    });

    it("should submit payment method form", function() {
        //select payment method (cc), submit form
        checkout.paymentMethodForm.waitForVisible();
        checkout.mailCheckRadioBtn.waitForVisible();
        
        if (env === 'stage') {
            checkout.mailCheckRadioBtn.click();    
        } else if (env === 'prod') {
            checkout.ccLabel.click();
            //checkout.fillCCForm('Visa', '4111111111111111', '04 - April', '2023', '123');
            checkout.fillCCForm('MasterCard', '5474151752505476', '08 - August', '2019', '158');
        }
        
        checkout.submitPaymentMethodForm();
    });

    it("should submit order", function() {
        //place order
        checkout.orderReview.waitForVisible();
        checkout.placeOrderButton.waitForVisible();
        checkout.placeOrderButton.click();
    });

    it("should review order success page", function() {
        //order success page
        checkout.orderSuccessPageHeading.waitForVisible(25000);
        console.log(checkout.orderNumText.getText());
    });
});