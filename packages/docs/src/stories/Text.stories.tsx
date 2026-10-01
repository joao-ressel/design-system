import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@ressel-ui/react";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children: "Texto de exemplo para o componente Text",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomSize: StoryObj<TextProps> = {
  args: {
    children: "Texto Strong",
    as: "strong",
  },
};
