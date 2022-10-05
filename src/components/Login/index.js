import Button from '../Button';
import images from '~/assets/images';
import style from './Login.module.scss';

function Login({onClick, toRegis}) {
    return (
        <div className={style.wrapper}>
            <div className={style.inner}>
                <Button text onClick={onClick} className={style.close}>icon </Button>
                <div className={style.header}>
                    <img src={images.v} alt="v" className={style.veo} />
                    <img src={images.e} alt="e" className={style.veo} />
                    <img src={images.g1} alt="g1" />
                    <img src={images.g2} alt="g2" />
                    <img src={images.o} alt="o" className={style.veo} />
                </div>
                <div className={style.welcomeveggo}>
                    <div className={style.welcome}>Welcome back to </div>
                    <div className={style.veggo}>Veggo</div>
                </div>
                <div className={style.login}>
                    <div>
                        <div className={style.title}>Login</div>
                        <p className={style.label}>EMAIL</p>
                        <input className={style.input} />
                        <p className={style.label}>PASSWORD</p>
                        <input className={style.input} />
                    </div>
                    <div className={style.action}>
                        <div className={style.checkRemember}>
                            <input type="checkbox" />
                            <div>Remember me</div>
                        </div>
                        <Button text className={style.forget}>Forget Password?</Button>
                    </div>
                    <Button className={style.submit} rounded medium>
                        Login
                    </Button>
                    <div className={style.regis}>
                        <div>Don't have an account?</div>
                        <Button onClick={toRegis} className={style.regisLink} text>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
