import { test, expect } from '@playwright/test';

test('Get in touch – incorrect email', async ({ page }) => {
  await page.goto('/');

  console.log('Click on "Get in touch" button');
  const getInTouchBtn = page.getByRole('link', { name: /get in touch/i }).first();
  await expect(getInTouchBtn).toBeVisible();
  await getInTouchBtn.click();

  console.log('Verify redirection to contact-sales page');
  await expect(page).toHaveURL(/.*contact-sales/);

  console.log('Fill in invalid email in the business email input field');
  const emailInputField = page.locator('#email-5a62ee32-df11-4c3f-be27-434624349c61');
  await emailInputField.fill('342323');
  await emailInputField.blur();

  console.log('Check for visible validation error');
  const errorMsg = page.locator('label:has-text("Email must be formatted correctly.")');
  await expect(errorMsg).toBeVisible();
  await expect(errorMsg).toHaveText('Email must be formatted correctly.');

  const errorMsgContent = await errorMsg.textContent();
  console.log('❗ Validation error message:', errorMsgContent);
  console.log('✅ Error message is as expected');
  console.log('🎉 Test passed: invalid email triggers proper validation');
});
