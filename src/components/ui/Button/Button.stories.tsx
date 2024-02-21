import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};

export default meta;

type Story = StoryObj<typeof meta>;

// Описуємо різні стани кнопки
export const PrimaryTheme: Story = {
  args: {
    label: 'Primary Theme Button',
    theme: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    isDisabled: true,
  },
};

export const OutlineTheme: Story = {
  args: {
    label: 'Outline Theme Button',
    theme: 'outline',
  },
};
