import { useState } from 'react';
import images from '~/assets/images';
import Button from '~/components/Button';
import Login from '~/components/Login';
import style from './Header.module.scss';

function Header() {
    const [hideLog, setHideLog] = useState(true)

    const handleLogin = () => {
        setHideLog(false)
    }
    return (
        <header className={style.wrapper}>
            
            {!hideLog && <Login />}
            <div className={style.inner}>
                <Button to={'/'}>
                    <img className={style.logo} src={images.logo} alt="logo" />
                </Button>
                <div className={style.pages}>
                    <Button to={'/'} text small className={style.home}>
                        Home
                    </Button>
                    <Button to={'/aboutUs'} text small className={style.page}>
                        About
                    </Button>
                    <Button to={'/howtoshop'} text small className={style.page}>
                        How to shop
                    </Button>
                    <Button to={'/contact'} text small className={style.page}>
                        Contact
                    </Button>
                </div>
                <div className={style.action}>
                    <Button className={style.login} text mini onClick={handleLogin}>
                        Log in
                    </Button>
                    <Button text mini>Register</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
