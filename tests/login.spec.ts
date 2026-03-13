import { test, expect } from '@playwright/test';
import loginData from '../test-data/loginData.json';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';

test.describe('Login Tests', () => {

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {

    const homePage = new HomePage(page);
    loginPage = new LoginPage(page);

    await homePage.gotoHomePage();
    await homePage.gotoLoginPage();

  });

  for (const data of loginData) {

    test(data.testName, async () => {

      await loginPage.login(data.username, data.password);

      // Validate the login result based on the expected outcome
      if (data.expected === 'success') {
        await expect(loginPage.message).toContainText('logged');
      } else {
        await expect(loginPage.message).toContainText('invalid');
      }

    });

  }

});
/*
feature/checkbox-tests
feature/github-actions*/