import type { Meta, StoryObj } from '@storybook/react';

import { DatePicker } from './index';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'DatePicker',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DatePickerStory: Story = {
  args: {},
};
