import * as userService from '~/api-services/userService';
import { createUserWithEmailAndPassword } from 'firebase/auth';


import { useForm } from 'react-hook-form';
import './newUser.css';
import { auth } from '~/firebase';

export default function NewUser() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => { 
        const result = await createUserWithEmailAndPassword(auth, data.email, data.password);
        await userService.update(result.user.uid,{...data, id: result.user.uid});
        alert("Đã thêm user có email: "+data.email);
    };

    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="newUserForm">
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith" {...register('name', { required: true })} />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="john@gmail.com"
                        {...register('email', {
                            pattern: /^[a-z][a-z0-9_/.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i,
                            required: true,
                        })}
                    />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" {...register('password', { minLength: 6, required: true })} />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input
                        type="text"
                        placeholder="+1 123 456 78"
                        {...register('phone', {
                            minLength: 10,
                            required: true,
                        })}
                    />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA" {...register('address', { required: true })} />
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active" {...register('status')}>
                        <option value="active">active</option>
                        <option value="disable">disable</option>
                    </select>
                </div>
                <div>
                    <button className="newUserButton">Create</button>
                    {Object.keys(errors).length !== 0 && (
                        <ul className="error">
                            {errors.name?.type === 'required' && <li>Name's required</li>}
                            {errors.email?.type === 'required' && <li>Email's required</li>}
                            {errors.email?.type === 'pattern' && <li>Email's invalid</li>}
                            {errors.password?.type === 'required' && <li>Password's required</li>}
                            {errors.password?.type === 'minLength' && <li>Password's too short</li>}
                            {errors.phone?.type === 'required' && <li>Phone's required</li>}
                            {errors.phone?.type === 'minLength' && <li>Phone's invalid</li>}
                            {errors.address?.type === 'required' && <li>Address's required</li>}
                        </ul>
                    )}
                </div>
            </form>
        </div>
    );
}
