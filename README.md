# QA Automation Challenge - SAP Fioneer

## Tech stack
- Languages: Typescript
- Framework: Playwright
- Runner: Playwright Test

## Requirements
Node.js >= 16

## How to run
1. Install dependencies
(bash)
npm install
npm init -y
npm install -D playwright @playwright/test typescript ts-node 

2. Run all tests 
npx playwright test

3. View report
npx playwright show-report

## Project structure
sap-fioneer-qa-challenge/
|- playwright-report                ## Folder for test reports [html version]
|- test-results                     ## Folder for test artifacts such as screenshots, videos, traces, etc.
|- tests
    |- test1.spec.ts
    |- test2.spec.ts
    |- test3.spec.ts
|- package-lock.json                ## Dependencies versions (created automatically)
|- package.json                     ## Manages project dependencies
|- playwright.config.ts             ## Playwright configuration
|- README.md                        
|- tsconfig.json                    ## TypeScript configuration