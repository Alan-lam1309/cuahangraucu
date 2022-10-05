import Button from '../Button';
import style from './Login.module.scss';

function Login() {
    return (
        <div className={style.wrapper}>
            <div className={style.inner}>
                <div className={style.left}>
                    <div className={style.header}>
                        <div className={style.title}>Veggo</div>
                        <div className={style.close}>icon </div>
                    </div>
                    <div className={style.welcomeveggo}>
                        <div className={style.welcome}>Welcome back to </div>
                        <div className={style.veggo}>Veggo</div>
                    </div>
                    <div className={style.login}>Login</div>
                    <input className={style.inputEmail} placeholder="Email" />
                    <input className={style.inputPass} placeholder="Password" />
                    <div className={style.action}>
                        <input className={style.checkRemember} type="checkbox" />
                        <div>Remember me</div>
                        <Button text>Forget Password?</Button>
                    </div>
                    <Button className={style.submit} rounded medium >Login</Button>
                    <div>
                        <div>Don't have an account?</div>
                        <Button className={style.regis} >Get Started</Button>
                    </div>
                </div>
                <div className={style.right}></div>
            </div>
        </div>
    );
}

export default Login;
