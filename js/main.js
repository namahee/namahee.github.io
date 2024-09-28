// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBroBrb_V6AvU30fRVcu4lA0CjeDFjzA8",
  authDomain: "just-test-3a488.firebaseapp.com",
  projectId: "just-test-3a488",
  storageBucket: "just-test-3a488.appspot.com",
  messagingSenderId: "1073530844845",
  appId: "1:1073530844845:web:98cdc4783f521d30717824",
  measurementId: "G-0TLPF2LB49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var x = false; 
function decides() {
  if(!x){
    document.getElementById("audio").play();
    document.getElementById("image").src = "files/pause_image.png";
    document.getElementById("link").href = "css/style2.css";
    document.getElementById("playing").innerHTML = "Beach Weather - Sex, Drugs, Etc. is playing...";
    document.getElementById("br1").hidden = false;
    document.getElementById("br2").hidden = false;
    document.getElementById("my-things").style.paddingTop = 0;
    x = true;
  } else {
    document.getElementById("audio").pause();
    document.getElementById("image").src = "files/play_image.png"
    document.getElementById("link").href = "css/style.css";
    document.getElementById("playing").innerHTML = "";
    document.getElementById("br1").hidden = true;
    document.getElementById("br2").hidden = true;
    document.getElementById("my-things").style.paddingTop = "16px";
    x = false;
  }
}

var y = false;
function twoSides() {
  if (!y) {
    document.getElementById("two").innerHTML = "ódio";
    y = true;
  } else {
    document.getElementById("two").innerHTML = "love";
    document.getElementById("two").href = "/hate.html";
    wait(1000);
    document.getElementById("two").href = "";
  }
}
