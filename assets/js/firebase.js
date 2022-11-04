// This js is used for Firebase Init

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBUA9Wx5NqmowRmow3llXbEDqGY_LILetQ",
  authDomain: "golearn-6d65b.firebaseapp.com",
  databaseURL: "https://golearn-6d65b.firebaseio.com",
  projectId: "golearn-6d65b",
  storageBucket: "golearn-6d65b.appspot.com",
  messagingSenderId: "874978233939",
  appId: "1:874978233939:web:9d0f0347c6501ceac3c0a6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth.Auth.Persistence.LOCAL;

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });