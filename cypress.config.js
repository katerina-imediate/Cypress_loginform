import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 10000,

  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/tests/**/*.spec.{js,jsx,ts,tsx}",
    // supportFile: "cypress/support/e2e.ts",
    
  },
});
