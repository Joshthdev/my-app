import Link from 'next/link';

const ButtonLogin = ({isLoggedin, name, extraStyle}) => {
    if (isLoggedin) {
        return <Link href="/dashboard" className={`btn btn-primary ${extraStyle ? extraStyle : ''}`}>
            Welcome {name}
            </Link>;
    }};

export default ButtonLogin;