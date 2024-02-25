import React, { ReactNode } from 'react';
import { Wrapper } from '@/components/templates/backgrounds/authorization/StyledComponents';
import DesktopBackground from '@/assets/images/png/authorization/authorization-background.png';
import MobileBackground from '@/assets/images/png/authorization/authorization-mobile-background.png';

const AuthorizationBackgroundTemplate = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <Wrapper
      desktopBackground={DesktopBackground}
      mobileBackground={MobileBackground}
    >
      {children}
    </Wrapper>
  );
};

export { AuthorizationBackgroundTemplate };
