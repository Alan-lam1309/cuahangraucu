import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import style from '~/components/Layout/DefaultLayout/DefaultLayout.module.scss'


function DefaultLayout({ children }) {
    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.container}>
                <Sidebar />
                <div className={style.content}>{children}</div>
            </div>
            
            <footer className={style.footer}></footer>
            <Footer />

            
            
        </div>

    );
}

export default DefaultLayout;
