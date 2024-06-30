import { test, expect } from '@playwright/test';
import { LoginPage } from '../../fixtures/pages/loginpage';

test('User Logs in to amazon.com', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto("https://www.amazon.com/");
  await loginPage.signIntoAmazon()

});
