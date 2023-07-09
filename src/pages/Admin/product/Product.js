import { Link } from 'react-router-dom';
import './product.scss';
import Chart from '~/components/chart/Chart';
import { productData } from '~/pages/Admin/dummyData.js';
import { Publish } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '~/components/reducers/admin';
import * as productService from '~/api-services/productService';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';

export default function Product() {
    const productInfo = useSelector((state) => state.admin.product);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitSuccessful },
    } = useForm();

    const [image, setImage] = useState(productInfo.image);
    
    const onSubmit = async (data) => {
        console.log(data);
        data.id = productInfo.id;
        if (data.name === '') {
            data.name = productInfo.name;
        }
        data.image = image;
        if (data.type === '') {
            data.type = productInfo.type;
        }
        if (data.amount === '') {
            data.amount = productInfo.amount;
        }
        if (data.unit === '') {
            data.unit = productInfo.unit;
        }
        if (data.price === '') {
            data.price = productInfo.price;
        }
        dispatch(setProduct(data));
        await productService.update(productInfo.id, { ...data });
    };

    useEffect(() => {
        reset({
            image: '',
            name: '',
            type: '',
            amount: '',
            unit: '',
            price: '',
        });
        // eslint-disable-next-line
    }, [isSubmitSuccessful]);

    const handleChange = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            // The file's text will be printed here
            setImage(event.target.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={image} alt="" className="productInfoImg" />
                        <span className="productName">{productInfo.name}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{productInfo.id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">type:</span>
                            <span className="productInfoValue">{productInfo.type}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">amount:</span>
                            <span className="productInfoValue">{productInfo.amount}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">unit:</span>
                            <span className="productInfoValue">{productInfo.unit}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">price:</span>
                            <span className="productInfoValue">{productInfo.price}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form onSubmit={handleSubmit(onSubmit)} className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder={productInfo.name} {...register('name')} />
                        <label>Type</label>
                        <select name="inStock" id="idStock" {...register('type')}>
                            <option value="">Chọn loại: </option>
                            <option value="Vegetable">Vegetable</option>
                            <option value="Spice">Spice</option>
                            <option value="Fruit">Fruit</option>
                        </select>
                        <label>Amount</label>
                        <input type="text" placeholder={productInfo.amount} {...register('amount')} />
                        <label>Unit</label>
                        <input type="text" placeholder={productInfo.unit} {...register('unit')} />
                        <label>Price</label>
                        <input type="text" placeholder={productInfo.price} {...register('price')} />
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={image} alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display: 'none'}} {...register('image')} onChange={(e) => handleChange(e)} />
                        </div>
                        <Button className="productButton">Update</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
