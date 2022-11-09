import { Link } from "react-router-dom";
import "./product.css";
import Chart from "~/components/chart/Chart"
import {productData} from "~/pages/Admin/dummyData.js"
import { Publish } from "@mui/icons-material";
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

export default function Product() {
    const productInfo = useSelector((state) => state.admin.product);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

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
                        <img src={productInfo.image} alt="" className="productInfoImg" />
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
                <form onSubmit={handleSubmit()} className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder={productInfo.name}  {...register('name')}/>
                        <label>Type</label>
                        <select name="inStock" id="idStock">
                            <option value="vegetable">Vegetable</option>
                            <option value="spice">Spice</option>
                            <option value="fruit">Fruit</option>
                        </select>
                        <label>Amount</label>
                        <input type="text" placeholder={productInfo.amount} />
                        <label>Unit</label>
                        <input type="text" placeholder={productInfo.unit} />
                        <label>Price</label>
                        <input type="text" placeholder={productInfo.price} />

                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={productInfo.image} alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: 'none' }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
