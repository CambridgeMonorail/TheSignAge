import { addons } from 'storybook/manager-api';
import tsaTheme from './tsaTheme';

addons.setConfig({
  theme: tsaTheme,
});
