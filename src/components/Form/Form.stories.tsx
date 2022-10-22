import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form as Component, FormProps as ComponentProps } from './Form';

const meta: Meta = {
  title: 'Form',
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

export const Form = Template.bind({});
Form.args = {};
