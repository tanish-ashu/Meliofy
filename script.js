console.log("Welcome to sotify js");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/7.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
  { songName: "Stephen Sanchez – Until I Found You", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
  { songName: "Nobody (osanime.com)", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
  { songName: "Pearl – suzume no tojimari ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
  { songName: "Pritam – Tu Hi Meri Shab Hai", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
  { songName: "Rahat Fateh Ali Khan – Isq Risk", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
  { songName: "Sean Paul – No Lie", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
  { songName: "Lukas Graham   7 Years", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
  { songName: "Vele (From Student of the Year)", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
  { songName: "Kordhell – Killers From The Northside", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"}
]

songItems.forEach((element, i) =>{
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();
gif.style.opacity = 1;

// Handel paly/pause click
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    gif.style.opacity = 1;
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
  // Update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlace = () =>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e) => {
      makeAllPlace();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `songs/${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex-1].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
    })
  })

  document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
      songIndex = 1
    }else{
      songIndex -= 1;
    }
      audioElement.src = `songs/${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex-1].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
  })

    document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
      songIndex = 1
    }else{
      songIndex +=1;
    }
      audioElement.src = `songs/${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex-1].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
  })

  // using media query at css for making responsive.

