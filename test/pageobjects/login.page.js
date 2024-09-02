class LoginPage {
    get emailInput() { return $('//android.widget.EditText[@content-desc="input-email"]'); }
    get passwordInput() { return $('//android.widget.EditText[@content-desc="input-password"]'); }
    get loginPageButton() { return $('//android.widget.TextView[@text="Login"]'); }
    get loginButton() { return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup'); }
    get successMessage() { return $('//*[@resource-id="android:id/alertTitle"]'); }
    get passwordErrorMessage() { return $('//android.widget.TextView[@text="Please enter at least 8 characters"]'); }
    get emailErrorMessage() { return $('//android.widget.TextView[@text="Please enter a valid email address"]'); }

    async visitLoginPage (){
        await this.loginPageButton.click();
    }
    async login(username, password) {
        await this.emailInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();
