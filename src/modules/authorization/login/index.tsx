'use client';
import LoginForm from '@/modules/authorization/login/form/form';
import {
  Container,
  Wrapper,
} from '@/modules/authorization/login/StyledComponents';
import DesktopBackground from '../../../assets/images/png/authorization/authorization-background.png';
import MobileBackground from '../../../assets/images/png/authorization/authorization-mobile-background.png';

const Login = () => {
  return (
    <Wrapper
      desktopBackground={DesktopBackground}
      mobileBackground={MobileBackground}
    >
      <Container>
        <LoginForm />
      </Container>
    </Wrapper>
  );
};

export default Login;
