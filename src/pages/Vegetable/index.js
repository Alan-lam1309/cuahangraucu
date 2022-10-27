import { useEffect, useState } from 'react';

import * as productService from '~/api-services/productService';
import Button from '~/components/Button';
import style from './Vegetable.module.scss';

function Vegetable() {
    const [type, setType] = useState('All');
    const [results, setResult] = useState([]);

    const handleType1 = () => {
        setType('All');
    };
    const handleType2 = () => {
        setType('Vegetable');
    };
    const handleType3 = () => {
        setType('Fruit');
    };
    const handleType4 = () => {
        setType('Spice');
    };

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

    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                {type === 'All' ? (
                    <Button text className={style.selected}>
                        All style
                    </Button>
                ) : (
                    <Button text onClick={handleType1}>
                        All style
                    </Button>
                )}
                {type === 'Vegetable' ? (
                    <Button text className={style.selected}>
                        Vegetables
                    </Button>
                ) : (
                    <Button text onClick={handleType2}>
                        Vegetables
                    </Button>
                )}
                {type === 'Fruit' ? (
                    <Button text className={style.selected}>
                        Fruits
                    </Button>
                ) : (
                    <Button text onClick={handleType3}>
                        Fruits
                    </Button>
                )}
                {type === 'Spice' ? (
                    <Button text className={style.selected}>
                        Spices
                    </Button>
                ) : (
                    <Button text onClick={handleType4}>
                        Spices
                    </Button>
                )}
            </header>
            <div className={style.products}>
                {results.map((result) => (
                    <div key={result.id} className={style.product}>
                        <img src={result.image} alt="image" className={style.image} />
                        <div className={style.name} >{result.name}</div>
                        <div className={style.price}>
                            {result.price}/{result.unit}
                        </div>
                        <Button small rounded >
                            BUY
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Vegetable;
