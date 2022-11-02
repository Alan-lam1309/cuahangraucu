import Sidebar from '~/components/Layout/DefaultLayout/sidebar/Sidebar';
import style from './LayoutAdmin.module.scss';

function LayoutAdmin({ children }) {
    return (
        <div className={style.layout_left}>
            <Sidebar />
            <div className={style.content}>{children}</div>
        </div>
    );
}

export default LayoutAdmin;
