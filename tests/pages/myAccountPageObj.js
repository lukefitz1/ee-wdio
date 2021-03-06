class MyAccount {
	get loginForm() { return $('#login-form'); }
	get un() { return $('#login-form > div:nth-child(2) > div.col-2.registered-users > div > ul > li:nth-child(1) > div > input'); }
	get pw() { return $('#login-form > div:nth-child(2) > div.col-2.registered-users > div > ul > li:nth-child(2) > div > input'); }
	get loginBtn() { return $('#login-form > div:nth-child(3) > div.col-2.registered-users > div > button'); }
	get registerBtn() { return $('#login-form > div:nth-child(3) > div.col-1.new-users > div > button'); }
	get dashboard() { return $('body > div.wrapper > div > div.main-container.col2-right-layout > div > div.col-main > div > div'); }

	/*
	* NOT DONE YET NOT DONE YET NOT DONE YET NOT DONE YET NOT DONE YET 
	*/
	//wholesale
	get wsCreateForm() { return $('#form-validate'); }
	get wsCreateFName() { return $('#firstname'); }
	get wsCreateLName() { return $('#lastname'); }
	get wsCreateEmail() { return $('#email_address'); }
	get wsCreateMonth() { return $('#todays_date_month'); }
	get wsCreateDay() { return $('#todays_date_day'); }
	get wsCreateYear() { return $('#todays_date_year'); }
	get wsCreateFind() { return $('#find_us'); }
	get wsCreateTaxID() { return $('#tax_id'); }
	get wsCreateBusiness() { return $('#business_type'); }
	get wsCreateCompany() { return $('#company_name'); }
	get wsCreateMerch() { return $('#merch_offer'); }
	get wsCreateYears() { return $('#years_in_business'); }
	get wsCreateLines() { return $('#top_lines_0'); }
	get wsCreateTelephone() { return $('#telephone'); }
	get wsCreateAddress() { return $('#street_1'); }
	get wsCreateCity() { return $('#city'); }
	get wsCreateState() { return $('#region_id'); }
	get wsCreateZip() { return $('#zip'); }
	get wsCreatePw() { return $('#password'); }
	get wsCreateConfirmPw() { return $('#confirmation'); }

	login(un, pw) {
		this.un.setValue(un);
		this.pw.setValue(pw);

		this.loginForm.submitForm();
	}

	wholesaleLogin(un, pw) {
		this.un.setValue(un);
		this.pw.setValue(pw);

		this.loginForm.submitForm();
	}

	createWholesaleAccount(fn, ln, em, mon, day, year, find, tax, biz, name, merch, years, lines, phone, address, city, st, zip, pw) {
		this.wsCreateFName.setValue(fn);
		this.wsCreateLName.setValue(ln);
		this.wsCreateEmail.setValue(em);
		this.wsCreateMonth.setValue(mon);
		this.wsCreateDay.setValue(day);
		this.wsCreateYear.setValue(year);
		this.wsCreateFind.selectByVisibleText(find);
		this.wsCreateTaxID.setValue(tax);
		this.wsCreateBusiness.selectByVisibleText(biz);
		this.wsCreateCompany.setValue(name);
		this.wsCreateMerch.selectByVisibleText(merch);
		this.wsCreateYears.setValue(years);
		this.wsCreateLines.setValue(lines);
		this.wsCreateTelephone.setValue(phone);
		this.wsCreateAddress.setValue(address);
		this.wsCreateCity.setValue(city);
		this.wsCreateState.selectByVisibleText(st);
		this.wsCreateZip.setValue(zip);
		this.wsCreatePw.setValue(pw);
		this.wsCreateConfirmPw.setValue(pw);

		this.wsCreateForm.submitForm();
	}
}

module.exports = new MyAccount();