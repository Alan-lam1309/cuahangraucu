import * as request from '~/utils/request'

export const get = async (id='') => {
    const path =  'orders/'+id;
    const userApi = await request.getApi(path);
    return userApi;
};

export const set = async (option, content) => {
    const path = `orders/${option}`;
    request.setApi(path, content);
};

export const update = async (id='', content) => {
    const path = 'orders/'+id;
    request.updateApi(path, content);
};


