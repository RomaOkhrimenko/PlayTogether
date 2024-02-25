import type { Meta, StoryObj } from '@storybook/react';

import { GenderSelect } from './index';

const meta: Meta<typeof GenderSelect> = {
  component: GenderSelect,
  title: 'Settings/SelectGender',
  argTypes: {
    value: {
      // @ts-ignore
      type: 'select',
      options: [1, 2, 3],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BackgroundView: Story = {
  args: {},
};
