import { ref, child, get, set, update } from 'firebase/database';
import { database } from '~/firebase';

const dbRef = ref(database);
//phải sửa dùng axios
export const getApi = async (option) => {
    const res = await get(child(dbRef, option));
    return res.val();
};

export const setApi = async (option, content = {}) => {
    set(child(dbRef, option), content);
};

export const updateApi = async (option, content = {}) => {
    update(child(dbRef, option), content);
};