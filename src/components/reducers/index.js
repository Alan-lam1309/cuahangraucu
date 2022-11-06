import { combineReducers } from 'redux';
import Product from './product';
import UserAdmin from './userAdmin';

const allReducers = combineReducers({
    _todoProduct: Product,
    UserAdmin,
});
export default allReducers;
