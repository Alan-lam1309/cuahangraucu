import {
    // CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Cached,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import * as userService from '~/api-services/userService';
import Button from '~/components/Button';
import { setUser } from '~/components/reducers/admin';
import './user.scss';
import { useEffect } from 'react';

export default function User() {
    const user = useSelector((state) => {
        return state.admin.user;
    });
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm();

    const onSubmit = async (data) => {
        data.id = user.id;
        if (data.name === '') {
            data.name = user.name;
        }
        if (data.email === '') {
            data.email = user.email;
        }
        if (data.status === '') {
            data.status = user.status;
        }
        if (data.phone === '') {
            data.phone = user.phone;
        }
        if (data.address === '') {
            data.address = user.address;
        }
        dispatch(setUser(data));
        await userService.update(user.id, { ...data });
    };

    useEffect(() => {
        reset({
            name: '',
            email: '',
            status: '',
            phone: '',
            address: '',
        });
    }, [isSubmitSuccessful, reset]);

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUsers">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.id}</span>
                        </div>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.name}</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.email}</span>
                        </div>
                        <div className="userShowInfo">
                            <Cached className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.status}</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.phone}</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.address}</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form onSubmit={handleSubmit(onSubmit)} className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder={user.name} className="userUpdateInput" {...register('name')} />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder={user.email}
                                    className="userUpdateInput"
                                    {...register('email', {
                                        pattern: /^[a-z][a-z0-9_/.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i,
                                    })}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Status</label>
                                <select name="active" id="active" {...register('status')}>
                                    <option value="">Choose status</option>
                                    <option value="active">Active</option>
                                    <option value="disable">Disable</option>
                                </select>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                    type="number"
                                    placeholder={user.phone}
                                    pattern= "0[0-9\s.-]{9,13}"
                                    className="userUpdateInput"
                                    {...register('phone', {
                                        minLength: 10,
                                    })}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder={user.address} className="userUpdateInput" {...register('address')} />
                            </div>
                        </div>
                        {Object.keys(errors).length !== 0 && (
                            <ul className="error">
                                {errors.email?.type === 'pattern' && <li>Email's invalid</li>}
                                {errors.phone?.type === 'minLength' && <li>Phone's invalid</li>}
                            </ul>
                        )}
                        <div className="userUpdateRight">
                            <Button className="userUpdateButton">Update</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
