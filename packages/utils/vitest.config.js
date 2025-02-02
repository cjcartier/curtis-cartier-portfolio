import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['json-summary', 'json', 'text', 'html'],
      reportOnFailure: true,
    },
    typecheck: {
      enabled: true,
    },
  },
});
