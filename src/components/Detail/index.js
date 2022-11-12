import { useForm } from 'react-hook-form';
import { memo } from 'react';
import * as cartService from '~/api-services/cartService';
import * as userService from '~/api-services/userService';
import Button from '../Button';
import images from '~/assets/images';
import style from './Detail.module.scss';
import { database } from '~/firebase';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getdatauser } from '~/components/actions/login';
// import { endAt } from 'firebase/database';

function Detail({ onClick, data }) {
    const dataDetail = data;


    const [checklogin, setcheckLogin] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [quantity, setQuantity] = useState(1);

    const loginuid = useSelector((state) => state.login);
    var uiduser = Object.keys(loginuid).map((key) => [loginuid[key]]);
    console.log(uiduser);

    const fetchAPI = async () => {
        await cartService.update(uiduser, dataDetail);
    };


    const handleManyProducts = async () => {
        
        if(dataDetail.userid === id._user && dataDetail.id === data.id)
        {
            var newquantity = dataDetail.quantity + 1;
            var newprice  = dataDetail.price + data.price;
            await cartService.set(uiduser , dataDetail ,  dataDetail.quantity = newquantity , dataDetail.price = newprice); 
        }
        else
        {
            await cartService.update(uiduser, dataDetail );
        }
    }

    const handleLogin = () => {
        if(id._user)
        {
            setcheckLogin(true);
        }
        
    };
    const [id] = useState(loginuid);

    const onSubmit = () => {
        dataDetail.quantity = quantity;
        dataDetail.userid = id._user;
        fetchAPI();
        handleLogin();
        handleManyProducts();
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
                        <div className={style.name}>{data.name}</div>
                        <div className={style.price}>
                            {data.price}/{data.unit}
                        </div>
                        <div className={style.action}>
                            <div>
                                <p className={style.label}>Remaining</p>
                                <p>{data.amount}</p>
                            </div>
                            <div>
                                <p className={style.label}>Quantity</p>
                                <input
                                    value={quantity}
                                    type="number"
                                    name="number"
                                    min="1"
                                    max={data.amount}
                                    {...register('number', { required: true, onChange: (e) => setQuantity(Number(e.target.value)) })}
                                />
                            </div>
                        </div>
                    </div>
                    {Object.keys(errors).length !== 0 && <ul className={style.error}>{errors.number?.type === 'required' && <li>Quantity's required</li>}</ul>}
                   {checklogin 
                        ? (
                            <Button to="/cart" className={style.submit} rounded medium onClick={() => {onSubmit(data)}}>
                                Add To Cart1
                            </Button>) 
                        : (
                            <Button onClick={toLogin} className={style.submit} rounded medium >
                                Add To Cart
                            </Button>)
                        } 
                    
                </form>
            </div>
        </div>
    );
}

export default memo(Detail);
