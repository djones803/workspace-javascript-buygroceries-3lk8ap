// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
const firebaseConfig = {
  apiKey: "AIzaSyDuJOE2jzfHEBsSdaek-3x4YWZvW6iNlY8",
  authDomain: "list-f58b9.firebaseapp.com",
  databaseURL: "https://list-f58b9.firebaseio.com",
  projectId: "list-f58b9",
  storageBucket: "list-f58b9.appspot.com",
  messagingSenderId: "1013546592018",
  appId: "1:1013546592018:web:53484a31ba1934d060b5cb",
  measurementId: "G-M447MMM02R"
};
firebase.initializeApp(firebaseConfig);



// Save the list to database
$('#save').click(function(){
    console.log("I am in");
    firebase.firestore().collection('MyList').add({
      item: 'chips'
    });
});
