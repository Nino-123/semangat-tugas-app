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

// Progressive questioning system
const progressiveQuestions = [
    "Mau tambah adrenaline engga buat kerjain tugas?",
    "Yakin gamau adrenaline?",
    "Serious ga mau?",
    "Beneran nolak motivasi gratis?",
    "Masa iya gamau semangat extra?",
    "Pasti banget ga butuh dorongan?",
    "Terakhir nih, yakin ga mau?",
    "Pilih aja ya qis :)"
];

let questionIndex = 0;

function handleNoResponse() {
    questionIndex++;
    
    if (questionIndex < progressiveQuestions.length) {
        // Update the question text
        document.getElementById('questionText').textContent = progressiveQuestions[questionIndex];
        
        // If we reach the final question, hide the "Engga Mau" button
        if (questionIndex === progressiveQuestions.length - 1) {
            document.getElementById('btnNo').style.display = 'none';
        }
        
        // Add a little animation effect
        const popup = document.getElementById('questionPopup');
        popup.style.animation = 'none';
        popup.offsetHeight; // Trigger reflow
        popup.style.animation = 'slideIn 0.5s ease-out';
    } else {
        // After all questions, reset to first one
        questionIndex = 0;
        document.getElementById('questionText').textContent = progressiveQuestions[questionIndex];
        document.getElementById('btnNo').style.display = 'inline-block'; // Show button again
    }
}

function showEncouragement() {
    // Create jumpscare overlay
    const jumpscareOverlay = document.createElement('div');
    jumpscareOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.1s ease-in;
    `;
    
    const jumpscareImage = document.createElement('img');
    jumpscareImage.src = 'hantu.jpg';
    jumpscareImage.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(0.8);
        transition: transform 0.1s ease-out;
    `;
    
    jumpscareOverlay.appendChild(jumpscareImage);
    document.body.appendChild(jumpscareOverlay);
    
    // Trigger the jumpscare
    setTimeout(() => {
        jumpscareOverlay.style.opacity = '1';
        jumpscareImage.style.transform = 'scale(1.1)';
    }, 50);
    
    // Remove jumpscare and navigate after 3 seconds
    setTimeout(() => {
        jumpscareOverlay.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(jumpscareOverlay);
            window.location.href = 'balqis-message.html';
        }, 200);
    }, 3000);
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

function goToFlappyBird() {
    window.open('flappy-bird.html', '_blank');
}

function showNoResponse() {
    // Intentionally empty: no alert. Evasive behavior handled by event listeners.
}

function reset() {
    document.getElementById('encouragementPopup').classList.add('hidden');
    document.getElementById('questionPopup').classList.remove('hidden');
    
    // Reset question to the first one
    questionIndex = 0;
    document.getElementById('questionText').textContent = progressiveQuestions[questionIndex];
    
    // Make sure both buttons are visible again
    document.getElementById('btnNo').style.display = 'inline-block';
}