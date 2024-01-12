'use client';
import RegistrationForm from '@/modules/authorization/registration/form/form';
import DesktopBackground from '../../../assets/images/png/authorization/authorization-background.png';
import MobileBackground from '../../../assets/images/png/authorization/authorization-mobile-background.png';
import {
  Container,
  Wrapper,
} from '@/modules/authorization/registration/StyledComponents';

const Registration = () => {
  return (
    <Wrapper
      desktopBackground={DesktopBackground}
      mobileBackground={MobileBackground}
    >
      <Container>
        <RegistrationForm />
      </Container>
    </Wrapper>
  );
};

export default Registration;
