import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAc_8ud6kehCcL9Gh9AzKEsN-pH7EOD-zk",
    authDomain: "spectrum-sms23.firebaseapp.com",
    databaseURL: "https://spectrum-sms23.firebaseio.com",
    projectId: "spectrum-sms23",
    storageBucket: "spectrum-sms23.appspot.com",
    messagingSenderId: "877007380111",
    appId: "1:877007380111:web:2ca7c3188ad4d973395afa"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 
  console.log("database code")
                                               
  export { firebase, googleAuthProvider, database as default };


  


