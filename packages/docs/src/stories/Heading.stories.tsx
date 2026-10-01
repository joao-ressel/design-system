import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@ressel-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,

  args: {
    children: "Titulo",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "Texto H1",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story: "Utilizando a propriedade `as` para alterar a tag do elemento que por padrão é `h2`",
      },
    },
  },
};
