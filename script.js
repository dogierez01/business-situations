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

// Emojis for the 30 Categories to match the screenshot look
const categoryIcons = [
    "🤝", "🚢", "⚡", "👔", "📅", "💼", "⚖️", "⚙️", "☕", "🚨",
    "📢", "✈️", "💻", "⏳", "🖨️", "🏢", "🎤", "🎧", "📋", "🍽️",
    "🧠", "🌍", "🚀", "🎉", "🔒", "🏭", "🎟️", "🎨", "📊", "📜"
];

// --- Navigation ---
document.getElementById('btn-start').addEventListener('click', () => {
    splashScreen.classList.add('hidden');
    instructionsScreen.classList.remove('hidden');
});

document.getElementById('btn-enter').addEventListener('click', () => {
    instructionsScreen.classList.add('hidden');
    mainApp.classList.remove('hidden');
    buildCategoryGrid();
});

document.getElementById('btn-back-lobby').addEventListener('click', () => {
    playerZone.classList.add('hidden');
    lobbyScreen.classList.remove('hidden');
    audioPlayer.pause();
});

// --- 1. Build the Category Grid ---
function buildCategoryGrid() {
    const container = document.getElementById('lobby-container');
    container.innerHTML = ''; 
    container.className = 'category-grid'; // Apply Grid Layout
    document.getElementById('app-title').innerText = "Business Situations";

    courseData.forEach((section, index) => {
        const card = document.createElement('div');
        card.className = 'category-card';
        
        // Grab the matching icon, or use a default if we run out
        const icon = categoryIcons[index] || "📁";

        card.innerHTML = `
            <div class="card-icon">${icon}</div>
            <div class="card-text">
                <div class="card-title">${section.category}</div>
                <div class="card-subtitle">Click to view ${section.situations.length} situations ➔</div>
            </div>
        `;
        
        card.addEventListener('click', () => showSituationsList(section));
        container.appendChild(card);
    });
}

// --- 2. Show Situations List (Drill-down) ---
function showSituationsList(section) {
    const container = document.getElementById('lobby-container');
    container.className = ''; // Remove grid layout for the list
    
    document.getElementById('app-title').innerText = section.category;

    container.innerHTML = `
        <button class="back-to-cats" onclick="buildCategoryGrid()">⬅ Back to Categories</button>
        <div class="situations-list" id="sit-list"></div>
    `;

    const listDiv = document.getElementById('sit-list');

    section.situations.forEach(sit => {
        const btn = document.createElement('button');
        btn.className = 'situation-btn';
        btn.innerText = `Situation ${sit.id}: ${sit.title}`;
        
        btn.addEventListener('click', () => loadLesson(sit));
        listDiv.appendChild(btn);
    });
}

// --- 3. Load the Player ---
function loadLesson(sit) {
    lobbyScreen.classList.add('hidden');
    playerZone.classList.remove('hidden');

    nowPlayingTitle.innerText = `Situation ${sit.id}: ${sit.title}`;
    
    // Load audio and force 1.2x speed
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
            popup.style.left = `${rect.left + window.scrollX + (rect.width/2) - (popup.offsetWidth/2)}px`;
            popup.classList.add('visible');
        });
    });
}

document.addEventListener('click', () => popup.classList.remove('visible'));
document.addEventListener('scroll', () => popup.classList.remove('visible'));
