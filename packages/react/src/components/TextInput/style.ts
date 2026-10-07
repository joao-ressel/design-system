import { styled } from "../../styles";

export const TextInputContainer = styled("div", {
  backgroundColor: "$gray900",
  borderRadius: "$sm",
  padding: "$4 $3",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "center",

  variants: {
    size: {
      sm: {
        padding: "$2 $3",
      },
      md: {
        padding: "$3 $4",
      },
    },
  },

  "&:has(input:focus)": {
    borderColor: "$ignite300",
  },

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  defaultVariant: {
    size: "md",
  },
});

export const Prefix = styled("span", {
  color: "$gray400",
  fontSize: "$sm",
  fontWeight: "$regular",
  fontFamily: "$default",
});

export const Input = styled("input", {
  fontfamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  backgroundColor: "transparent",
  border: 0,
  width: "100%",

  "&:focus": {
    outline: 0,
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&::placeholder": {
    color: "$gray400",
  },
});
