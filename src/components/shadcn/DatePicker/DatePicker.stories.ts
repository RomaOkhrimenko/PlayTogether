import type { Meta, StoryObj } from '@storybook/react';

import { DatePicker } from './index';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'DatePicker',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DatePickerWithButtons: Story = {
  args: {
    captionLayout: 'buttons',
  },
};

export const DatePickerWithDropdown: Story = {
  args: {
    captionLayout: 'dropdown',
    fromYear: 1900,
    toYear: 2020,
  },
};
