// Screen Elements
const splashScreen = document.getElementById('splash-screen');
const instructionsScreen = document.getElementById('instructions-screen');
const lobbyScreen = document.getElementById('lobby-screen');
const playerZone = document.getElementById('player-zone');

// Player Elements
const audioPlayer = document.getElementById('audio-player');
const lessonTitle = document.getElementById('lesson-title');
const transcriptBox = document.getElementById('transcript-box');
const popup = document.getElementById('translation-popup');

// --- Navigation Logic ---
document.getElementById('btn-start').addEventListener('click', () => {
    splashScreen.classList.remove('active');
    instructionsScreen.classList.add('active');
});

document.getElementById('btn-enter').addEventListener('click', () => {
    instructionsScreen.classList.remove('active');
    lobbyScreen.classList.add('active');
    buildLobby();
});

document.getElementById('btn-back').addEventListener('click', () => {
    playerZone.classList.remove('active');
    lobbyScreen.classList.add('active');
    audioPlayer.pause(); // Stop audio when leaving
});

// --- Build the Lobby ---
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
            const card = document.createElement('div');
            card.className = 'situation-card';
            card.innerHTML = `<strong>Situation ${sit.id}</strong><br>${sit.title}`;
            
            // When a card is clicked, load the data into the Player Zone
            card.addEventListener('click', () => loadLesson(sit));
            contentDiv.appendChild(card);
        });

        details.appendChild(contentDiv);
        container.appendChild(details);
    });
}

// --- Load the Lesson ---
function loadLesson(situationData) {
    // Switch screens
    lobbyScreen.classList.remove('active');
    playerZone.classList.add('active');

    // Inject the specific data
    lessonTitle.innerText = `Situation ${situationData.id}: ${situationData.title}`;
    audioPlayer.src = situationData.audioFile;
    transcriptBox.innerHTML = situationData.dialogue;

    // Attach dictionary clicks to the newly loaded text
    attachDictionary();
}

// --- Interactive Dictionary Logic ---
function attachDictionary() {
    const vocabWords = document.querySelectorAll('.vocab');
    
    vocabWords.forEach(word => {
        word.addEventListener('click', (e) => {
            e.stopPropagation();
            const eng = e.target.innerText.replace(/[.,!?]/g, '');
            const tr = e.target.getAttribute('data-tr');
            
            popup.innerHTML = `${eng} <span class="tr-color">= ${tr}</span>`;
            
            const rect = e.target.getBoundingClientRect();
            popup.style.top = `${rect.top + window.scrollY - popup.offsetHeight - 5}px`;
            popup.style.left = `${rect.left + window.scrollX}px`;
            popup.classList.add('visible');
        });
    });
}

// Hide popup when clicking elsewhere or scrolling
document.addEventListener('click', () => popup.classList.remove('visible'));
document.addEventListener('scroll', () => popup.classList.remove('visible'));
