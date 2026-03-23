// Screen Elements
const splashScreen = document.getElementById('splash-screen');
const instructionsScreen = document.getElementById('instructions-screen');
const mainApp = document.getElementById('main-app');
const lobbyScreen = document.getElementById('lobby-screen');
const playerZone = document.getElementById('player-zone');

// Player Elements
const audioPlayer = document.getElementById('audio-player');
const nowPlayingTitle = document.getElementById('now-playing-title');
const transcriptBox = document.getElementById('transcript-box');
const popup = document.getElementById('translation-popup');

// --- Navigation ---
document.getElementById('btn-start').addEventListener('click', () => {
    splashScreen.classList.add('hidden');
    instructionsScreen.classList.remove('hidden');
});

document.getElementById('btn-enter').addEventListener('click', () => {
    instructionsScreen.classList.add('hidden');
    mainApp.classList.remove('hidden');
    buildLobby();
});

document.getElementById('btn-back-lobby').addEventListener('click', () => {
    playerZone.classList.add('hidden');
    lobbyScreen.classList.remove('hidden');
    audioPlayer.pause();
});

// --- Build Lobby ---
function buildLobby() {
    const container = document.getElementById('lobby-container');
    container.innerHTML = ''; 

    courseData.forEach(section => {
        const details = document.createElement('details');
        details.className = 'category-block';
        details.innerHTML = `<summary>${section.category}</summary>`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'category-content';

        section.situations.forEach(sit => {
            const btn = document.createElement('button');
            btn.className = 'lobby-item';
            btn.innerText = `Situation ${sit.id}: ${sit.title}`;
            
            btn.addEventListener('click', () => loadLesson(sit));
            contentDiv.appendChild(btn);
        });

        details.appendChild(contentDiv);
        container.appendChild(details);
    });
}

// --- Load Lesson ---
function loadLesson(sit) {
    lobbyScreen.classList.add('hidden');
    playerZone.classList.remove('hidden');

    nowPlayingTitle.innerText = `Situation ${sit.id}: ${sit.title}`;
    
    // Set audio source and force 1.2x playback speed!
    audioPlayer.src = sit.audioFile;
    audioPlayer.playbackRate = 1.2; 
    
    transcriptBox.innerHTML = sit.dialogue;

    attachDictionary();
}

// --- Interactive Dictionary ---
function attachDictionary() {
    const vocabWords = document.querySelectorAll('.vocab');
    
    vocabWords.forEach(word => {
        word.addEventListener('click', (e) => {
            e.stopPropagation();
            const eng = e.target.innerText.replace(/[.,!?]/g, '');
            const tr = e.target.getAttribute('data-tr');
            
            popup.innerHTML = `${eng} <span class="tr-color">= ${tr}</span>`;
            
            const rect = e.target.getBoundingClientRect();
            popup.style.top = `${rect.top + window.scrollY - popup.offsetHeight - 10}px`;
            popup.style.left = `${rect.left + window.scrollX}px`;
            popup.classList.add('visible');
        });
    });
}

document.addEventListener('click', () => popup.classList.remove('visible'));
document.addEventListener('scroll', () => popup.classList.remove('visible'));
