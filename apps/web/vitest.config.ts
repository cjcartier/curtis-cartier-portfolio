import path from 'node:path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      exclude: ['**/index.ts', '**/*.stories*', 'src/types'],
      include: ['src'],
      reporter: ['json-summary', 'json', 'text', 'html'],
      reportOnFailure: true,
    },
    setupFiles: ['src/test/setup.client.ts'],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
});
