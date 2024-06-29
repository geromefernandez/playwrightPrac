import { test } from '@playwright/test';
import logInPageActions from '../../fixtures/pages/loginpage'

let LogInPageActions: logInPageActions

test('User signs in', async () => {
  await LogInPageActions.navigateToUrl('https://amazon.com/');
});