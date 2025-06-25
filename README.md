# 🚀 QA Automation Challenge – SAP Fioneer

## 🛠 Tech Stack
- **Language:** TypeScript
- **Framework:** [Playwright](https://playwright.dev/)
- **Test Runner:** Playwright Test

---

## 📦 Requirements
- [Node.js](https://nodejs.org/) version **16 or higher**

---

## ▶️ How to Run the Tests

### 1. Install dependencies

```bash
npm init -y
npm install
npm install -D playwright @playwright/test typescript ts-node
```

### 2. Run all tests

```bash
npx playwright test
```

### 3. View the HTML report

```bash
npx playwright show-report
```

---

## 📁 Project Structure

```
sap-fioneer-qa-challenge/
├── playwright-report/         # Test reports (HTML format)
├── test-results/              # Artifacts: screenshots, videos, traces
├── tests/
│   ├── test1.spec.ts
│   ├── test2.spec.ts
│   └── test3.spec.ts
├── package.json               # Project dependencies & scripts
├── package-lock.json          # Exact versions of dependencies
├── playwright.config.ts       # Playwright configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file 📖
```

---

## 🧪 Notes

- Test logs are printed to console and stored in the Playwright HTML report.
- All tests follow a consistent structure with clear logging using `console.log()`.

---

## 📬 Contact

Feel free to reach out with questions, feedback, or improvements.
