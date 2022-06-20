import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Cards/Header',
  component: Header,
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
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Mobile = Template.bind({});

Mobile.args = {
  curve: 100,
  imageSize: 'small',
  cardSize: 'medium',
  device: 'mobile',
  src: '../../assets/pokball.svg',
};


export const Desktop = Template.bind({});
Desktop.args = {
  imageSize: 'larger',
  cardSize: 'larger',
  device: 'desktop',
  src: '../../assets/pokball.svg'
};