describe("Open account login page - ", function () {
    this.timeout(25000);

    describe("should open customer account login page", function() {
        it("should login to customer account successfully", function () {
            browser.url("/customer/account/login");

            //wait for login form is visible
            account.loginForm.waitForVisible();
            account.loginBtn.waitForVisible();

            //assert that the login form is displayed on page load
            expect(account.loginForm.isVisible()).to.be.true;
            expect(account.loginBtn.isVisible()).to.be.true;

            //login
            account.login('luke.fitzgerald@blueacorn.com', 'pass4luke');

            //assert that you made it to the dashboard page
            expect(account.dashboard.isVisible()).to.be.true;
        });

        it("should logout", function() {
            browser.url("/customer/account/logout");
        });
    });

    describe("should open login form in header", function() {
        it("should login to customer account successfully via login form in header", function () {
            browser.url("/");

            //wait for my account tab to be visible, click it
            header.myAccountTab.waitForVisible();
            header.myAccountTab.click();

            //assert that the login form is displayed on page load
            expect(header.loginForm.isVisible()).to.be.true;
            expect(header.loginBtn.isVisible()).to.be.true;

            //login
            header.login('luke.fitzgerald@blueacorn.com', 'pass4luke');

            //assert that you made it to the dashboard page
            expect(account.dashboard.isVisible()).to.be.true;
        });

        it("should logout", function() {
            browser.url("/customer/account/logout");
        });
    });

    // no wholesale site on staging, so this will alwaya fail
    describe("should open wholesale login page", function() {
        it("should login to wholesale customer account successfully", function () {
            browser.url(wholesaleUrl + "/customer/account/login");

            //wait for login form is visible
            account.loginForm.waitForVisible();
            
            //assert that the login form is displayed on page load
            expect(account.loginForm.isVisible()).to.be.true;
            expect(account.loginBtn.isVisible()).to.be.true;

            //login
            account.wholesaleLogin('luke.fitzgerald@blueacorn.com', 'pass4luke');

            //assert that you made it to the dashboard page
            expect(account.dashboard.isVisible()).to.be.true;
        });

        it("should logout", function() {
            browser.url("/dealers/customer/account/logout");
        });
    });
});