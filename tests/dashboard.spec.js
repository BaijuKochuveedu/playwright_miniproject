import { test, expect, chromium, firefox, webkit } from '@playwright/test';
test('should navigate to Playwright docs and verify title', async ({ page }) => {
    // Navigate to the Playwright website
    await page.goto('http://127.0.0.1:61101/html/dashboard.html');

    // Click on the "About" link
    await page.getByRole('link', { name: 'About' }).click();

    // Verify that the page title contains "About"
    await expect(page).toHaveTitle(/About/);

    // Click on the "Services" link
    await page.getByRole('link', { name: 'Services' }).click();

    // Verify that the page title contains "services"
    await expect(page).toHaveTitle(/services/);

    // Click on the "contact" link
    await page.getByRole('link', { name: 'Contact' }).click();

    // Verify that the page title contains "services"
    await expect(page).toHaveTitle(/contact/);

    // Click on the "contact" link
    await page.getByRole('link', { name: 'Home' }).click();

    // Verify that the page title contains "services"
    await expect(page).toHaveTitle(/dashboard/);

    // Click on "Getting started" link
    //await page.getByRole('link', { name: 'Getting started' }).click();

    // Verify that the "Getting started" heading is visible
    await expect(page.getByRole('heading', { name: 'Welcome, testuser' })).toBeVisible();
});