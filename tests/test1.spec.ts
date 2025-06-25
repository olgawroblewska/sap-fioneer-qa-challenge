import { test, expect } from '@playwright/test';

test('Verify End-to-end solutions for financial services section', async ({ page }) => {
  console.log('🚀 Starting test: Verify End-to-end solutions for financial services section');
  await page.goto('/');

  console.log('Scroll page to section "End-to-end solutions for financial services"');
  const sectionHeader = page.locator('h2:has-text("End-to-end solutions for financial services")');
  await sectionHeader.scrollIntoViewIfNeeded();
  await expect(sectionHeader).toBeVisible();

  console.log('Locate container with 3 subsections');
  const container = page.locator('div.row.d-md-flex');

  console.log('Check if subsection has 3 columns');
  const cards = container.locator('div.col-md-4');
  await expect(cards).toHaveCount(3);

  console.log('Check subsections of "End-to-end solutions for financial services"');
  const expectedTitles = ['Banking', 'Insurance', 'Finance & ESG'];

  for (let i = 0; i < expectedTitles.length; i++) {
    const titleLocator = cards.nth(i).locator('h3');
    await expect(titleLocator).toHaveText(expectedTitles[i]);
    console.log(`✅ Found subsection: "${expectedTitles[i]}"`);
  }

  console.log('🎉 Test passed: section "End-to-end solutions for financial services" verified with 3 subsections')
});