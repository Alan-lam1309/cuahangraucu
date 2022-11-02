import { useForm } from 'react-hook-form';
import { memo } from 'react';

import Button from '../Button';
import images from '~/assets/images';
import style from './Detail.module.scss';
// import { endAt } from 'firebase/database';

function Detail({ onClick, data }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data = '') => {
        
    };

    return (
        <div className={style.wrapper}>
            <div className={style.inner}>
                <Button text onClick={onClick} className={style.close}>
                    <img src={images.close} alt="close" className={style.closeimage} />
                </Button>

                <form onSubmit={handleSubmit(onSubmit)} className={style.buy}>
                    <div>
                        <div className={style.welcomeveggo}>{data.type}</div>
                        <img src={data.image} alt="imaaage" className={style.image}></img>
                        <div className={style.name} >{data.name}</div>
                        <div className={style.price}>
                            {data.price}/{data.unit}
                        </div>
                        <p className={style.label}>Quantity</p>
                        <input type="number" name="number" min="1" max={data.amount} {...register('number', { required: true })} />
                    </div>
                    {Object.keys(errors).length !== 0 && (
                        <ul className={style.error}>
                            {errors.number?.type === 'required' && <li>Email's required</li>}
                        </ul>
                    )}
                    <Button
                        className={style.submit}
                        rounded
                        medium
                    >
                        ADD
                    </Button>
                    
                </form>
            </div>
        </div>
    );
}

export default memo(Detail);
