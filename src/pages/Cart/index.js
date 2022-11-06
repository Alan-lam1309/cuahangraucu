import { useEffect, useState, useForm } from 'react';
import * as cartService from '~/api-services/cartService';
import Detail from '~/components/Detail';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import images from '~/assets/images';
import Button from '~/components/Button';
import style from './Cart.module.scss';
import { async } from '@firebase/util';
import { useSelector, useDispatch } from 'react-redux';


function Cart() {
    const [laykq, setlaykq] = useState([]);

    const type = ' ';

    const fetchAPI = async () => {
        const getAPI = await cartService.get();
        const laykq = Object.values(getAPI);
        setlaykq(laykq);
    };

    const loginuid = useSelector((state) => state.login);
    var uiduser = Object.keys(loginuid).map((key) => [loginuid[key]]);

    // const handleID = async () => {
    //     var same = 0;
    //     if(laykq)
    //     {
    //         laykq.map((result) => {
    //             if (result.userid === uiduser[0]) 
    //             {
    //                 fetchAPI();
    //             }

    //         })

    //     };
        

    // }
    useEffect(() => 
    {
        fetchAPI();
        // handleID();
    });

    return (
        <div className={style.products}>
            {laykq.map((rs) => (
                <div key={rs.id} className={style.product}>
                    <img src={rs.image} alt="imaaage" className={style.image}></img>
                    <div className={style.name}>{rs.name}</div>
                    <div className={style.name}>{rs.price}</div>
                    <div className={style.name}>{rs.unit}</div>
                    <div className={style.name}>{rs.quantity}</div>
                </div>
            ))}
            <Button text  className={style.close}>
               CHECK OUT
            </Button>
        </div>
    )
};
export default Cart;
