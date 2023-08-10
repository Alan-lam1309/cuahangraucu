import * as request from '~/utils/request';

export const get = async (id = '') => {
    const path = 'products/' + id;
    const userApi = await request.getApi(path);
    return userApi;
};

export const set = async (content, option = '') => {
    const path = `products/${option}`;
    await request.setApi(path, content);
};

export const update = async (id = '', content) => {
    const path = 'products/' + id;
    await request.updateApi(path, content);
};
