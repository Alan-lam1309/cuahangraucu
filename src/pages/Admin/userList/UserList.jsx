import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { useEffect, useState } from 'react';

import * as userService from '~/api-services/userService';
import User from '../user/User';
import Button from '~/components/Button';
import './userList.css';

export default function UserList() {
    const [data, setData] = useState([]);

    const fetchAPI = async () => {
        // Realtime
        const getAPI = await userService.get();
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
        { field: 'id', headerName: 'ID', width: 250 },
        {
            field: 'name',
            headerName: 'Name User',
            width: 200,
        },
        { field: 'email', headerName: 'Email', width: 300 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Button
                            className="userListEdit"
                            onClick={() => {
                                <User data={params.row} />;
                            }}
                        >
                            <Button to="/users">Edit</Button>
                        </Button>
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} rowsPerPageOptions={[12]} pageSize={12} />
        </div>
    );
}
