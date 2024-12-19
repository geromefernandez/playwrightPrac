import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page

  readonly hamburgerMenu : string = "//a[@id='nav-hamburger-menu']"
  private signInLink : string ="//div[@id='hmenu-customer-name']"

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url : string) {
    await this.page.goto(url);
  }

  async signIntoAmazon() {
    await this.page.locator(this.hamburgerMenu).click();
    await this.page.locator(this.signInLink).first().click();
  }

}