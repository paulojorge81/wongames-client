import { ThemeProvider } from 'styled-components';
import type { Decorator } from '@storybook/nextjs-vite';
import { GlobalStyles } from '@/styles/global';
import theme from '@/styles/theme';

const withGlobalStyles: Decorator = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
);

export const decorators = [withGlobalStyles];
