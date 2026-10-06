import { AvatarImageProps } from "@radix-ui/react-avatar";
import { ComponentProps } from "react";
import { AvatarContainer, AvatarImage, AvatarFallback } from "./style";
import { UserIcon } from "@phosphor-icons/react/dist/icons/User";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarImageProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <UserIcon />
      </AvatarFallback>
    </AvatarContainer>
  );
}

Avatar.displayName = "Avatar";
