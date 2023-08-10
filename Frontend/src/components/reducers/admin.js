import { createSlice } from '@reduxjs/toolkit';


export const Admin = createSlice({
    name: 'user',
    initialState: {
        user: {},
        product: {},
    },
    reducers: {
        setUser: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.user = action.payload;
        },
        setProduct: (state, action) => {
            state.product = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUser, setProduct } = Admin.actions;

export default Admin.reducer;
