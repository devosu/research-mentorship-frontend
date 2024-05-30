// ./__tests__/__e2e__/example.spec.ts
//
// Example Playwright test.

import { expect, test } from '@playwright/test';

test('Homepage loads correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('text=Research Mentorship Program Homepage')).toBeVisible();
});
