import { ComponentProps, ComponentRef, forwardRef } from "react";
import { TextInputContainer, Prefix, Input } from "./style";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export const TextInput = forwardRef<ComponentRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} />
      </TextInputContainer>
    );
  },
);

TextInput.displayName = "TextInput";
