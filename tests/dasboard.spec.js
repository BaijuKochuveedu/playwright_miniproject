import { test, expect, chromium, firefox, webkit } from '@playwright/test';

for (const browserType of [chromium, firefox, webkit]) {
  test(`test in ${browserType.name()}`, async () => {
    const browser = await browserType.launch();
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/HTML/dashboard.html');
    //await expect(page).toHaveTitle(/Running/);
    await browser.close();
  });
}

// test('valid user can login successfully', async ({ page }) => {
//   await page.goto('http://127.0.0.1:5500/HTML/login.html'); // change to your local/test URL
//   });

  // test('should display all menu items', async ({ page }) => {
  //   const menuItems = await page.locator('ul li a');
  //   await expect(menuItems).toHaveCount(4); // Home, About, Services, Contact

  //   const expectedTexts = ['Home', 'About', 'Services', 'Contact'];
  //   for (let i = 0; i < expectedTexts.length; i++) {
  //     await expect(menuItems.nth(i)).toHaveText(expectedTexts[i]);
  //   }
  // });

//   test('should navigate correctly when clicking menu items', async ({ page }) => {
//     // Example: clicking each link and verifying URL fragment
//     await page.click('text=Home');
//     await expect(page).toHaveURL(/#home/);

//     await page.click('text=About');
//     await expect(page).toHaveURL(/#about/);

//     await page.click('text=Services');
//     await expect(page).toHaveURL(/#services/);

//     await page.click('text=Contact');
//     await expect(page).toHaveURL(/#contact/);
//   });

//   test('should highlight active menu item', async ({ page }) => {
//     const homeLink = page.locator('ul li a', { hasText: 'Home' });
//     await expect(homeLink).toHaveClass(/active/); // Checks that "Home" has 'active' class
//   });

// });
