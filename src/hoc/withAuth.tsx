import type { ReactNode } from "react";
import { NextResponse } from "next/server";
import type { NextComponentType } from "next";

// Оголошуємо тип для пропсів компонента Component
type ComponentProps = {
    // Оголошуємо необхідні пропси, які приймає Component
    isLoggedIn: boolean;
    // Додайте інші необхідні пропси тут
};

function withAuth<T extends ComponentProps>(Component: NextComponentType<T>) {
    const Auth = (props: T) => {
        // Login data added to props via redux-store (або використовуйте react context, наприклад)
        const { isLoggedIn } = props;

        // If user is not logged in, return login component
        if (!isLoggedIn) {
            return NextResponse.redirect('http://localhost:3000/authorization/login');
        }

        // If user is logged in, return original component

        return <Component />
    };

    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Auth;
}

export default withAuth;