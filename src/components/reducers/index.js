<<<<<<< Updated upstream
import { combineReducers } from 'redux';
import Product from './product';
import UserAdmin from './userAdmin';
import login from './login';


const allReducers = combineReducers({
    _todoProduct: Product,
    UserAdmin,
    login,
=======
import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './admin';

export default configureStore({
    reducer: {
        admin: adminReducer,
    },
>>>>>>> Stashed changes
});
