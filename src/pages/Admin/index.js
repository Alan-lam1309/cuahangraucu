import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { auth } from '~/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { redirect} from 'react-router-dom';

import Button from '~/components/Button';
import images from '~/assets/images';
import * as adminService from '~/api-services/adminService';
import style from './Admin.module.scss';

function Admin({logined}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [incorrect, setIncorrect] = useState(false);

    const checkAdmin = (id, api) => {
        const results = Object.values(api);
        for (var i = 0; i < results.length; i++) {
            if (results[i].id === id) {
                return true;
            }
        }
        return false;
    };

    const fetchAPI = async (data) => {
        // Realtime
        const getAPI = await adminService.get();
        if (!getAPI) {
            alert('Chưa có tài khoản nào!!!!');
            return;
        } 

        // Authentication
        const result = await signInWithEmailAndPassword(auth, data.email, data.password);
        if (result && checkAdmin(result.user.uid, getAPI)) {
            alert(`Bạn đã đăng nhập thành công với Email: ${data.email}`);
            redirect("/adminhome")
            logined()
        } else {
            setIncorrect(true);
        }
    };
    const onSubmit = (data = '') => {
        fetchAPI(data);
    };

    return (
        <div className={style.wrapper}>
            <div className={style.inner}>
                <div className={style.header}>
                    <img src={images.v} alt="v" className={style.veo} />
                    <img src={images.e} alt="e" className={style.veo} />
                    <img src={images.g1} alt="g1" />
                    <img src={images.g2} alt="g2" />
                    <img src={images.o} alt="o" className={style.veo} />
                </div>
                <div className={style.welcomeveggo}>
                    <div className={style.welcome}>Welcome to </div>
                    <div className={style.veggo}>Admin Page</div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={style.login}>
                    <div>
                        <div className={style.title}>Admin</div>
                        <p className={style.label}>Email</p>
                        <input
                            className={style.input}
                            name="email"
                            type="email"
                            {...register('email', {
                                required: true,
                            })}
                        />
                        <p className={style.label}>PASSWORD</p>
                        <input className={style.input} name="password" type="password" {...register('password', { required: true, minLength: 6 })} />
                    </div>
                    {Object.keys(errors).length !== 0 && (
                        <ul className={style.error}>
                            {errors.email?.type === 'required' && <li>Email's required</li>}
                            {errors.email?.type === 'pattern' && <li>Email's invalid</li>}
                            {errors.password?.type === 'required' && <li>Password's required</li>}
                            {errors.password?.type === 'minLength' && <li>Password's too short</li>}
                        </ul>
                    )}
                    {incorrect && <p>Email or password is incorrect</p>}
                    <Button className={style.submit} rounded medium>
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Admin;
