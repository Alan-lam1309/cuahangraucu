import style from './Cart.module.scss'

function Cart() {
    return ( 
        <div className={style.wrapper}>
            <div className={style.inner}>
                <div className={style.left}>
                    Shopping Cart
                </div>
                <div className={style.right}>

                </div>
            </div>
        </div>
     );
}

export default Cart;