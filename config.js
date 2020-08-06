import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB2-v2SNLdZ0OgliqoXHSu9R8rZDfDe53c",
  authDomain: "wily2-aabce.firebaseapp.com",
  databaseURL: "https://wily2-aabce.firebaseio.com",
  projectId: "wily2-aabce",
  storageBucket: "wily2-aabce.appspot.com",
  messagingSenderId: "894832746974",
  appId: "1:894832746974:web:a1989aed57d3108496bd4f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
