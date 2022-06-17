import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContentCards } from './ContentCards';

export default {
  title: 'Cards/ContentCards',
  component: ContentCards,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ContentCards>;

const Template: ComponentStory<typeof ContentCards> = (args) => <ContentCards {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  curve: 100,
  src: 'https://i.imgur.com/2DhmtJ4.jpg'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  src: 'https://i.imgur.com/2DhmtJ4.jpg'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  src: 'https://i.imgur.com/2DhmtJ4.jpg'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  src: 'https://i.imgur.com/2DhmtJ4.jpg'
};
