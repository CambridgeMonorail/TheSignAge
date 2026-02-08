import 'common-tailwind/styles';

export const parameters = {
  options: {
    initialActive: 'docs',
    storySort: {
      order: [
        'Introduction',
        'Getting Started',
        'Best Practices',
        'Resources',
        'Signage',
        ['Primitives', 'Layouts', 'Blocks'],
        'Shadcnui',
        'Shadcnui Blocks',
        'Landing',
        'Shell',
      ],
    },
  },
  docs: {
    page: null,
  },
  backgrounds: {
    options: {
      light: { name: 'light', value: '#ffffff' },
      dark: { name: 'dark', value: '#000000' },
    },
  },
};

export const initialGlobals = {
  backgrounds: {
    value: 'light',
  },
};
