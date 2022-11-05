import { combineReducers } from 'redux';

import product from './product';
import login from './login';


const allReducers = combineReducers({
    login,
    product,
    // add more reducers here
});

export default allReducers;
