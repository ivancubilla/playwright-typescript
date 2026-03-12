import { test, expect } from '@playwright/test';
import loginData from '../test-data/loginData.json'; 
import { LoginPage } from '../pages/login.page';

// Loop through each test case in the loginData
loginData.forEach((data) => { 
  test(data.testName, async ({ page }) => {

    const loginPage = new LoginPage(page);

    loginPage.gotoLoginPage();
    // Fill in the username and password fields with the data from the current test case
    await loginPage.login(data.username, data.password); 

    // If the expected result is success, check for the success message; otherwise, check for the error message
    if (data.expected === 'success') { 
      await expect(loginPage.message).toContainText('logged');
    } else {
      await expect(loginPage.message).toContainText('invalid!');
    }

  });

});