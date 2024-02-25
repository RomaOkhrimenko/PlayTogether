import type { Meta, StoryObj } from '@storybook/react';

import { AuthorizationBackgroundTemplate } from './index';

const meta: Meta<typeof AuthorizationBackgroundTemplate> = {
  component: AuthorizationBackgroundTemplate,
  title: 'Backgrounds/Authorization',
  parameters: {
    docs: {
      description: {
        component:
          'If the screen width is less than 994px, this component shows a mobile image',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BackgroundView: Story = {
  args: {},
};
