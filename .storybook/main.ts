import type { StorybookConfig } from '@storybook/nextjs-vite';
import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-mcp',
  ],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      resolve: {
        alias: {
          '@': path.resolve(dirname, '../src'),
        },
      },
    });
  },
};
export default config;
