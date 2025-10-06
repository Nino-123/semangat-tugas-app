// Typing animation for "Welcome!"
const text = "Welcome!";
const typingElement = document.getElementById("typingText");
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 150); // 150ms delay between each character
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeText, 500); // Start after 500ms
});

// Navigate to main page when Gracia is clicked
function goToMain() {
    window.location.href = 'index.html';
}

// Navigate to Balqis page when Balqis is clicked
function showBalqisMessage() {
    window.location.href = 'balqis.html';
}