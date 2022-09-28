import { ref, child, get, DataSnapshot } from 'firebase/database';
import { database } from '~/firebase';

const dbRef = ref(database);

export const getaa = async (option) => {
    const res = await get(child(dbRef, option));
    return res;
};

// get(child(dbRef, `users`))
//     .then((snapshot) => {
//         if (snapshot.exists()) {
//             console.log(snapshot.val());
//         } else {
//             console.log('No data available');
//         }
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// // set(child(dbRef, `users/2`), {
// //     id: 2,
// //     name: 'aaa',
// // });
