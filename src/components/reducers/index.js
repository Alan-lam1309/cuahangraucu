import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './admin';
import login from './login';

export default configureStore({
    reducer: {
        admin: adminReducer,
        login: login
    },
});
