import { test, expect, chromium, firefox, webkit } from '@playwright/test';

for (const browserType of [chromium, firefox, webkit]) {
  test(`test in ${browserType.name()}`, async () => {
    const browser = await browserType.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com/login');
    //await expect(page).toHaveTitle(/Running/);
    await browser.close();
  });
}
test('valid user can login successfully', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/HTML/login.html');
  await page.fill('#username', 'testuser');
  //await page.fill('#password', 'Password123');
  //await page.click('button[type="submit"]');
  //await expect(page).toHaveURL('https://example.com/dashboard');
  //await expect(page.locator('h1')).toHaveText('Welcome, testuser');
});