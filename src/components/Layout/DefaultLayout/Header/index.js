import { useState, memo} from 'react';
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
    const [currentPage, setCurrentPage] = useState('home');

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
<<<<<<< Updated upstream
        setAccount(dataAcc.user.displayName);
    };

    const handleLogout = () => {
        setLogin(false);
=======
        setAccount(dataAcc.user.displayName)
>>>>>>> Stashed changes
    };

    const handleLogout =() => {
        setLogin(false);
    }

    return (
        <header className={style.wrapper}>
            {!hideLog && <Login onClick={handleHideLogin} toRegis={handleHideRegis} success={handleLogin} />}
            {!hideRegis && <Regis onClick={handleHideRegis} toLogin={handleHideLogin} />}
            <div className={style.inner}>
                <Button
                    to={'/'}
                    onClick={() => {
                        setCurrentPage('home');
                    }}
                >
                    <img className={style.logo} src={images.logo} alt="logo" />
                </Button>
                <div className={style.pages}>
                    {currentPage === 'home' ? (
                        <Button to={'/'} text small className={style.curPage}>
                            Home
                        </Button>
                    ) : (
                        <Button
                            to={'/'}
                            onClick={() => {
                                setCurrentPage('home');
                            }}
                            text
                            small
                        >
                            Home
                        </Button>
                    )}

                    {currentPage === 'about' ? (
                        <Button to={'/aboutUs'} text small className={style.curPage}>
                            About
                        </Button>
                    ) : (
                        <Button
                            to={'/aboutUs'}
                            onClick={() => {
                                setCurrentPage('about');
                            }}
                            text
                            small
                        >
                            About
                        </Button>
                    )}
                    {currentPage === 'vegetable' ? (
                        <Button to={'/vegetable'} text small className={style.curPage}>
                            Vegetable
                        </Button>
                    ) : (
                        <Button
                            to={'/vegetable'}
                            onClick={() => {
                                setCurrentPage('vegetable');
                            }}
                            text
                            small
                        >
                            Vegetable
                        </Button>
                    )}
                    {currentPage === 'contact' ? (
                        <Button to={'/contact'} text small className={style.curPage}>
                            Contact
                        </Button>
                    ) : (
                        <Button
                            to={'/contact'}
                            onClick={() => {
                                setCurrentPage('contact');
                            }}
                            text
                            small
                        >
                            Contact
                        </Button>
                    )}
                </div>
                {login ? (
                    <div className={style.action}>
                        <Button text mini>
                            Cart
                        </Button>
<<<<<<< Updated upstream
                        <Button className={style.login} text mini>
=======
                        <Button className={style.login} text mini onClick={handleHideLogin}>
>>>>>>> Stashed changes
                            {account}
                        </Button>
                        <Button text mini onClick={handleLogout}>
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

export default memo(Header);
