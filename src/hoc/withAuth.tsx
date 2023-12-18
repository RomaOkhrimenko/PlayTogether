import { NextComponentType } from 'next';
import LoginPage from '@/app/authorization/login/page';

// @ts-ignore
function withAuth<T extends IntrinsicAttributes>(
 Component: NextComponentType<T>,
) {
 const Auth = (props: T) => {
  // Login data added to props via redux-store (or use react context for example)

  // If user is not logged in, return login component
  if (true) {
   return <LoginPage>dasdasdasd</LoginPage>;
  }

  // If user is logged in, return original component
  return <Component {...props} />;
 };

 // Copy getInitial props so it will run as well
 if (Component.getInitialProps) {
  Auth.getInitialProps = Component.getInitialProps;
 }

 return Auth;
}

export default withAuth;
