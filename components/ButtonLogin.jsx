import Link from 'next/link';

const ButtonLogin = ({isLoggedin, name}) => {
    if (isLoggedin) {
        return <Link href="/dashboard" className='btn btn-primary'>
            Welcome {name}
            </Link>;
    }};

export default ButtonLogin;