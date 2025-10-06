// script.js - clean implementation: encouragements + evasive "Engga Mau" button
const encouragements = [
    "Kamu bisa banget! Tugas ini cuma batu loncatan menuju kesuksesanmu! 🚀",
    "Ingat, setiap tugas yang selesai adalah progress! Kamu amazing! ⭐",
    "Deadline is just a suggestion for greatness! Ayo tunjukkan kehebatanmu! 🔥",
    "Kamu udah sampai sejauh ini, pasti bisa sampai finish! Keep going! 💯",
    "Believe in yourself! Kamu lebih kuat dari yang kamu kira! 💪",
    "Tugas ini akan selesai, dan kamu akan merasa bangga! Let's do this! 🎯",
    "Setiap kata yang kamu tulis, setiap soal yang kamu selesaikan, membawamu lebih dekat ke tujuan! 🌟",
    "Kamu nggak sendirian! Semangat terus, you got this! 🙌"
];

const jokes = [
    "Kenapa mahasiswa suka begadang? Karena deadline itu seperti alarm... selalu di-snooze! 😴",
    "Apa bedanya tugas dan pizza? Pizza bisa habis dalam 30 menit, tugas bisa 30 hari! 🍕",
    "Kenapa laptop mahasiswa selalu panas? Karena terlalu banyak 'burning deadline'! 🔥💻",
    "Apa yang dikatakan tugas ke mahasiswa? 'Kamu nggak bisa hidup tanpa aku!' 📚💔",
    "Kenapa mahasiswa hobi copy-paste? Karena Ctrl+C Ctrl+V lebih cepat dari berpikir! 😂",
    "Apa persamaan antara tidur dan mengerjakan tugas? Keduanya butuh 'power nap'! 😴⚡",
    "Kenapa dosen suka kasih tugas grup? Biar mahasiswa belajar... politik! 🤝😅",
    "Apa bedanya mahasiswa dan kopi? Kopi bisa bikin melek, mahasiswa bikin pusing! ☕😵",
    "Kenapa Microsoft Word jadi aplikasi favorit mahasiswa? Karena bisa 'justify' apapun! 📝✨",
    "Apa yang dikatakan printer ke mahasiswa jam 3 pagi? 'Sekarang baru ingat aku?' 🖨️😂"
];

function showEncouragement() {
    // Trigger confetti celebration
    createConfetti();
    
    const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
    document.getElementById('encouragementText').textContent = randomEncouragement;
    document.getElementById('questionPopup').classList.add('hidden');
    document.getElementById('encouragementPopup').classList.remove('hidden');
}

function createConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'];
    
    // Create 100 confetti pieces (double the amount)
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Determine if confetti comes from left or right side
        const fromLeft = Math.random() < 0.5;
        
        if (fromLeft) {
            // Position completely outside left side of screen
            confetti.style.left = '-30px';
            confetti.style.animationName = 'confetti-left';
        } else {
            // Position completely outside right side of screen
            confetti.style.right = '-30px';
            confetti.style.animationName = 'confetti-right';
        }
        
        // Random vertical position (center area of screen)
        confetti.style.top = (Math.random() * 40 + 30) + '%';
        
        // Random color
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Smaller size range
        const size = Math.random() * 4 + 3; // 3-7px (much smaller)
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        // Random animation delay for staggered effect
        confetti.style.animationDelay = Math.random() * 0.8 + 's';
        
        // Slower, longer animation duration
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 6000);
    }
}

function generateNewEncouragement() {
    // Also trigger confetti for new encouragement
    createConfetti();
    
    const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
    document.getElementById('encouragementText').textContent = randomEncouragement;
}

function showJokePopup() {
    // Trigger confetti for jokes!
    createConfetti();
    
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('jokeText').textContent = randomJoke;
    document.getElementById('encouragementPopup').classList.add('hidden');
    document.getElementById('jokePopup').classList.remove('hidden');
}

function generateNewJoke() {
    // Trigger confetti for new jokes
    createConfetti();
    
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('jokeText').textContent = randomJoke;
}

function goToFlappyBird() {
    window.open('flappy-bird.html', '_blank');
}

function goToClickGame() {
    window.open('click-game.html', '_blank');
}

function showNoResponse() {
    // Intentionally empty: no alert. Evasive behavior handled by event listeners.
}

function reset() {
    document.getElementById('encouragementPopup').classList.add('hidden');
    document.getElementById('jokePopup').classList.add('hidden');
    document.getElementById('questionPopup').classList.remove('hidden');
    if (window.resetEvasiveButton) window.resetEvasiveButton();
}

// Evasive behavior for the "Engga Mau" button
// Starts side-by-side, then moves randomly across the entire page on hover
document.addEventListener('DOMContentLoaded', () => {
    const btnNo = document.getElementById('btnNo');
    if (!btnNo) return;
    
    let isEvasive = false;
    let lastMove = 0; // cooldown timestamp

    function makeButtonEvasive() {
        if (isEvasive) return;
        isEvasive = true;
        btnNo.classList.add('evasive');
        moveButtonRandomly();
    }

    function moveButtonRandomly() {
        const now = Date.now();
        if (now - lastMove < 200) return; // cooldown to prevent jitter
        lastMove = now;

        // Get viewport dimensions for full page movement
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const btnRect = btnNo.getBoundingClientRect();

        // Calculate safe boundaries (keep button fully visible)
        const maxX = viewportWidth - btnRect.width - 20; // 20px margin
        const maxY = viewportHeight - btnRect.height - 20;

        // Generate random position
        const randX = Math.random() * Math.max(0, maxX);
        const randY = Math.random() * Math.max(0, maxY);

        btnNo.style.left = randX + 'px';
        btnNo.style.top = randY + 'px';
    }

    // Make button evasive on first hover
    btnNo.addEventListener('mouseenter', makeButtonEvasive);
    
    // Keep moving it if user tries to hover again while it's evasive
    btnNo.addEventListener('mouseenter', () => {
        if (isEvasive) {
            moveButtonRandomly();
        }
    });

    // Also move on touch for mobile devices
    btnNo.addEventListener('touchstart', (e) => { 
        e.preventDefault(); 
        if (!isEvasive) {
            makeButtonEvasive();
        } else {
            moveButtonRandomly();
        }
    }, { passive: false });

    // If clicked while evasive, move again instead of doing anything
    btnNo.addEventListener('click', (e) => { 
        if (isEvasive) {
            e.preventDefault(); 
            moveButtonRandomly();
        }
    });

    // Reset function to restore original position and behavior
    window.resetEvasiveButton = function() {
        isEvasive = false;
        btnNo.classList.remove('evasive');
        btnNo.style.left = '';
        btnNo.style.top = '';
    };
});
