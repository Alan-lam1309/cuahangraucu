import { combineReducers } from 'redux';
import { Product } from './product';

const allReducers = combineReducers({
    _todoProduct: Product,
});
export default allReducers;
