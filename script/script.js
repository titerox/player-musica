const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name')
const song = document.getElementById('audio')
const cover = document.getElementById('cover')
const play = document.getElementById('play')

let isPlaying = false

const 



function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play()
    isPlaying = true;
}

function pauseSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.pause()
    isPlaying = false;
}

function playPauseDecider(){
    if  (isPlaying === true){
        pauseSong();
    } else {
        playSong();
    }
}

play.addEventListener('click', playPauseDecider);
