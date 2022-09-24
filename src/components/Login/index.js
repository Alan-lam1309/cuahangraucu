import Button from '../Button';
import style from './Login.module.scss';

function Login() {
    return (
        <div className={style.wrapper}>
            <div className={style.inner}>
                <div className={style.left}>
                    <div>Veggo</div>
                    <div>Welcome back to Veggo</div>
                    <div>Login</div>
                    <input placeholder="Email" />
                    <input placeholder="Password" />
                    <div>
                        <input type="checkbox" />
                        <div>Remember me</div>
                        <Button text>Forget Password?</Button>
                    </div>
                    <Button rounded medium >Login</Button>
                    <div>
                        <div>Don't have an account?</div>
                        <Button >Get Started</Button>
                    </div>
                </div>
                <div className={style.right}></div>
            </div>
        </div>
    );
}

export default Login;
