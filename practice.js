
const firebaseConfig = {
  apiKey: "AIzaSyDCl1FvcNGs_bbaH_EGLHbO3OpajDUtDAs",
  authDomain: "kwittery-3c29e.firebaseapp.com",
  databaseURL: "https://kwittery-3c29e-default-rtdb.firebaseio.com",
  projectId: "kwittery-3c29e",
  storageBucket: "kwittery-3c29e.appspot.com",
  messagingSenderId: "203279756745",
  appId: "1:203279756745:web:4795952ec16577b0448c18"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


