import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBF33r89egE5cZiZobegSrbrGFB0LzfQ-E",
    authDomain: "marcomjobs-3ff55.firebaseapp.com",
    databaseURL: "https://marcomjobs-3ff55.firebaseio.com",
    projectId: "marcomjobs-3ff55",
    storageBucket: "marcomjobs-3ff55.appspot.com",
    messagingSenderId: "292997189013",
    appId: "1:292997189013:web:143810380800a0d31dba9c",
    measurementId: "G-RKH7V604WE"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
  