import { useForm } from 'react-hook-form';
import { memo } from 'react';
import { auth, provider } from '~/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword , updateProfile} from 'firebase/auth';

// import * as userService from '~/api-services/userService';
import Button from '../Button';
import images from '~/assets/images';
import style from './Regis.module.scss';

function Regis({ onClick, toLogin , success}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetchAPi(data);
        toLogin();
    };

    const handleGoogle = async()=>{
        const resultGG = await signInWithPopup(auth, provider);
        success(resultGG)
    }

    const fetchAPi = async (data) => {
        // Authetication
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        await updateProfile(auth.currentUser, {
            displayName: data.name,
        });
        alert(`Chúc mừng bạn đăng ký thành công với Email:${data.email}`);

        // //Realtime
        // const getAPI = await userService.get();
        // if(!getAPI){
        //     await userService.update(0, {...data, id: 0, available: true});
        // }else{
        //     const resultAPI = Object.values(getAPI)
        //     const lastItem = resultAPI[resultAPI.length - 1].id;
        //     await userService.update(lastItem + 1, {...data, id: lastItem + 1, available: true});
        //     alert(`Chúc mừng bạn đăng ký thành công với Email:${data.email}`);
        // }
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
                    <div className={style.welcome}>Welcome to </div>
                    <div className={style.veggo}>Veggo</div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={style.login}>
                    <div>
                        <div className={style.title}>Register</div>
                        <p className={style.label}>NAME</p>
                        <input
                            className={style.input}
                            name="name" 
                            type="text"
                            {...register('name', {
                                required: true,
                            })}
                        />
                        <p className={style.label}>EMAIL</p>
                        <input
                            className={style.input}
                            name="email"
                            type="email"
                            {...register('email', {
                                required: true,
                                pattern: /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i,
                            })}
                        />
                        <p className={style.label}>PASSWORD</p>
                        <input
                            className={style.input}
                            name="password"
                            type="password"
                            {...register('password', { required: true, minLength: 6 })}
                        />
                    </div>
                    <div className={style.action}>
                        <div className={style.checkRemember}>
                            <input type="checkbox" />
                            <div>Remember me</div>
                        </div>
                    </div>
                    {Object.keys(errors).length !== 0 && (
                        <ul className={style.error}>
                            {errors.name?.type === 'required' && <li>Name's required</li>}
                            {errors.email?.type === 'required' && <li>Email's required</li>}
                            {errors.email?.type === 'pattern' && <li>Email's invalid</li>}
                            {errors.password?.type === 'required' && <li>Password's required</li>}
                            {errors.password?.type === 'minLength' && <li>Password's too short</li>}
                        </ul>
                    )}
                    <Button type="submit" className={style.submit} rounded medium>
                        Sign Up
                    </Button>

                    <div className={style.Test_Or}>OR</div>
                    <Button text className={style.submit_google} rounded  onClick={handleGoogle}>
                        <div className={style.submit_google_text}>
                            <img src={images.google} alt="googleicon" className={style.googleiconlogin}/>
                            Continue With Google
                        </div>

                    </Button>

                </form>
            </div>
        </div>
    );
}

export default memo(Regis);
