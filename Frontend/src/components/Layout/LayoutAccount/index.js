import SidebarAcc from '~/components/Layout/DefaultLayout/sidebar/SidebarAccount';
import styles from './LayoutAccount.module.scss';
import Header from '../DefaultLayout/Header';

function LayoutAccount({ children }) {
    return (
        <div className={styles.layout_left}>
            <Header />
            <div className={styles.content}>
                <SidebarAcc />
            </div>
            <div className={styles.childContent}>{children}</div>
        </div>
    );
}

export default LayoutAccount;
