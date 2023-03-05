
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDq8hrvdZ1IxkdcW3DlGp6zRQ0KV3ltIvk",
      authDomain: "kwitter-4a290.firebaseapp.com",
      databaseURL: "https://kwitter-4a290-default-rtdb.firebaseio.com",
      projectId: "kwitter-4a290",
      storageBucket: "kwitter-4a290.appspot.com",
      messagingSenderId: "249527667527",
      appId: "1:249527667527:web:5d4d69a695440972b9da62"
    };
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!";
function addRoom(){
      room_name=document.getElementById("addroom").value;
      firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}





    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
    console.log("Room Name- "+Room_names);
    row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
          //End code
          });});}
    getData();
    function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location="kwitter_page.html";
    }
    
    
    //End code
    


function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");

}
