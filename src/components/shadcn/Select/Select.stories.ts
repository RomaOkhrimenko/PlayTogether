import type { Meta, StoryObj } from '@storybook/react';

import { SelectDemo } from './SelectDemo';

const meta: Meta<typeof SelectDemo> = {
  component: SelectDemo,
  title: 'Shadcn/Select',
  parameters: {
    docs: {
      description: {
        component: `
        Detailed documentation you can find here: https://ui.shadcn.com/docs/components/select
      `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Select: Story = {
  args: {},
};
