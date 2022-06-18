import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TopCard } from './TopCard';

export default {
  title: 'Cards/TopCard',
  component: TopCard,
  argTypes: {
    backgroundColor: { control: 'color' },
    imageSize: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    cardSize: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof TopCard>;

const Template: ComponentStory<typeof TopCard> = (args) => <TopCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  curve: 100,
  imageSize: 'small',
  cardSize: 'medium',
  src: 'https://i.imgur.com/2DhmtJ4.jpg'
};

export const Large = Template.bind({});
Large.args = {
  imageSize: 'large',
  cardSize: 'large',
  src: 'https://i.imgur.com/2DhmtJ4.jpg'
};

export const Medium = Template.bind({});
Medium.args = {
  imageSize: 'medium',
  cardSize: 'medium',
  src: 'https://i.imgur.com/2DhmtJ4.jpg'
};

export const Small = Template.bind({});
Small.args = {
  imageSize: 'small',
  cardSize: 'small',
  src: 'https://i.imgur.com/2DhmtJ4.jpg'
};
