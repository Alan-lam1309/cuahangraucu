import { useState, memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
import Login from '~/components/Login';
import Regis from '~/components/Regis';
import style from './Header.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getdatauser } from '~/components/actions/login';

function Header() {
    const [hideLog, setHideLog] = useState(true);
    const [hideRegis, setHideRegis] = useState(true);

    var location = useLocation();
    var dispatchLogout = useDispatch();

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

    const handleLogout = () => {
        dispatchLogout(getdatauser(''));
        localStorage.setItem('user', '')
    };

    useEffect(() => {
        console.log(location.pathname.split('/'));
        var pages = document.querySelectorAll('li');
        pages.forEach((page) => {
            if (page.attributes.name) {
                if (page.attributes.name.value === `/${location.pathname.split('/')[1]}`) {
                    page.className = style.curPage;
                } else {
                    page.className = '';
                }
            }
        });
    });

    return (
        <header className={style.wrapper}>
            {!hideLog && <Login close={handleHideLogin} toRegis={handleHideRegis} />}
            {!hideRegis && <Regis onClick={handleHideRegis} toLogin={handleHideLogin} />}
            <div className={style.inner}>
                <Button to={'/'}>
                    <img className={style.logo} src={images.logo} alt="logo" />
                </Button>
                <ul className={style.pages}>
                    <li name="/">
                        <Button to={'/'} text small>
                            Home
                        </Button>
                    </li>
                    <li name="/aboutUs">
                        <Button to={'/aboutUs'} text small>
                            About
                        </Button>
                    </li>
                    <li name="/vegetable">
                        <Button to={'/vegetable'} text small>
                            Vegetable
                        </Button>
                    </li>
                    <li name="/contact">
                        <Button to={'/contact'} text small>
                            Contact
                        </Button>
                    </li>
                </ul>

                {localStorage.getItem('user') !== '' ? (
                    <ul className={style.action}>
                        <li name="/cart">
                            <Button to={'/cart'} text mini>
                                Cart
                            </Button>
                        </li>
                        <li name='/myaccount'>
                            <Button to='/myaccount/information' className={style.login} text mini>
                                {JSON.parse(localStorage.getItem('user')).name}
                            </Button>
                        </li>
                        <li>
                            <Button text mini onClick={handleLogout}>
                                Logout
                            </Button>
                        </li>
                    </ul>
                ) : (
                    <ul className={style.action}>
                        <li>
                            <Button className={style.login} text mini onClick={handleHideLogin}>
                                Log in
                            </Button>
                        </li>
                        <li>
                            <Button text mini onClick={handleHideRegis}>
                                Register
                            </Button>
                        </li>
                    </ul>
                )}
            </div>
        </header>
    );
}

export default memo(Header);
