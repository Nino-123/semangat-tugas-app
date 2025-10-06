// Auto-trigger confetti when page loads
window.addEventListener('load', () => {
    setTimeout(createConfetti, 500);
});

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
        
        confetti.style.top = (Math.random() * 40 + 30) + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        const size = Math.random() * 4 + 3;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        confetti.style.animationDelay = Math.random() * 0.8 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 6000);
    }
}

function goBack() {
    window.location.href = 'welcome.html';
}