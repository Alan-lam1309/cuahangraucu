import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import style from '~/components/Layout/DefaultLayout/DefaultLayout.module.scss'

function DefaultLayout({ children }) {
    return (
        <div className={style.wrapper}>
            {children}

        </div>

        
    );
}

export default DefaultLayout;
