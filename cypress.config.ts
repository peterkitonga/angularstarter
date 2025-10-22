import { defineConfig } from 'cypress';
import plugins from './cypress/plugins';

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  trashAssetsBeforeRuns: true,
  env: {
    TAGS: 'not @ignore',
  },
  e2e: {
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      // implement node event listeners here
      plugins(on, config);

      return config;
    },
    specPattern: './cypress/integration/**/*.{feature,features}',
    supportFile: './cypress/support/e2e.ts',
    fixturesFolder: './cypress/fixtures',
    baseUrl: 'http://localhost:4200',
  },
});
