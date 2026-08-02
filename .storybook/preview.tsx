import type { Preview } from '@storybook/react-vite'
import { useEffect } from 'react'
import '../src/index.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Light or dark brand theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: 'light',
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as 'light' | 'dark'
      useEffect(() => {
        const root = context.canvasElement.ownerDocument.documentElement
        root.classList.toggle('dark', theme === 'dark')
        root.style.colorScheme = theme
      }, [theme, context.canvasElement])
      return <Story />
    },
  ],

  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    options: {
      storySort: {
        order: [
          'Foundations',
          'Forms',
          'Overlays',
          'Feedback',
          'Layout',
        ],
      },
    },
  },
};

export default preview;
