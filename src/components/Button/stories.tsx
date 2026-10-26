import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { Button } from '.';

export default {
  title: 'atom/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    children: 'By now',
  },
};

export const withIcon: StoryObj = {
  args: {
    children: 'By now',
    size: 'small',
    icon: <AddShoppingCart />,
  },
};
