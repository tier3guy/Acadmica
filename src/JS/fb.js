
document.getElementById("backbtn").style.display = "none";

const firebaseConfig = {
  apiKey: "AIzaSyAVOPDtUsYk9SrV7JWowuJ-whAVFKte4Fw",
  authDomain: "academica-26e7a.firebaseapp.com",
  databaseURL: "https://academica-26e7a-default-rtdb.firebaseio.com",
  projectId: "academica-26e7a",
  storageBucket: "academica-26e7a.appspot.com",
  messagingSenderId: "229839960039",
  appId: "1:229839960039:web:a088eb46b3b7920ca8af42"
};
firebase.initializeApp(firebaseConfig);

function writeData () {
  firebase.database().ref("Emails").set({
    email: document.getElementById("email-input").value
  });

  console.log('data-stored');
  document.getElementById("email-input").style.display = 'none';
  document.getElementById("submitbtn").style.display = 'none';
  document.getElementById("msg").style.display = 'none';
  document.getElementById("backbtn").style.display = "block";
  document.getElementById("bigmsg").innerHTML = "Thanks for subscribing us !";

  setTimeout(function() {
    window.location.href = "/public/index.html";
  }, 5000);
  
}