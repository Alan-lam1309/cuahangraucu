import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import {productRows} from "~/pages/Admin/dummyData"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as productService from '~/api-services/productService';

export default function ProductList() {
    const [data, setData] = useState([]);

    const fetchAPI = async () => {
        // Realtime
        const getAPI = await productService.get();
        const result = Object.values(getAPI);
        setData(result);
    };

    useEffect(() => {
        fetchAPI();
    });

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product',
            headerName: 'Product',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.image} alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: 'type', headerName: 'Type', width: 100 },
        {
            field: 'amount',
            headerName: 'Amount',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/products'}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            },
        },
    ];

    return (
        <div className="productList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} rowsPerPageOptions={[12]} pageSize={12} />
        </div>
    );
}
