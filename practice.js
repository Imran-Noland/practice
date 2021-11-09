
var firebaseConfig = {
 apiKey: "AIzaSyDkA_00imuj_hL7BFOyK13UaWxeZexUKfA",
 authDomain: "covid-19-qeqf.firebaseapp.com",
 databaseURL: "https://covid-19-qeqf-default-rtdb.firebaseio.com",
projectId: "covid-19-qeqf",
 storageBucket: "covid-19-qeqf.appspot.com",
 messagingSenderId: "1027309445611",
 appId: "1:1027309445611:web:a6bd19922336e6bb6939ae"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
user_name= document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose:"adding user"
});
}