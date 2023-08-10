import { useForm } from 'react-hook-form';
import { Publish } from '@mui/icons-material';
import * as productService from '~/api-services/productService';

import './newProduct.css';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';

export default function NewProduct() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm();
    const [image, setImage] = useState('');

    const findID = function (datas) {
        var i = -1;
        for (var j = 0; j < datas.length; j++) {
            if (datas[j].id !== j) {
                i = j;
                break;
            }
        }
        if (i > 0) {
            return i;
        }
        return datas.length;
    };

    const onSubmit = async (data) => {
        data.image = image;
        setImage('');
        const getAPI = Object.values(await productService.get());
        const resultID = findID(getAPI);
        const temp = productService.update(resultID, { ...data, id: resultID, image: image });
    };

    // useEffect(() => {
    //     reset({
    //         image: '',
    //         name: '',
    //         type: '',
    //         amount: '',
    //         unit: '',
    //         price: '',
    //     });
    //     // eslint-disable-next-line
    // }, [isSubmitSuccessful]);

    const onChange = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            // The file's text will be printed here
            setImage(event.target.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="addProductForm">
                <div className="addProductItem">
                    {image !== '' && <img src={image} alt="imageProduct" className="productUploadImg" />}
                    <label for="file">
                        <Publish />
                    </label>
                    <input type="file" id="file" style={{ display: 'none' }} accept=".png, .jpg" {...register('image')} onChange={(e) => onChange(e)} />
                </div>
                <div className="addProductItem">
                    <label>Product Name</label>
                    <input type="text" placeholder="Carrot" {...register('name', { required: true })} />
                </div>
                <div className="addProductItem">
                    <label>Type</label>
                    <select name="inStock" id="idStock" {...register('type', { minLength: 5, required: true })}>
                        <option value="">Chọn loại: </option>
                        <option value="Vegetable">Vegetable</option>
                        <option value="Spice">Spice</option>
                        <option value="Fruit">Fruit</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>Amount</label>
                    <input type="number" min="1" placeholder="123" {...register('amount', { required: true })} />
                </div>
                <div className="addProductItem">
                    <label>Unit</label>
                    <input type="text" placeholder="Kilogram" {...register('unit', { required: true })} />
                </div>
                <div className="addProductItem">
                    <label>Price</label>
                    <input type="number" min="1000" step="1000" placeholder="24000" {...register('price', { minLength: 4, required: true })} />
                </div>
                <Button className="addProductButton">Create</Button>
                {Object.keys(errors).length !== 0 && (
                    <ul className="error">
                        {errors.name?.type === 'required' && <li>Name's required</li>}
                        {errors.type?.type === 'required' && <li>Type's required</li>}
                        {errors.amount?.type === 'required' && <li>Amount's required</li>}
                        {errors.unit?.type === 'required' && <li>Unit's required</li>}
                        {errors.price?.type === 'required' && <li>Price's required</li>}
                        {errors.price?.type === 'minLength' && <li>Price's too short</li>}
                    </ul>
                )}
            </form>
        </div>
    );
}
