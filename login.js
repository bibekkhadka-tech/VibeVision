// Import Firebase Authentication modules
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDu9t_uwkVOrj77di_jx4FUBdCZBGueNQ0",
    authDomain: "vibe-vision-198ca.firebaseapp.com",
    databaseURL: "https://vibe-vision-198ca-default-rtdb.firebaseio.com/",
    projectId: "vibe-vision-198ca",
    storageBucket: "vibe-vision-198ca.appspot.com",
    messagingSenderId: "583792353459",
    appId: "1:583792353459:web:xxxxxxxxxxxxxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login function
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successfully logged in
            const user = userCredential.user;
            localStorage.setItem('loggedIn', 'true');
            // Redirect to the admin page
            window.location.href = "admin.html";
        })
        .catch((error) => {
            // Error handling
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Login Failed: " + errorMessage);
        });
});
