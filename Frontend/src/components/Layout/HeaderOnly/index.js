import Header from '../DefaultLayout/Header';
import style from './HeaderOnly.module.scss';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className={style.content}>{children}</div>
        </div>
    );
}

export default HeaderOnly;
