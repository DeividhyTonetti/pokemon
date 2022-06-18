import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TopCard } from './TopCard';
// import pockball from '../../assets/pockball.svg';

export default {
  title: 'Cards/TopCard',
  component: TopCard,
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
} as ComponentMeta<typeof TopCard>;

const Template: ComponentStory<typeof TopCard> = (args) => <TopCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  curve: 100,
  imageSize: 'small',
  cardSize: 'medium',
  src: ''
};


export const Larger = Template.bind({});
Larger.args = {
  imageSize: 'larger',
  cardSize: 'larger',
  src: '../../assets/pockball.svg'
};

export const Medium = Template.bind({});
Medium.args = {
  imageSize: 'medium',
  cardSize: 'medium',
  src: '../../assets/pockball.svg'
};

export const Small = Template.bind({});
Small.args = {
  imageSize: 'small',
  cardSize: 'small',
  src: '../../assets/pockball.svg'
};
