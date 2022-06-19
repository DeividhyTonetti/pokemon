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
  src: '../../assets/pokball.svg'
};

export const Medium = Template.bind({});
Medium.args = {
  imageSize: 'medium',
  cardSize: 'medium',
  src: '../../assets/pokball.svg'
};

export const Small = Template.bind({});
Small.args = {
  imageSize: 'small',
  cardSize: 'small',
  src: '../../assets/pokball.svg'
};
