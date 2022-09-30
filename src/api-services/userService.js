import * as request from '~/utils/request'

export const get = async (id='', option = 'users') => {
    const path = option + '/' + id;
    const userApi = await request.getApi(option);
    return Object.values(userApi);
};

// export const set = async (option, content) => {
//     const path = `users/${option}`;
//     request.setApi(path, content);
// };

export const update = async (option, content) => {
    const path = `users/${option}`;
    request.updateApi(path, content);
};


