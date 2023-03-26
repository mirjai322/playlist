let darkMode = false;

function toggleMode(that){
  document.querySelectorAll('.song').forEach(function(song){
    song.classList.toggle('dark')
  })

  document.body.classList.toggle("dark");
  document.querySelector("nav").classList.toggle("dark");
  that.classList.toggle("dark")
  document.body.querySelectorAll(".bun").forEach(function(bun){
    bun.classList.toggle("dark");
  })

  darkMode = !darkMode;

  if(darkMode){
    that.innerHTML = "Light Mode"
  }else{
    that.innerHTML = "Dark Mode"
  }
}

function saveSettings(){
  localStorage.setItem("darkmode", darkMode);
}

function loadSettings(){
  if(localStorage.getItem("darkmode")==="true"){
    toggleMode(document.querySelector("button"))
  }
}

window.addEventListener("beforeunload", saveSettings)

document.addEventListener("DOMContentLoaded", loadSettings)