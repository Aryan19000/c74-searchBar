import firebase from 'firebase' 
require('@firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyDxoUI4Yu4iPWby5Ly7li5XuIYN_owpeTk",
    authDomain: "wily-app-6b9d1.firebaseapp.com",
    projectId: "wily-app-6b9d1",
    storageBucket: "wily-app-6b9d1.appspot.com",
    messagingSenderId: "803860928593",
    appId: "1:803860928593:web:da0111007d333316ad8070"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
