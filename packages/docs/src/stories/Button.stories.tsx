import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "@ressel-ui/react";

export default {
  title: "Button",
  component: Button,

  args: {
    children: "Botão",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: "big",
  },
};
export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "small",
  },
};
