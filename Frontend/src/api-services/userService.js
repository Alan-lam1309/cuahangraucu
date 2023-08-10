import * as request from '~/utils/request';

export const get = async (id = '') => {
    const path = 'users/' + id;
    const userApi = await request.getApi(path);
    return userApi;
};

export const set = async (content, option = '') => {
    const path = `users/${option}`;
    request.setApi(path, content);
};

export const update = async (id = '', content) => {
    const path = 'users/' + id;
    request.updateApi(path, content);
};
