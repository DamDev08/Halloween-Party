window.addEventListener("load", function(){
  setTimeout(
    function open(event){
      document.querySelector(".modal").style.display = "block";
    },
    500
  )
});
document.querySelector("#btnClose").addEventListener("click", function(){
  document.querySelector(".modal").style.display = "none";
});
document.querySelector("#btnPlay","#btnClose").addEventListener("click", function(){
  document.querySelector(".modal").style.display = "none";
});
function playMusic(){
  let playIt = new Audio("Database/Musiques/Halloween/mp3/halloweenBgdMusic.mp3");
   playIt.play();
   playIt.volume=0.3;
   let playSound = new Audio("Database/Sons/Halloween/mp3/thunderSound.mp3");
   playSound.play();
   playSound.loop=true;
   playSound.volume=0.7;
}
function spookySound() {
  var spookySound = new Audio();
  spookySound.src = "Database/Sons/Halloween/mp3/horribleLaugh.mp3";
  spookySound.play();
}
function ghostSound() {
  var ghostSound = new Audio();
  ghostSound.src = "Database/Sons/Halloween/mp3/ghostSound.mp3";
  ghostSound.play();
}
function ghostTogglePopup() {
  let popup = document.getElementById("ghostPopupOverlay");
  popup.classList.toggle("open");
}
function spookyTogglePopup() {
  let popup = document.getElementById("spookyPopupOverlay");
  popup.classList.toggle("open");
}
