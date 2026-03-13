
import { Page } from '@playwright/test';

export class HomePage{

    readonly page: Page;

    constructor(page: Page) {
    this.page = page;
}

async gotoHomePage(){
    await this.page.goto('/');
}

async gotoLoginPage() {
    // click on the From Authentication link
    await this.page.getByRole('link', { name: 'Form Authentication' }).click();
  }

  async gotoDropdown() {
    await this.page.locator('a[href="/dropdown"]').click();
  }

}