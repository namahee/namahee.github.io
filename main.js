var x = false; 
function decides() {
  if(!x){
    document.getElementById("audio").play();
    document.getElementById("image").src = "./pause_image.png"
    x = true;
  } else {
    document.getElementById("audio").pause();
    document.getElementById("image").src = "./play_image.png"
    x = false;
  }
}