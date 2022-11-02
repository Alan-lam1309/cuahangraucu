import style from '~/components/Layout/DefaultLayout/DefaultLayout.module.scss'

function DefaultLayout({ children }) {
    return (
        <div className={style.wrapper}>
            {children}
        </div>

        
    );
}

export default DefaultLayout;
