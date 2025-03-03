
const audio = document.querySelector("audio");
const title = document.querySelector('h1');
const selectedSong =document.getElementById("listacanciones")
const audioPlayer = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause-btn");
const progressBar = document.getElementById("progress-bar");
const volumeControl = document.getElementById("volume-control");
const currentTimeDisplay = document.getElementById("current-time");
const durationDisplay = document.getElementById("duration");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const songList = document.getElementById("canciones");


    const canciones = [
       
        "music/Beéle, Ovy On The Drums - Mi Refe.mp3",
        "music/Coldplay - A Sky Full Of Stars.mp3",
        "music/Coldplay - Yellow.mp3",
        "music/Lady Gaga, Bruno Mars - Die With A Smile.mp3",
        "music/Pink - Just Like A Pill.mp3",                 
     ];


let currentSongIndex = 0;


loadAudio(canciones[currentSongIndex])

function loadAudio(canciones) {
    // Actualiza el título de la canción
    title.textContent = canciones.split("/").pop().replace(".mp3", "").replace(/_/g, " ");
    audio.src = canciones;
    audioPlayer.load(); }

function loadAudio(canciones){
title.textContent = canciones;
audio.src = '(canciones).mp3'

}
songList.addEventListener("change", (e) => {
    const selectedSong = e.target.value;  
    const currentSongIndex = canciones.indexOf(selectedSong);  

    if (currentSongIndex !== -1) {
        loadAudio(canciones[currentSongIndex]);
    } else {
        console.error("La canción seleccionada no está en la lista.");
    }
});

function updateSongTitle(canciones) {
    const title = document.getElementById("h1");  
    const songList = canciones.split("/").pop().replace(".mp3", "").replace(/_/g, " "); 
    title.textContent = canciones;  
}

// Función para formatear el tiempo
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" + secs : secs}`;   
}

// Actualizar el progreso de la canción
audioPlayer.addEventListener("timeupdate", () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
    currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
});

// Actualizar la duración al cargar la canción
audioPlayer.addEventListener("loadeddata", () => {
    durationDisplay.textContent = formatTime(audioPlayer.duration);
});


progressBar.addEventListener("input", (e) => {
    const seekTime = (e.target.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});


volumeControl.addEventListener("input", (e) => {
    audioPlayer.volume = e.target.value / 100;
});

// Reproducir o pausar la canción
playPauseBtn.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "Play";
    }
});

// Cambiar a la canción anterior

prevBtn.addEventListener("click", prevBtn);

prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex === 0) ? canciones.length - 1 : currentSongIndex - 1;
    audioPlayer.src = canciones[currentSongIndex];  
    audioPlayer.play();
    playPauseBtn.textContent = "Pause";
    
});

// Cambiar a la siguiente canción

nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex === canciones.length - 1) ? 0 : currentSongIndex + 1;
    audioPlayer.src = canciones[currentSongIndex];  
    audioPlayer.play();
    playPauseBtn.textContent = "Pause";


    
});


songList.addEventListener("change", (e) => {
    const selectedSong = e.target.value;  
    const currentSongIndex = canciones.indexOf(selectedSong); 

    if (currentSongIndex !== -1) {
        audioPlayer.src = canciones[currentSongIndex];  
        audioPlayer.play();  
        playPauseBtn.textContent = "Pause";  
    } else {
        console.error("La canción seleccionada no está en la lista.");
    }
   
});


// Cambiar canción desde la lista
songList.addEventListener("change", (e) => {
    const selectedSong = e.target.value;  
    const currentSongIndex = canciones.indexOf(selectedSong);  

    if (currentSongIndex !== -1) {  
        audioPlayer.src = canciones[currentSongIndex];  
        audioPlayer.play();  
        playPauseBtn.textContent = "Pause";  
    } else {
        console.error("La canción seleccionada no está en la lista.");
    }
    
});


