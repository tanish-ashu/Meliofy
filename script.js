console.log("Welcome to sotify js");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');



let songs = [
  { songName: "Warriyo - Mortals (feat. Laura Brehm)  [NCS Release]", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
  { songName: "Cielo - Huma-Huma", filePath: "song/2.mp3", coverPath: "covers/1.jpg"},
  { songName: "DEAF KEV - Invinvible [NCS Release] - 320k", filePath: "song/3.mp3", coverPath: "covers/1.jpg"},
  { songName: "Different Heaven & EH!DE - My Heart [NCS Release] - 320k", filePath: "song/4.mp3", coverPath: "covers/1.jpg"},
  { songName: "Janji-Heroes-Tonight-feat", filePath: "song/5.mp3", coverPath: "covers/1.jpg"},
  { songName: "Salam-e-Ishq", filePath: "song/6.mp3", coverPath: "covers/1.jpg"},
  { songName: "Salam-e-Ishq", filePath: "song/7.mp3", coverPath: "covers/1.jpg"},
  { songName: "Salam-e-Ishq", filePath: "song/8.mp3", coverPath: "covers/1.jpg"},
  { songName: "Salam-e-Ishq", filePath: "song/9.mp3", coverPath: "covers/1.jpg"}
]

// audioElement.play();

// Handel paly/pause click
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
  console.log('timeupdate');
  // Update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
