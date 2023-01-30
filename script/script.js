const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('proxima');
const previous = document.getElementById('voltar');
const progressBar = document.getElementById('current-progress');
const progressContainer = document.getElementById('progress-container');

let isPlaying = false

const anotherLove = {
    songName : 'Another Love',
    artist : 'Tom Odell',
    file : 'Tom Odell - Another Love'
}

const takeOnMe = {
    songName : 'Take on me',
    artist : 'A-ha',
    file : 'a-ha - Take on me'
}

const circles = {
    songName : 'Circles',
    artist : 'Post Malone',
    file : 'Post Malone - Circles'
}

const playlist = [anotherLove, takeOnMe, circles];
let index = 0;


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


function initializeSong(){
    cover.src = `image/${playlist[index].file}.png`;
    song.src = `musicas/${playlist[index].file}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}

function previousSong(){
    if (index === 0){
        index = playlist.length - 1;
    } 
    else {
    index -= 1;
    }
    initializeSong();
    playSong();
}

function nextSong(){
    if (index === playlist.length - 1){
        index = 0;
    } 
    else {
    index += 1;
    }
    initializeSong();
    playSong();
}

function updateProgressBar(){
    song.currentTime
    song.duration
    const barWidth = (song.currentTime/song.duration)*100
    progressBar.style.setProperty('--progress', barWidth+'%')
}

function jumpTo(event){
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition/width)*song.duration;
    song.currentTime = jumpToTime;
}

initializeSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', updateProgressBar)
progressContainer.addEventListener('click', jumpTo);
