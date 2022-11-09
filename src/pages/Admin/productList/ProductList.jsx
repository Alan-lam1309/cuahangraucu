import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import * as productService from '~/api-services/productService';
import Button from '~/components/Button';
import { useDispatch } from 'react-redux';
import { setProduct } from '~/components/reducers/admin';

export default function ProductList() {
    const [data, setData] = useState([]);

    const dispatch = useDispatch();

    const fetchAPI = async () => {
        // Realtime
        const getAPI = await productService.get();
        const result = Object.values(getAPI);
        setData(result);
    };

    useEffect(() => {
        fetchAPI();
    },[]);

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
            width: 100,
        },
        {
            field: 'unit',
            headerName: 'Unit',
            width: 100,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 100,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Button
                            className="productListEdit"
                            onClick={() => {
                                dispatch(setProduct(params.row));
                            }}
                        >
                            <Button to='/products'>Edit</Button>
                        </Button>
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
