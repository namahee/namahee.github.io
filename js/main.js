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
