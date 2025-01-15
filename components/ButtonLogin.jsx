import Link from 'next/link';

const ButtonLogin = ({isLoggedin, name, extraStyle}) => {
    if (isLoggedin) {
        return <Link href="/dashboard" className={`btn btn-primary ${extraStyle ? extraStyle : ''}`}>
            Welcome {name}
            </Link>;
    }};

    // 1. Create a /login page

    // 2. Create a form with email and password fields

    // 3. Make a POST request to /api/login

export default ButtonLogin;

