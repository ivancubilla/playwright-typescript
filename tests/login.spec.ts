import { test, expect } from '@playwright/test';
import loginData from '../test-data/loginData.json'; 
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';

test.describe('Go to From Authentication Login Page', () => {
  test.beforeEach(async ({ page }) => {  // Navigate to the login page before each test

    const homePage = new HomePage(page);
    await homePage.gotoHomePage();
    await homePage.gotoLoginPage();
  });

// Loop through each test case in the loginData
loginData.forEach((data) => { 
  test(data.testName, async ({ page }) => {

    const loginPage = new LoginPage(page);    
    await loginPage.login(data.username, data.password); 

    // If the expected result is success, check for the success message; otherwise, check for the error message
    if (data.expected === 'success') { 
      await expect(loginPage.message).toContainText('logged');
    } else {
      await expect(loginPage.message).toContainText('invalid!');
    }

    });

  });
});
/*
feature/checkbox-tests
feature/github-actions*/