
import { useEffect, useState } from 'react';
import * as productService from '~/api-services/productService';
import Detail from '~/components/Detail';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import Button from '~/components/Button';
import style from './Cart.module.scss';

function Cart({ onClick, data }) {
        const dataDetail = data
        console.log(dataDetail);
    
    
    return (
        <div className={style.wrapper}>
            <div className={style.inner}>
                <div className={style.left}>
                    Shopping Cart
                </div>
                <div className={style.right}>
            </div>
          
            
            {/* <div className={style.products }>
                {results.map((result) => (
                    <div key={result.id} className={style.product}>
                        <img src={result.image} alt="imaaage" className={style.image}></img>
                        <div className={style.name} >{result.name}</div>
                        <div className={style.price}>
                            {result.price}/{result.unit}
                        </div>
                        <Button className={style.btnAddtoCart} medium rounded onClick={() => {handleDetail(result)}} >
                            Add To Cart
                        </Button>
                    </div>
                ))}
            </div> */}

            <div className={style.footer}>
            <Footer />
            </div>
            
        </div>
        </div>
    );
}

export default Cart;
