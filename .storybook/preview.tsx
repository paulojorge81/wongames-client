import { GlobalStyles } from '../src/styles/global';
import type { Decorator } from '@storybook/nextjs-vite';

const withGlobalStyles: Decorator = (Story) => (
  <>
    <GlobalStyles />
    <Story />
  </>
);

export const decorators = [withGlobalStyles];
