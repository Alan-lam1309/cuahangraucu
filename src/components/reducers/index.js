import { combineReducers } from 'redux';
import Product from './product';
import UserAdmin from './userAdmin';
import login from './login';


const allReducers = combineReducers({
    _todoProduct: Product,
    UserAdmin,
    login,
});
export default allReducers;
