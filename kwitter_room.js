// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDGnFHNnWmPSxuITqiRUqPgzuW5neV3CE8",
    authDomain: "classtest-9db2e.firebaseapp.com",
    databaseURL: "https://classtest-9db2e-default-rtdb.firebaseio.com",
    projectId: "classtest-9db2e",
    storageBucket: "classtest-9db2e.appspot.com",
    messagingSenderId: "874268215516",
    appId: "1:874268215516:web:23c1ed018ab38259488c19",
    measurementId: "G-FN6XX2T6NR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML})
  Group_name = childKey;
  //Start code

  //End code
  }

  getData();