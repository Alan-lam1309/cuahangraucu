import { Link } from 'react-router-dom';

import style from './Header.module.scss';

function Header() {
    return (
        <div className={style.wrapper}>
            <Link to={'/'} className={style.logo}>Logo</Link>
            <Link to={'/vegetable'} className={style.veget}>Vegetable</Link>
            <Link to={'/aboutUs'} className={style.about}>About Us</Link>
            <Link to={'/contact'} className={style.contact}>Contact</Link>
            login
            resgis
        </div>
    );
}

export default Header;
