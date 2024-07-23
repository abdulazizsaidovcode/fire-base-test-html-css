
 let elLoginBtn = document.querySelector("#login-btn");

  // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDDzabdrXAOUw34CJVX-kI6vY4xNkSJ4KM",
   authDomain: "test-mt-5.firebaseapp.com",
   projectId: "test-mt-5",
   storageBucket: "test-mt-5.appspot.com",
   messagingSenderId: "199509530563",
   appId: "1:199509530563:web:579b108370b39f1fb94f76",
   measurementId: "G-PZELE8N353"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();


 elLoginBtn.addEventListener("click", () => {
    let elUserName = document.querySelector("#username").value;
    let elUserPassword= document.querySelector("#password").value;

    createUserWithEmailAndPassword(auth, elUserName, elUserPassword)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Ro'yhatdan o'tdin");
    window.location.href ="./dashboard.html"
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
    })
 })

