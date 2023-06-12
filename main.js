var x = false; 
function decides() {
  if(!x){
    document.getElementById("audio").play();
    document.getElementById("image").src = "./pause_image.png";
    document.getElementById("playing").innerHTML = "Yot Club - YKWIM is playing...";
    document.getElementById("br1").hidden = false;
    document.getElementById("br2").hidden = false;
    x = true;
  } else {
    document.getElementById("audio").pause();
    document.getElementById("image").src = "./play_image.png"
    document.getElementById("playing").innerHTML = "";
    document.getElementById("br1").hidden = true;
    document.getElementById("br2").hidden = true;
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
  }
}

var z = false;
function odSides() {
  if (!z) {
    document.getElementById("odio").innerHTML = "voltar";
    z = true;
  } else {
    document.getElementById("odio").innerHTML = "ódio";
    document.getElementById("odio").href = "/";
  }
}
