export const GET_ALLDATA_USER = 'GET_ALLDATA_USER';
export const LOG_OUT = 'LOG_OUT';


export const getdatauser = (userid) => {
    return {
      type: 'GET_ALLDATA_USER',
      payload : userid,
    };
  };

export const logout = () => (logout) => {
    return{
      type: LOG_OUT,
      payload : logout,
    };
};
