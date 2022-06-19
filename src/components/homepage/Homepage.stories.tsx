import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HomePage } from './HomePage';

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  // curve: 100,
  // imageSize: 'small',
  // cardSize: 'medium',
  // src: 'https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-Clipart-Background.png'
};
