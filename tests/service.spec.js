import { test, expect, chromium, firefox, webkit } from '@playwright/test';
test('should navigate to Playwright docs and verify title', async ({ page }) => {
    // Navigate to the Playwright website
    await page.goto('http://127.0.0.1:61101/html/services.html');

    // Locate an element containing the specific text
  const elementWithText = page.locator(':text("Services offered")'); 

  // Check if the element is visible
  const isVisible = await elementWithText.isVisible();

  // Assert or log the result
  expect(isVisible).toBe(true); // Asserts that the text is visible
  console.log(`Is "Your visible text" visible? ${isVisible}`);
});