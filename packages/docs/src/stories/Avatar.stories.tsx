import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@ressel-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,

  args: {
    src: "https://github.com/joao-ressel.png",
    alt: "João Ressel",
  },

  argTypes: {
    src: {
      control: "text",
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};
