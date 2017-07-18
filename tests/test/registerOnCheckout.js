describe("Register on checkout - should complete register on checkout on B2C site", function() {
    this.timeout(25000);
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

    it("should submit billing address form with pw", function() {
        //generate random string for email
        rand = base.generateRandomString();

        //submit billing address form
        checkout.billingAddressForm.waitForVisible();
        checkout.registerLabel.click();
        checkout.billingPw.waitForVisible();

        checkout.submitBillingForm('Luke', 'Fitzgerald', 'luke.fitzgerald-' + rand + '@blueacorn.com', 
            '145 Williman St', 'Charleston', 'South Carolina', '29403', '8779442583', 
            'register', 'pass4luke');
    });

    it("should submit shipping method form", function() {
        //shipping method auto selected, so no need to select one, submit form
        checkout.shippingMethodForm.waitForVisible();
        checkout.shippingMethodContinueBtn.waitForVisible();
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

        expect(checkout.placeOrderButton.isVisible()).to.be.true;
        //checkout.placeOrderButton.click();
    });

    // it("should review order success page", function() {
    //     //order success page
    //     checkout.orderSuccessPageHeading.waitForVisible(25000);
    //     console.log(checkout.orderNumText.getText());
    // });
});