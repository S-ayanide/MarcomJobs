import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_DOMAIN_NAME.firebaseapp.com",
    databaseURL: "https://YOUR_FIREBASE_DATABSE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_BUCKET_ID",    
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
  
