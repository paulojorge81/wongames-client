import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Heading } from '.';

export default {
  title: 'atom/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    children: 'Most Populars',
    color: 'black',
  },
};
