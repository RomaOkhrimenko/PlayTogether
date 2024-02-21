import type { Preview } from '@storybook/react';
import '../src/assets/styles/index.scss';

import { createGlobalStyle } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Coda:wght@400;800&family=Montserrat:wght@300;400;500;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        font-size: 10px;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        background-color: #060d1e;
    }

    input {
        outline: none;
        border: none;
    }

    textarea {
        outline: none;
        border: none;
    }

    button {
        outline: none;
        border: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
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

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];

export default preview;
