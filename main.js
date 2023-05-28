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
