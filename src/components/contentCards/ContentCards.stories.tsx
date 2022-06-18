import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContentCards } from './ContentCards';

export default {
  title: 'Cards/ContentCards',
  component: ContentCards,
  argTypes: {
    backgroundColor: { control: 'color' },
    imageSize: {
      options: ['small', 'medium', 'larger'],
      control: { type: 'select' },
    },
    cardSize: {
      options: ['small', 'medium', 'larger'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof ContentCards>;

const Template: ComponentStory<typeof ContentCards> = (args) => <ContentCards {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  curve: 100,
  imageSize: 'small',
  cardSize: 'medium',
  src: 'https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-Clipart-Background.png'
};


export const Larger = Template.bind({});
Larger.args = {
  imageSize: 'larger',
  cardSize: 'larger',
  src: 'https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-Clipart-Background.png'
};

export const Medium = Template.bind({});
Medium.args = {
  imageSize: 'medium',
  cardSize: 'medium',
  src: 'https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-Clipart-Background.png'
};

export const Small = Template.bind({});
Small.args = {
  imageSize: 'small',
  cardSize: 'small',
  src: 'https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-Clipart-Background.png'
};
