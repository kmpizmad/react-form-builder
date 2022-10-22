import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TemplateName as Component, TemplateNameProps as ComponentProps } from './TemplateName';

const meta: Meta = {
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

const Template: Story<ComponentProps> = args => <Component {...args} />;

export const TemplateName = Template.bind({});
TemplateName.args = {};
