// main.js - Main page navigation
function goToEncouragement() {
    window.location.href = 'encouragement.html';
}

// Helper function to show temporary messages
function showTemporaryMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        font-weight: bold;
        font-size: 16px;
        z-index: 10000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        animation: bounceIn 0.5s ease-out;
    `;
    
    // Add bounceIn animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounceIn {
            0% { opacity: 0; transform: translateX(-50%) scale(0.3); }
            50% { opacity: 1; transform: translateX(-50%) scale(1.1); }
            100% { opacity: 1; transform: translateX(-50%) scale(1); }
        }
    `;
    if (!document.querySelector('style[data-temp-message]')) {
        style.setAttribute('data-temp-message', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.opacity = '0';
            messageDiv.style.transform = 'translateX(-50%) translateY(-20px)';
            messageDiv.style.transition = 'all 0.3s ease-out';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 300);
        }
    }, 2000);
}

// Evasive behavior for the "Engga Mau" button
document.addEventListener('DOMContentLoaded', () => {
    const btnNo = document.getElementById('btnNo');
    if (!btnNo) return;
    
    let hoverCount = 0;
    let isEvading = false;
    
    function resetEvasiveButton() {
        if (btnNo) {
            btnNo.style.position = 'relative';
            btnNo.style.left = '0px';
            btnNo.style.top = '0px';
            btnNo.style.transform = 'none';
            hoverCount = 0;
            isEvading = false;
        }
    }
    
    // Store reset function globally so other scripts can access it
    window.resetEvasiveButton = resetEvasiveButton;
    
    btnNo.addEventListener('mouseenter', () => {
        hoverCount++;
        
        if (hoverCount <= 3) {
            // First 3 hovers: just move within the container area
            const containerWidth = btnNo.parentElement.offsetWidth;
            const containerHeight = btnNo.parentElement.offsetHeight;
            const btnWidth = btnNo.offsetWidth;
            const btnHeight = btnNo.offsetHeight;
            
            const maxX = Math.max(0, containerWidth - btnWidth - 40);
            const maxY = Math.max(0, containerHeight - btnHeight - 40);
            
            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;
            
            btnNo.style.position = 'absolute';
            btnNo.style.left = newX + 'px';
            btnNo.style.top = newY + 'px';
        } else {
            // After 3 hovers: move anywhere on the entire page
            if (!isEvading) {
                isEvading = true;
                btnNo.style.position = 'fixed';
                btnNo.style.zIndex = '9999';
            }
            
            const pageWidth = window.innerWidth;
            const pageHeight = window.innerHeight;
            const btnWidth = btnNo.offsetWidth;
            const btnHeight = btnNo.offsetHeight;
            
            const newX = Math.random() * (pageWidth - btnWidth - 20);
            const newY = Math.random() * (pageHeight - btnHeight - 20);
            
            btnNo.style.left = newX + 'px';
            btnNo.style.top = newY + 'px';
        }
    });
    
    btnNo.addEventListener('click', (e) => {
        hoverCount++;
        
        if (hoverCount >= 7) {
            // After multiple attempts, show a fun message
            alert("Wah, kamu gigih banget! 🏆 Oke deh, aku menyerah... Mari semangat kerjain tugas! 💪✨");
            goToEncouragement();
        } else {
            // Prevent default click behavior
            e.preventDefault();
            
            // Make it move to full page immediately
            if (!isEvading) {
                isEvading = true;
                btnNo.style.position = 'fixed';
                btnNo.style.zIndex = '9999';
            }
            
            const pageWidth = window.innerWidth;
            const pageHeight = window.innerHeight;
            const btnWidth = btnNo.offsetWidth;
            const btnHeight = btnNo.offsetHeight;
            
            // Calculate center of screen
            const centerX = pageWidth / 2;
            const centerY = pageHeight / 2;
            
            // Ensure button moves far from center (minimum 25% of screen away)
            const minDistanceFromCenter = Math.min(pageWidth, pageHeight) * 0.25;
            
            let newX, newY;
            let attempts = 0;
            
            do {
                // Generate position using polar coordinates to ensure distance from center
                const angle = Math.random() * 2 * Math.PI;
                const distance = minDistanceFromCenter + Math.random() * (Math.min(pageWidth, pageHeight) * 0.35);
                
                newX = centerX + Math.cos(angle) * distance;
                newY = centerY + Math.sin(angle) * distance;
                
                // Add extra randomness for chaos
                newX += (Math.random() - 0.5) * 150;
                newY += (Math.random() - 0.5) * 150;
                
                // Keep within screen bounds
                newX = Math.max(10, Math.min(newX, pageWidth - btnWidth - 10));
                newY = Math.max(10, Math.min(newY, pageHeight - btnHeight - 10));
                
                attempts++;
            } while (attempts < 10 && 
                     Math.sqrt(Math.pow(newX - centerX, 2) + Math.pow(newY - centerY, 2)) < minDistanceFromCenter);
            
            // Apply new position with smooth animation
            btnNo.style.left = newX + 'px';
            btnNo.style.top = newY + 'px';
            btnNo.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            // Add random rotation and scale for extra chaos
            const rotation = (Math.random() - 0.5) * 45;
            const scale = 0.7 + Math.random() * 0.6;
            btnNo.style.transform = `rotate(${rotation}deg) scale(${scale})`;
            
            // Reset transform after animation
            setTimeout(() => {
                btnNo.style.transform = 'rotate(0deg) scale(1)';
            }, 400);
            
            // Show playful messages after 3rd click
            if (hoverCount > 3) {
                const messages = [
                    "😅 Masih mencoba?", 
                    "🏃‍♂️ Kejar aku dong!", 
                    "🤪 Hampir dapat!", 
                    "😂 Pantang menyerah ya!",
                    "🎯 Coba lagi deh!",
                    "🚀 Aku terbang jauh!"
                ];
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                
                showTemporaryMessage(randomMessage);
            }
        }
    });
});