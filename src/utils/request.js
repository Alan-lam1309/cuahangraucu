import { ref, child, get, set, update } from 'firebase/database';
import { database } from '~/firebase';


const dbRef = ref(database);

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

// var firebase = require('firebase');
// var firebaseui = require('firebaseui');
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         {
//             provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//             requireDisplayName: false,
//         },
//     ],
//     // Other config options...
// });





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
