import { test, expect } from '@playwright/test';

test('Example Report ', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Facebook/);
  await page.screenshot({ path: 'captura.png' });



});

test.afterAll(async ({ page }) => {
  // Close the page after all tests
  console.log('All tests completed, closing page...');
  await page.close();
});