import { GET_ALLDATA_USER} from '../actions/login';


const initUser = {
    _user: [],
};

function GetData(state = initUser, action) {
    switch (action.type) {
        case GET_ALLDATA_USER:
            return {
                ...state,
                _user: action.payload,
            };
        default:
            return state;
    }
}

export default GetData;
