import type { Preview } from '@storybook/react';

import { createGlobalStyle } from 'styled-components';

/* TODO: update import for your custom theme configurations */

/* TODO: replace with your own global styles, or remove */
const GlobalStyles = createGlobalStyle`
    body {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
`;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
