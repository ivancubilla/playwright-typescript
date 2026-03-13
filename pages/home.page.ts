
import { Page, Locator } from '@playwright/test';

export class HomePage{
    // Define the page property to hold the Playwright Page object
    readonly page: Page;

    constructor(page: Page) {
    this.page = page;
}

async gotoHomePage(){
    // Navigate to the home page
    await this.page.goto('/');
}

async gotoLoginPage() {
    // click on the From Authentication link
    await this.page.getByRole('link', { name: 'Form Authentication' }).click();
  }

  async gotoDropdown() {
    // click on the Dropdown link
    await this.page.getByRole('link', { name: 'Dropdown' }).click();
  }

  async gotoCheckboxes() {
    // click on the Checkboxes link
    await this.page.getByRole('link', { name: 'Checkboxes' }).click();
  }
}