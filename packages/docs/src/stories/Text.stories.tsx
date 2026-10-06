import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@ressel-ui/react";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children: "Texto de exemplo para o componente Text",
    size: "md",
  },

  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: { type: "inline-radio" },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomSize: StoryObj<TextProps> = {
  args: {
    children: "Texto Strong",
    as: "strong",
  },
};
