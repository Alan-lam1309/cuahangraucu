import style from '~/components/Layout/DefaultLayout/DefaultLayout.module.scss';
import Footer from './Footer';
import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <div className={style.wrapper}>
            <Header />
                {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
