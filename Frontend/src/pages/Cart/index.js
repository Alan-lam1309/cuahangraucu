import { useEffect, useState } from 'react';
import * as cartService from '~/api-services/cartService';
import style from './Cart.module.scss';
import { useSelector } from 'react-redux';
import Button from '~/components/Button';
import images from '~/assets/images';
import * as odersService from '~/api-services/odersService';

function Cart() {
    const [laykq, setlaykq] = useState([]);

    const logined = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        fetchAPI();
    }, []);

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const fetchAPI = async () => {
        const getAPI = await cartService.get(logined.id);
        const result = Object.values(getAPI);
        setlaykq(result);
    };

    const handleIncrea = async (rs) => {
        if (rs.amount >= rs.quantity) {
            await cartService.update(`${logined.id}/${rs.id}`, { quantity: parseInt(rs.quantity) + 1 });
            fetchAPI();
        }
    };
    const handleDecrea = async (rs) => {
        if (rs.quantity > 1) {
            await cartService.update(`${logined.id}/${rs.id}`, { quantity: parseInt(rs.quantity) - 1 });
            fetchAPI();
        }
    };
    const handleChange = async (rs, e) => {
        if (e.target.value >= 1 && e.target.value <= parseInt(rs.amount)) {
            await cartService.update(`${logined.id}/${rs.id}`, { quantity: e.target.value });
            fetchAPI();
        }
        e.target.value = '';
    };

    const getCost = () => {
        let cost = 0;
        laykq.map((rs) => {
            cost += rs.price * rs.quantity;
        });
        return cost;
    };

    const handleOrder = async (products, costTotal) => {
        let now = new Date();
        let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
        let today = now.getDate() + '-' + (now.getMonth() + 1) + '-' + now.getFullYear();
        const quan = await odersService.get();
        odersService.update(Object.keys(quan).length, {
            'id': Object.keys(quan).length,
            'products': products,
            'cost': costTotal,
            'time': time,
            'day': today,
            'user': logined.id,
            'status': 'waiting'
        });
        cartService.set(logined.id,{});
        const getAPI = await cartService.get(logined.id);
        const result = Object.values(getAPI);
        setlaykq(result);
    };

    return (
        <div className={style.wrapper}>
            <h3 className={style.title}>
                Shopping Cart
                <div className={style.line}></div>
            </h3>
            <div className={style.contentCart}>
                <div className={style.products}>
                    {laykq.map((rs) => (
                        <div key={rs.id} className={style.product}>
                            <img src={rs.image} alt="product" className={style.imageProduct}></img>
                            <div className={style.contentProduct}>
                                <div className={style.titleProduct}>{rs.name}</div>
                                <div className={style.qpProduct}>
                                    <div className={style.contentProductleft}>
                                        <div className={style.stockProduct}>Stock:{rs.amount}</div>
                                        <div className={style.stockProduct}>Unit:{rs.unit}</div>
                                    </div>
                                    <div className={style.contentProductright}>
                                        <div className={style.quantityWrap}>
                                            <Button onClick={() => handleDecrea(rs)} square className={style.btn}>
                                                -
                                            </Button>
                                            <input
                                                type="text"
                                                inputMode="numberic"
                                                pattern="[0-9]*"
                                                className={style.quantityProduct}
                                                min="1"
                                                max={rs.amount}
                                                placeholder={rs.quantity}
                                                onBlur={(e) => {
                                                    handleChange(rs, e);
                                                }}
                                                required
                                            />
                                            <Button onClick={() => handleIncrea(rs)} square className={style.btn}>
                                                +
                                            </Button>
                                        </div>
                                        <div className={style.priceProduct}>
                                            <div>{VND.format(rs.price * rs.quantity)} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button text className={style.close}>
                                <img src={images.close} alt="close" className={style.closeImage} />
                            </Button>
                        </div>
                    ))}
                </div>
                <div className={style.payment}>
                    <div className={style.paymentContent}>
                        <div className={style.paymentTitle}>YOUR CART</div>
                        <div className={style.paymentCost}>Cost: {VND.format(getCost())}</div>
                        <div className={style.paymentDeliCharges}>Delivery charges: {VND.format(15000)}</div>
                        <div className={style.paymentTotal}>Total: {VND.format(getCost() + 15000)}</div>
                        <Button onClick={() => handleOrder(laykq, getCost() + 15000)}>Order</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;
