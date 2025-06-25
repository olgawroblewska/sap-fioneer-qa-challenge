import { test, expect } from '@playwright/test';

test('Redirect to ESG KPI Engine page', async ({ page }) => {
  await page.goto('/');

  console.log('Click on "Products" tab');
  const productsTab = page.getByRole('button', { name: 'Products' });
  await productsTab.click();

  console.log('Click on "Finance & ESG" category in megamenu');
  const finESGBookmark = page.locator('#menu-walker li >> text=Finance & ESG');
  await finESGBookmark.first().click();

  console.log('Click on "ESG KPI Engine" link');
  const esgKPIEngineLink = page.getByRole('link', { name: 'ESG KPI Engine' });
  await esgKPIEngineLink.click();

  console.log('Verify redirect to ESG KPI Engine page');
  await expect(page).toHaveURL(/.*esg-kpi-engine/i);

  console.log('🎉 Test passed: Redirect to ESG KPI Engine page works!')
});