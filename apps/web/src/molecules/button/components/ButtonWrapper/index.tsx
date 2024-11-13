import { HStack } from 'theme/jsx';

import type { FC, ReactNode } from 'react';
import type { HTMLStyledProps } from 'theme/jsx';

interface ButtonWrapperProps extends HTMLStyledProps<'div'> {
  children: ReactNode;
}

const ButtonWrapper: FC<ButtonWrapperProps> = ({ children, ...props }) => (
  <HStack gap="16px" {...props}>
    {children}
  </HStack>
);

export default ButtonWrapper;
