
const initProduct = {
    product: { }
};

const ProductAdmin = (state = initProduct, action) => {
    switch (action.type) {
        case 'SET_STATE_PRODUCT':
            return {
                product: action.payload,
            };
        default:
            return new Error(action);
    }
};

export default ProductAdmin;
