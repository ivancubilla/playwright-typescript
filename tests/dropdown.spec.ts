import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { DropdownPage } from '../pages/dropdown.page';


test.describe('Go to Dropdown Page', () => {
    test.beforeEach(async ({ page }) => {  // Navigate to the dropdown page before each test
        
        const homePage = new HomePage(page);
        //const dropdownPage = new DropdownPage(page);

        await homePage.gotoHomePage();
        await homePage.gotoDropdown();
    });

  test('should select option 1 from the dropdown', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.selectOption('1');
    await expect(dropdownPage.dropdown).toHaveValue('1');
  });

  test('should select option 2 from the dropdown', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.selectOption('2');
    await expect(dropdownPage.dropdown).toHaveValue('2');
  });

  test('validate all options from the dropdown', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await expect(dropdownPage.dropdownAllOptions).toHaveText([
      'Please select an option',
      'Option 1',
      'Option 2'
    ]);
  });
}); 