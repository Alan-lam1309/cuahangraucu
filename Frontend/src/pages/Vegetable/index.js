import { createContext, useEffect, useState } from 'react';

import * as productService from '~/api-services/productService';
import Detail from '~/components/Detail';
import Button from '~/components/Button';
import style from './Vegetable.module.scss';

function Vegetable() {
    const [type, setType] = useState('All');
    const [results, setResult] = useState([]);
    const [detail, setDetail] = useState(false);
    const [dataDetail, setDataDetail] = useState({});
    const create = createContext();
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
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    useEffect(() => {
        fetchAPI();
        // eslint-disable-next-line
    }, [type]);

    const handleDetail = (data) => {
        setDetail(true);
        setDataDetail(data);
    };

    useEffect(() => {
        const filters = document.querySelectorAll('div');
        filters.forEach((filter) => {
            if (filter.attributes.name) {
                if (filter.attributes.name.value === type) {
                    filter.className = style.selected;
                } else {
                    filter.className = '';
                }
            }
        });
    });

    return (
        <div className={style.wrapper}>
            {detail && (
                <Detail
                    onClick={() => {
                        console.log('close detail');
                        setDetail(false);
                    }}
                    data={dataDetail}
                />
            )}
            <header className={style.header}>
                <Button
                    text
                    onClick={() => {
                        setType('All');
                    }}>
                    <div name="All">All style </div>
                </Button>

                <Button
                    text
                    onClick={() => {
                        setType('Vegetable');
                    }}>
                    <div name="Vegetable">Vegetables</div>
                </Button>

                <Button
                    text
                    onClick={() => {
                        setType('Fruit');
                    }}>
                    <div name="Fruit">Fruits</div>
                </Button>

                <Button
                    text
                    onClick={() => {
                        setType('Spice');
                    }}>
                    <div name="Spice">Spices</div>
                </Button>
            </header>

            <div className={style.products}>
                {results.map((result) => (
                    <div key={result.id} className={style.product}>
                        <img src={result.image} alt="imaaage" className={style.image}></img>
                        <div className={style.name}>{result.name}</div>
                        <div className={style.price}>
                            {VND.format(result.price)}/{result.unit}
                        </div>
                        <Button
                            className={style.btnAddtoCart}
                            medium
                            rounded
                            onClick={() => {
                                handleDetail(result);
                            }}>
                            Add To Cart
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Vegetable;
