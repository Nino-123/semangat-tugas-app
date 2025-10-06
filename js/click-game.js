let score = 0;
let timeLeft = 30;
let combo = 0;
let gameRunning = false;
let gameInterval;
let spawnInterval;
let targets = [];

const gameArea = document.getElementById('gameArea');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const comboElement = document.getElementById('combo');

const motivationalMessages = [
    "Amazing focus! You're unstoppable! 🔥",
    "That concentration is impressive! 🎯",
    "You're in the zone! Keep it up! ⚡",
    "Incredible reflexes! You've got this! 💪",
    "Your determination is showing! 🌟",
    "That's the spirit! Nothing can stop you! 🚀",
    "You're crushing it! Stay focused! 💎",
    "Awesome performance! You're a natural! 🏆"
];

function startGame() {
    document.getElementById('instructions').classList.add('hidden');
    resetGame();
    gameRunning = true;
    
    // Start game timer
    gameInterval = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
    
    // Start spawning targets
    spawnTargets();
}

function resetGame() {
    score = 0;
    timeLeft = 30;
    combo = 0;
    targets = [];
    updateDisplay();
    clearGameArea();
}

function updateDisplay() {
    scoreElement.textContent = score;
    timeElement.textContent = timeLeft;
    comboElement.textContent = combo;
}

function clearGameArea() {
    const existingTargets = gameArea.querySelectorAll('.target');
    existingTargets.forEach(target => target.remove());
}

function spawnTargets() {
    if (!gameRunning) return;
    
    // Spawn a new target
    createTarget();
    
    // Schedule next spawn (gets faster as time goes on)
    const spawnDelay = Math.max(800 - (30 - timeLeft) * 20, 300);
    setTimeout(spawnTargets, spawnDelay);
}

function createTarget() {
    const target = document.createElement('div');
    target.classList.add('target');
    
    // Determine target type based on probability
    const rand = Math.random();
    let targetType, points, emoji;
    
    if (rand < 0.1) { // 10% chance - bonus target
        targetType = 'bonus';
        points = 50;
        emoji = '💎';
    } else if (rand < 0.25) { // 15% chance - small target (harder)
        targetType = 'small';
        points = 30;
        emoji = '⚡';
    } else if (rand < 0.15) { // 15% chance - big target (easier)
        targetType = 'big';
        points = 10;
        emoji = '🎯';
    } else { // 60% chance - normal target
        targetType = 'normal';
        points = 20;
        emoji = '🔥';
    }
    
    target.classList.add(targetType);
    target.textContent = emoji;
    target.dataset.points = points;
    
    // Random position
    const maxX = gameArea.clientWidth - 80;
    const maxY = gameArea.clientHeight - 80;
    target.style.left = Math.random() * maxX + 'px';
    target.style.top = Math.random() * maxY + 'px';
    
    // Click event
    target.addEventListener('click', () => {
        hitTarget(target, points);
    });
    
    gameArea.appendChild(target);
    targets.push(target);
    
    // Remove target after 3 seconds if not clicked
    setTimeout(() => {
        if (target.parentNode) {
            target.remove();
            const index = targets.indexOf(target);
            if (index > -1) {
                targets.splice(index, 1);
            }
            // Reset combo if target expires
            combo = 0;
            updateDisplay();
        }
    }, 3000);
}

function hitTarget(target, points) {
    // Calculate score with combo bonus
    const comboBonus = Math.floor(combo / 5) * 10;
    const totalPoints = points + comboBonus;
    
    score += totalPoints;
    combo++;
    updateDisplay();
    
    // Show score popup
    showScorePopup(target, totalPoints);
    
    // Show combo popup for every 5 hits
    if (combo % 5 === 0 && combo > 0) {
        showComboPopup();
    }
    
    // Remove target
    target.remove();
    const index = targets.indexOf(target);
    if (index > -1) {
        targets.splice(index, 1);
    }
}

function showScorePopup(target, points) {
    const popup = document.createElement('div');
    popup.classList.add('score-popup');
    popup.textContent = `+${points}`;
    popup.style.left = target.style.left;
    popup.style.top = target.style.top;
    
    gameArea.appendChild(popup);
    
    setTimeout(() => {
        popup.remove();
    }, 1000);
}

function showComboPopup() {
    const popup = document.createElement('div');
    popup.classList.add('combo-popup');
    popup.textContent = `${combo} COMBO! 🔥`;
    
    gameArea.appendChild(popup);
    
    setTimeout(() => {
        popup.remove();
    }, 800);
}

function endGame() {
    gameRunning = false;
    clearInterval(gameInterval);
    clearGameArea();
    
    // Show game over screen
    document.getElementById('finalScore').textContent = score;
    
    // Performance evaluation
    let performance, motivation;
    if (score >= 1000) {
        performance = "🏆 LEGENDARY! 🏆";
        motivation = "You have incredible focus and determination! This level of concentration will help you crush any task!";
    } else if (score >= 700) {
        performance = "🌟 EXCELLENT! 🌟";
        motivation = "Amazing performance! Your quick reflexes show you can handle pressure with ease!";
    } else if (score >= 500) {
        performance = "🔥 GREAT! 🔥";
        motivation = "Solid gameplay! You're developing great focus skills that will help with your studies!";
    } else if (score >= 300) {
        performance = "💪 GOOD! 💪";
        motivation = "Nice work! Every click shows you're building concentration and persistence!";
    } else {
        performance = "🎯 GETTING STARTED! 🎯";
        motivation = "Great first attempt! Remember, every expert was once a beginner. Keep practicing!";
    }
    
    document.getElementById('performance').textContent = performance;
    document.getElementById('motivation').textContent = motivation;
    document.getElementById('gameOver').classList.remove('hidden');
}

function restartGame() {
    document.getElementById('gameOver').classList.add('hidden');
    startGame();
}

function goToMenu() {
    window.location.href = 'index.html';
}

// Prevent context menu on right click
gameArea.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Add some keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !gameRunning) {
        e.preventDefault();
        if (document.getElementById('instructions').classList.contains('hidden')) {
            restartGame();
        } else {
            startGame();
        }
    }
    if (e.code === 'Escape') {
        goToMenu();
    }
});