import { Page, Locator } from '@playwright/test';

export class DropdownPage {

    readonly page: Page;
    readonly dropdown: Locator;
    readonly dropdownLink: Locator;
    readonly dropdownAllOptions: Locator;
 
  constructor(page: Page) {
    this.page = page;

    // Initialize locators
    this.dropdown = page.locator('#dropdown');
    this.dropdownLink = page.locator('a[href="/dropdown"]');
    this.dropdownAllOptions = page.locator('#dropdown > option');
  }

  async selectOption(value: string) {
    await this.dropdown.selectOption(value);
  }

  async getOptionsText() {
    return await this.dropdownAllOptions.allTextContents();
  }

  async getSelectedOption() {
    return await this.dropdown.inputValue();
  }
}              