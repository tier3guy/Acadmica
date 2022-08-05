const firebaseConfig = {
  apiKey: "AIzaSyAJlzgCbSFAzGTK58-pW3m_24B5pS0n0rk",
  authDomain: "acadmica-27359.firebaseapp.com",
  projectId: "acadmica-27359",
  storageBucket: "acadmica-27359.appspot.com",
  messagingSenderId: "748753129576",
  appId: "1:748753129576:web:0047300a1183831326ebdd",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );

  promise.catch((e) => alert(e.message));
}

function signIn() {
  console.log("loging in");

  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));
}

function signOut() {
  auth.signOut();
  alert("SignOut Successfully from System");
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var email = user.email;
    alert("Active user " + email);
  } else {
    alert("No Active user Found");
  }
});
