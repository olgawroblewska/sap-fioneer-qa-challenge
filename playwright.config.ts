import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  use:{
      baseURL: 'https://www.sapfioneer.com',
  },
  reporter: 'html',
  outputDir: 'test-results'
})