import styles from './error.module.scss'
import Button from '~/components/Button';

function Error() {

    return ( 
        <div className={styles.wrapper}>
            < div className={styles.content}>
                <h1>404 Not Found Page</h1>
                <p>Maybe it's because you're not logged in</p>
                <p>Do you want to <Button to='/' small rounded >go to HomePage</Button> to login?</p>
            </ div>
        </div>
     );
}
 
export default Error;