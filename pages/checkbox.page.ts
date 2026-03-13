import { Page, Locator } from '@playwright/test';

export class CheckboxPage {

    readonly page: Page;
    readonly checkbox1 : Locator;
    readonly checkbox2 : Locator;
 
  constructor(page: Page) {
    this.page = page;

    // Initialize locators
    this.checkbox1 = page.locator('input[type="checkbox"]').nth(0);
    this.checkbox2 = page.locator('input[type="checkbox"]').nth(1);
  }

    async toggleCheckbox1() {
    await this.checkbox1.check();
    }

    async toggleCheckbox2() {
    await this.checkbox2.check();
    }
}