import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomBtn from '../pages/components/customBtn/CustomBtn';

export default {
  title: 'Example/Button',
  component: CustomBtn,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CustomBtn>;

const Template: ComponentStory<typeof CustomBtn> = (args) => <CustomBtn {...args} />;

export const Standart = Template.bind({});
Standart.args = {
  text: "DOWNLOAD PDF"
}; 

export const Secondary = Template.bind({});
Secondary.args = {
  text: "DOWNLOAD PDF"
};

