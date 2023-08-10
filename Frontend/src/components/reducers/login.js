import { GET_ALLDATA_USER , LOG_OUT} from '../actions/login';


const initUser = {
    _user: {},
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

function LogOut (state = initUser , action)
{
    switch (action.type)
    {
        case LOG_OUT:
            return {
                ...state,
                _user : action.payload.remove(),
            }
    }
}

export default GetData;

