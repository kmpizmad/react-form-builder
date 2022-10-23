import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TemplateName as Component } from './TemplateName';

const meta: ComponentMeta<typeof Component> = {
  title: 'TemplateName',
  component: Component,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: ComponentStory<typeof Component> = args => <Component {...args} />;

export const TemplateName = Template.bind({});
TemplateName.args = {};
