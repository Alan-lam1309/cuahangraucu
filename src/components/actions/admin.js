// constants
export const SET_STATE_USER = 'SET_STATE_USER';

// actions
export function setStateUser(payload) {
    return {
        type: 'SET_STATE_USER',
        payload,
    };
}

export function setStateProduct(payload) {
    return {
        type: 'SET_STATE_PRODUCT',
        payload,
    };
}
