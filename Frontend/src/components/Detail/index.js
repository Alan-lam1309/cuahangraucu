import { useForm } from 'react-hook-form';
import { memo } from 'react';
import * as cartService from '~/api-services/cartService';
import Button from '../Button';
import images from '~/assets/images';
import style from './Detail.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from '../Login';

function Detail({ onClick, data }) {
    const dataDetail = data;

    const [login, setLogin] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // const logined = useSelector((state) => state.login._user);
    const logined = localStorage.getItem('user');

    const onSubmit = async (data) => {
        if (logined === '') {
            setLogin(true);
        } else {
            console.log(JSON.parse(logined).id + '/' + dataDetail.id);
            if (data.number) {
                var getAPICart = await cartService.get(JSON.parse(logined).id);
                console.log(getAPICart);
                var quantityPrev = 0;
                if (getAPICart != null) {
                    var resultCart = Object.values(getAPICart);
                    resultCart.forEach((result) => {
                        if (result.id === dataDetail.id) {
                            quantityPrev = result.quantity;
                        }
                    });
                }
                await cartService.update(`${JSON.parse(logined).id}/${dataDetail.id}`, { ...dataDetail, quantity: parseInt(data.number) + parseInt(quantityPrev) });
                onClick();
            }
        }
    };

    return (
        <div className={style.wrapper}>
            {login && (
                <Login
                    close={() => {
                        setLogin(false);
                    }}
                />
            )}
            <div className={style.inner}>
                <Button text onClick={onClick} className={style.close}>
                    <img src={images.close} alt="close" className={style.closeimage} />
                </Button>

                <form onSubmit={handleSubmit(onSubmit)} className={style.buy}>
                    <div>
                        <div className={style.welcomeveggo}>{data.type}</div>
                        <img src={data.image} alt="imaaage" className={style.image}></img>
                        <div className={style.name}>{data.name}</div>
                        <div className={style.price}>
                            {data.price} / {data.unit}
                        </div>
                        <div className={style.action}>
                            <div>
                                <p className={style.label}>Remaining</p>
                                <p>{data.amount}</p>
                            </div>
                            <div>
                                <p className={style.label}>Quantity</p>
                                <input value={quantity} type="number" name="number" min="1" max={data.amount} required {...register('number', { required: true, onChange: (e) => setQuantity(Number(e.target.value)) })} />
                                {Object.keys(errors).length !== 0 && <ul className={style.error}>{errors.number?.type === 'min' && <li>Quantity's required</li>}</ul>}
                            </div>
                        </div>
                    </div>
                    <Button
                        className={style.submit}
                        rounded
                        medium
                        onClick={() => {
                            onSubmit(data);
                        }}>
                        Add To Cart
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default memo(Detail);
