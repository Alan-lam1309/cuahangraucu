import { useForm } from 'react-hook-form';
import { auth, provider } from '~/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getdatauser } from '~/components/actions/login';
import Button from '../Button';
import images from '~/assets/images';
import * as userService from '~/api-services/userService';
import style from './Login.module.scss';
import { useState } from 'react';
// import { endAt } from 'firebase/database';

function Login({ onClick, toRegis, success }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const login = useSelector((state) => state.login);
    const dispatch = useDispatch();

    const [incorrect, setIncorrect] = useState(false);
    const [byGG, setbyGG] = useState(false);

    const handleGoogle = async () => {
        const resultGG = await signInWithPopup(auth, provider);
        const getAPI = await userService.get();
        if (!getAPI) {
            await userService.update(0, { email: resultGG.user.email, name: resultGG.user.displayName, id: resultGG.user.uid, status: 'active' });
        } else {
            const resultAPI = Object.values(getAPI);
            const keyAPI = Object.keys(getAPI);
            var same = 0;
            resultAPI.forEach((result) => {
                if (result.email === resultGG.user.email) {
                    same++;
                }
            });
            if (same === 0) {
                await userService.update(parseInt(keyAPI[keyAPI.length - 1]) + 1, {
                    email: resultGG.user.email,
                    name: resultGG.user.displayName,
                    id: resultGG.user.uid,
                    status: 'active',
                });
                alert(`Bạn đã đăng kí thành công với Email:${resultGG.user.email}`);
            } else {
                alert(`Bạn đã đăng nhập thành công với Email:${resultGG.user.email}`);
            }
        }
        success(resultGG);

        console.log(JSON.stringify(dispatch(getdatauser(resultGG.user.uid))));
    };
    const fetchAPI = async (data) => {
        // Authentication
        const result = await signInWithEmailAndPassword(auth, data.email, data.password);
        if (result) {
            alert(`Bạn đã đăng nhập thành công với Email: ${data.email}`);
            success(result);
            var uiduser = Object.keys(auth).map((key) => [auth[key]]);
            // console.log(txt[17]);
            console.log(JSON.stringify(dispatch(getdatauser(uiduser[17]))));
        } else {
            setIncorrect(true);
        }
        // Realtime
        // const getAPI = await userService.get();
        // if(!getAPI){
        //     alert('Chưa có tài khoản nào!!!!')
        // }else{
        //     const resultsAPI = Object.values(getAPI)
        //     for(var i=0; i<resultsAPI.length; i++){
        //         if(resultsAPI[i].email === data.email && resultsAPI[i].password === data.password){
        //             success(resultsAPI[i])
        //             break
        //         }else if(i == resultsAPI.length - 1){
        //             setIncorrect(true)
        //         }
        //     }
        //     resultsAPI.map((result)=>{

        //     })
        // }
    };
    const onSubmit = (data = '') => {
        if (byGG) {
            handleGoogle();
        } else {
            fetchAPI(data);
        }
    };

    return (
        <div className={style.wrapper}>
            <div className={style.inner}>
                <Button text onClick={onClick} className={style.close}>
                    <img src={images.close} alt="close" className={style.closeimage} />
                </Button>
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

                <form onSubmit={handleSubmit(onSubmit)} className={style.login}>
                    <div>
                        <div className={style.title}>Login</div>
                        <p className={style.label}>Email</p>
                        <input
                            className={style.input}
                            name="email"
                            type="email"
                            {...(!byGG &&
                                register('email', {
                                    required: true,
                                    pattern: /^[a-z][a-z0-9_/.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i,
                                }))}
                        />
                        <p className={style.label}>PASSWORD</p>
                        <input className={style.input} name="password" type="password" {...(!byGG && register('password', { required: true, minLength: 6 }))} />
                    </div>
                    {/* <div className={style.action}>
                        <div className={style.checkRemember}>
                            <input type="checkbox" />
                            <div>Remember me</div>
                        </div>
                    </div> */}
                    {Object.keys(errors).length !== 0 && (
                        <ul className={style.error}>
                            {errors.email?.type === 'required' && <li>Email's required</li>}
                            {errors.email?.type === 'pattern' && <li>Email's invalid</li>}
                            {errors.password?.type === 'required' && <li>Password's required</li>}
                            {errors.password?.type === 'minLength' && <li>Password's too short</li>}
                        </ul>
                    )}
                    {incorrect && <p>Email or password is incorrect</p>}
                    <Button
                        className={style.submit}
                        rounded
                        medium
                        onClick={() => {
                            setbyGG(false);
                        }}
                    >
                        Login
                    </Button>
                    <div className={style.Test_Or}>OR</div>
                    <Button
                        text
                        className={style.submit_google}
                        rounded
                        onClick={() => {
                            setbyGG(true);
                        }}
                    >
                        <div className={style.submit_google_text}>
                            <img src={images.google} alt="googleicon" className={style.googleiconlogin} />
                            Continue With Google
                        </div>
                    </Button>
                    <div className={style.regis}>
                        <div>Don't have an account?</div>
                        <Button onClick={toRegis} className={style.regisLink} text>
                            Get Started
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default memo(Login);
