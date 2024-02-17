import { NextComponentType } from 'next';
import LoginPage from '@/app/authorization/login/page';

// @ts-ignore
function withAuth(Component: NextComponentType) {
  const Auth = (props: any) => {
    // Login data added to props via redux-store (or use React context for example)

    // If user is not logged in, return login component
    // @ts-ignore
    return <LoginPage>dasdasdasd</LoginPage>;

    // If user is logged in, return original component
    // eslint-disable-next-line no-unreachable
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}

export default withAuth;
