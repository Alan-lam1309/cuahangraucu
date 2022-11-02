<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import style from './Cart.module.scss'
>>>>>>> 25fcd37f5cb1e4c541b59e5aa18749d8370e2e81

import * as productService from '~/api-services/productService';
import Detail from '~/components/Detail';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import Button from '~/components/Button';
import style from './Cart.module.scss';

function Vegetable() {
    const [type, setType] = useState('All');
    const [results, setResult] = useState([]);
    const [detail, setDetail] = useState(false);
    const [dataDetail, setDataDetail] = useState();
    
    const fetchAPI = async () => {
        const getAPI = await productService.get();
        const result = Object.values(getAPI);
        if (type !== 'All') {
            const filter = result.filter((current) => current.type === type);
            setResult(filter);
        } else {
            setResult(result);
        }
    };

    useEffect(() => {
        fetchAPI();
    }, [type]);

    const handleDetail = (data) =>{
        setDetail(true);
        setDataDetail(data);
    }
    
    return (
        <div className={style.wrapper}>
<<<<<<< HEAD
            <h3 className={style.textWhatTheySay}>
                   Shopping Cart
                    <div className={style.line}></div>
            </h3>
            {/* {detail && <Detail onClick={()=>{setDetail(false)}} data={dataDetail} />} */}
=======
            <div className={style.inner}>
                <div className={style.left}>
                    Shopping Cart
                </div>
                <div className={style.right}>
>>>>>>> 25fcd37f5cb1e4c541b59e5aa18749d8370e2e81

            {/* <header className={style.header}>
                {type === 'All' ? (
                    <Button text className={style.selected}>
                        All type
                    </Button>
                ) : (
                    <Button text onClick={()=>{setType('All');}}>
                        All style
                    </Button>
                )}
                {type === 'Vegetable' ? (
                    <Button text className={style.selected}>
                        Vegetables
                    </Button>
                ) : (
                    <Button text onClick={()=>{setType('Vegetable');}}>
                        Vegetables
                    </Button>
                )}
                {type === 'Fruit' ? (
                    <Button text className={style.selected}>
                        Fruits
                    </Button>
                ) : (
                    <Button text onClick={()=>{setType('Fruit');}}>
                        Fruits
                    </Button>
                )}
                {type === 'Spice' ? (
                    <Button text className={style.selected}>
                        Spices
                    </Button>
                ) : (
                    <Button text onClick={()=>{setType('Spice');}}>
                        Spices
                    </Button>
                )}
            </header> */}
            
            <div className={style.products }>
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
            </div>

            <div className={style.footer}>
            <Footer />
            </div>
            
        </div>
    );
}

export default Vegetable;
