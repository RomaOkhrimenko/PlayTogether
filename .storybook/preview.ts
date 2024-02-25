import type { Preview } from '@storybook/react';
import '../src/assets/styles/index.scss';

import { createGlobalStyle } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Coda:wght@400;800&family=Montserrat:wght@300;400;500;600;700&display=swap');
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

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];

export default preview;
