const LoginPage = require('../pageobjects/login.page');

describe('Login Test Suite', () => {
    it('should show error message when password has less than 8 characters', async () => {
        await LoginPage.visitLoginPage();
        await LoginPage.login('mmm@gmail.com', '1234567');
        await expect(LoginPage.passwordErrorMessage).toBeDisplayed();
    });

    it('should show error message when email without @', async () => {
        await LoginPage.visitLoginPage();
        await LoginPage.login('mmm', '12345678');
        await expect(LoginPage.emailErrorMessage).toBeDisplayed();
    });

    it('should show error message when password is empty', async () => {
        await LoginPage.visitLoginPage();
        await LoginPage.login('mmm@gmail.com', '');
        await expect(LoginPage.passwordErrorMessage).toBeDisplayed();
    });

    it('should show error message when password is empty', async () => {
        await LoginPage.visitLoginPage();
        await LoginPage.login('mmm@gmail.com', '1234567');
        await expect(LoginPage.passwordErrorMessage).toBeDisplayed();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.visitLoginPage();
        await LoginPage.login('mmm@gmail.com', '12345678');
        await expect(LoginPage.successMessage).toBeDisplayed();
     });
});
