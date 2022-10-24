import { useState } from 'react';
import images from '~/assets/images';
import Button from '~/components/Button';
import Login from '~/components/Login';
import Regis from '~/components/Regis';
import style from './Header.module.scss';

function Header() {
    const [hideLog, setHideLog] = useState(true);
    const [hideRegis, setHideRegis] = useState(true);
    const [login, setLogin] = useState(false);
    const [account, setAccount] = useState({});


    const handleHideLogin = () => {
        if (hideLog) {
            setHideLog(false);
            setHideRegis(true);
        } else {
            setHideLog(true);
        }
    };

    const handleHideRegis = () => {
        if (hideRegis) {
            setHideRegis(false);
            setHideLog(true);
        } else {
            setHideRegis(true);
        }
    };

    const handleLogin = (dataAcc) => {
        setHideLog(true);
        setLogin(true);
        setAccount(dataAcc)
    };

    return (
        <header className={style.wrapper}>
            {!hideLog && <Login onClick={handleHideLogin} toRegis={handleHideRegis} success={handleLogin}/>}
            {!hideRegis && <Regis onClick={handleHideRegis} toLogin={handleHideLogin} />}
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
                {login ? (
                    <div className={style.action}>
                        <Button  text mini onClick={handleHideLogin}>
                            Giỏ hàng
                        </Button>
                        <Button className={style.login} text mini onClick={handleHideLogin}>
                            {account.name}
                        </Button>
                        <Button text mini onClick={handleHideRegis}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div className={style.action}>
                        <Button className={style.login} text mini onClick={handleHideLogin}>
                            Log in
                        </Button>
                        <Button text mini onClick={handleHideRegis}>
                            Register
                        </Button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
