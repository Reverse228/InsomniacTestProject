import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LinkCustom } from "../components/LinkCustom/LinkCustom";

export default {
  title: "Example/Button",
  component: LinkCustom,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LinkCustom>;

const Template: ComponentStory<typeof LinkCustom> = (args) => (
  <LinkCustom {...args} />
);

export const Standart = Template.bind({});
Standart.args = {
  text: "DOWNLOAD PDF",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "DOWNLOAD PDF",
};
