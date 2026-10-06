import { ComponentProps } from "react";
import { styled } from "../styles";

export const TextArea = styled("textarea", {
  backgroundColor: "$gray900",
  borderRadius: "$sm",
  padding: "$4 $3",
  boxSizing: "border-box",
  border: "2px solid $gray900",

  fontfamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,

  "&:focus": {
    borderColor: "$ignite300",
    outline: 0,
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },

  "&:placeholder": {
    color: "$gray400",
  },
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
