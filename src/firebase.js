// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDwXIfIJbQUXNspjJKrdjDHAyAhLEkOik8',
    authDomain: 'cuahangraucu-4a23a.firebaseapp.com',
    projectId: 'cuahangraucu-4a23a',
    storageBucket: 'cuahangraucu-4a23a.appspot.com',
    messagingSenderId: '998852168628',
    appId: '1:998852168628:web:be8d68fdcf10b06da280e1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
