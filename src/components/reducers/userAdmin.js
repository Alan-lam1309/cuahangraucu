
const initProduct = {
    user: {},
};

const UserAdmin = (state = initProduct, action) => {
    switch (action.type) {
        case 'SET_STATE_USER':
            return {
                user: action.payload,
            };
        default:
            return new Error(action);
    }
};

export default UserAdmin;
