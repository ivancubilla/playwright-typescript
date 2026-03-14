import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { CheckboxPage } from '../pages/checkbox.page';

test.describe('Checkboxes tests', () => {
    let checkboxPage : CheckboxPage;
    let homePage : HomePage;
    test.beforeEach(async ({ page }) => {  // Navigate to the checkboxes page before each test
        homePage = new HomePage(page);
        checkboxPage = new CheckboxPage(page);
        await homePage.gotoHomePage();
        await homePage.gotoCheckboxes();
    });

    test('should check checkbox1', async () => {
        checkboxPage.checkCheckbox1();
        await expect(checkboxPage.checkbox1).toBeChecked();

  });

    test('should uncheck checkbox2', async () => {
        checkboxPage.unCheckCheckbox2();
        await expect(checkboxPage.checkbox2).not.toBeChecked();

  });
});