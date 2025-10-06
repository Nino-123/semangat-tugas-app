// encouragement.js - Standalone encouragement page
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

function createConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'];
    
    // Create 100 confetti pieces
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Determine if confetti comes from left or right side
        const fromLeft = Math.random() < 0.5;
        
        if (fromLeft) {
            confetti.style.left = '-30px';
            confetti.style.animationName = 'confetti-left';
        } else {
            confetti.style.right = '-30px';
            confetti.style.animationName = 'confetti-right';
        }
        
        // Random vertical position
        confetti.style.top = (Math.random() * 40 + 30) + '%';
        
        // Random color
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Random size
        confetti.style.width = (Math.random() * 8 + 5) + 'px';
        confetti.style.height = confetti.style.width;
        
        // Random animation duration
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
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
    // Trigger confetti for new encouragement
    createConfetti();
    
    const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
    document.getElementById('encouragementText').textContent = randomEncouragement;
}

function goToJokePage() {
    window.location.href = 'jokes.html';
}

function goToFlappyBird() {
    window.open('flappy-bird.html', '_blank');
}

function goToClickGame() {
    window.open('click-game.html', '_blank');
}

function goToHomePage() {
    window.location.href = 'index.html';
}

// Initialize with confetti on page load
window.addEventListener('load', () => {
    createConfetti();
});