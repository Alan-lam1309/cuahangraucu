import { Link } from 'react-router-dom';

import images from '~/assets/images';
import Button from '~/components/Button';
import style from './Header.module.scss';

function Header() {
    return (
        <header className={style.wrapper}>
            <div className={style.inner}>
                <Link to={'/'}>
                    <img className={style.logo} src={images.logo} alt="logo" />
                </Link>
                <div className={style.pages}>
                    <Link to={'/'} className={style.home}>
                        Home
                    </Link>
                    <Link to={'/aboutUs'} className={style.page}>
                        About
                    </Link>
                    <Link to={'/howtoshop'} className={style.page}>
                        How to shop
                    </Link>
                    <Link to={'/contact'} className={style.page}>
                        Contact
                    </Link>
                </div>
                <div className={style.action}>
                <Button className={style.login} rounded>Log in</Button>
                <Button text>Register</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
