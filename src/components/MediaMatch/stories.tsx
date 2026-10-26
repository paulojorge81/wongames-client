import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MediaMatch } from '.';

export default {
  title: 'atom/MediaMatch',
  component: MediaMatch,
} as Meta;

export const Desktop: StoryObj = {
  render: (args) => <MediaMatch {...args}>Only on Desktop</MediaMatch>,
  args: {
    greaterThan: 'medium',
  },
};

export const Mobile: StoryObj = {
  render: (args) => <MediaMatch {...args}>Only on Mobile</MediaMatch>,
  args: {
    lessThan: 'medium',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
