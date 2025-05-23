const { test, expect } = require('@playwright/test');

test.describe('Facebook Homepage Tests', () => {
  // Positive Test Cases
  test('should load Facebook homepage successfully', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await expect(page).toHaveTitle(/Facebook/);
    await expect(page.locator('//button[@name="login"]')).toBeVisible();
  });

  test('should display login form', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#pass')).toBeVisible();
    await expect(page.locator('//button[@name="login"]')).toBeVisible();
  });

  test('should have create account option', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await expect(page.locator('//a[@data-testid="open-registration-form-button"]')).toBeVisible();
  });

  // Negative Test Cases
     test('should not find non-existent element', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await expect(page.locator('button[name="websubmit"]')).not.toBeVisible(); //cannot find create account button
  });

  test('should show error for empty email login attempt', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await page.locator('#pass').fill('123456');
    await page.locator('//button[@name="login"]').click();
    await page.waitForLoadState('networkidle');

    // Wait for error message to appear
    await expect(page.locator('//div[contains(text(), "The email address or mobile number you entered isn\'t connected to an account")]')).toBeVisible();
  });
});
