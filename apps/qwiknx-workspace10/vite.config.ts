/// <reference types="vitest" />

import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600',
    },
  },
  server: {
    open: true,
  },
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      reportsDirectory: '../../coverage/apps/qwiknx-workspace10',
    },
  },
});
