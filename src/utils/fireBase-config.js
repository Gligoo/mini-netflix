import  { initializeApp } from 'firebase';

export const initFirebase = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyBq8dAYDxrpfejCxFqwPYkzix3NZXJwOWg",
        authDomain: "mini-netflix-ad2bd.firebaseapp.com",
        databaseURL: "https://mini-netflix-ad2bd.firebaseio.com",
        projectId: "mini-netflix-ad2bd",
        storageBucket: "mini-netflix-ad2bd.appspot.com",
        messagingSenderId: "422111720089",
        appId: "1:422111720089:web:4eea59d928c3ddc0befe08"
      };

      initializeApp(firebaseConfig);
}

