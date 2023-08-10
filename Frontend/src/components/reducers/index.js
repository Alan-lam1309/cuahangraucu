import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './admin';
import login from './login';
// import header from './header';

export default configureStore({
    reducer: {
        admin: adminReducer,
        login: login,
        // header: header,
    },
});
