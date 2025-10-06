let canvas, ctx;
let bird = {
    x: 50,
    y: 200,
    width: 20,
    height: 20,
    velocity: 0,
    gravity: 0.5,
    jump: -8
};

let pipes = [];
let score = 0;
let gameRunning = false;
let gameStarted = false;

const pipeWidth = 60;
const pipeGap = 120;
const pipeSpeed = 2;

function initGame() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 600;
    
    resetGame();
}

function resetGame() {
    bird.y = 200;
    bird.velocity = 0;
    pipes = [];
    score = 0;
    gameRunning = false;
    gameStarted = false;
    updateScore();
}

function startGame() {
    gameStarted = true;
    gameRunning = true;
    document.querySelector('.instructions').style.display = 'none';
    gameLoop();
}

function gameLoop() {
    if (!gameRunning) return;
    
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function update() {
    // Update bird
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;
    
    // Generate pipes
    if (pipes.length === 0 || pipes[pipes.length - 1].x < canvas.width - 200) {
        const pipeY = Math.random() * (canvas.height - pipeGap - 100) + 50;
        pipes.push({
            x: canvas.width,
            y: pipeY,
            scored: false
        });
    }
    
    // Update pipes
    for (let i = pipes.length - 1; i >= 0; i--) {
        pipes[i].x -= pipeSpeed;
        
        // Check score
        if (!pipes[i].scored && pipes[i].x + pipeWidth < bird.x) {
            score++;
            pipes[i].scored = true;
            updateScore();
        }
        
        // Remove off-screen pipes
        if (pipes[i].x + pipeWidth < 0) {
            pipes.splice(i, 1);
        }
    }
    
    // Check collisions
    checkCollisions();
}

function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw bird
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
    
    // Draw pipes
    ctx.fillStyle = '#228B22';
    for (let pipe of pipes) {
        // Top pipe
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.y);
        // Bottom pipe
        ctx.fillRect(pipe.x, pipe.y + pipeGap, pipeWidth, canvas.height - pipe.y - pipeGap);
    }
}

function checkCollisions() {
    // Check ground and ceiling
    if (bird.y + bird.height > canvas.height || bird.y < 0) {
        gameOver();
        return;
    }
    
    // Check pipe collisions
    for (let pipe of pipes) {
        if (bird.x < pipe.x + pipeWidth &&
            bird.x + bird.width > pipe.x &&
            (bird.y < pipe.y || bird.y + bird.height > pipe.y + pipeGap)) {
            gameOver();
            return;
        }
    }
}

function gameOver() {
    gameRunning = false;
    document.querySelector('.game-over').style.display = 'block';
}

function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
}

function birdJump() {
    if (gameRunning) {
        bird.velocity = bird.jump;
    }
}

function restartGame() {
    document.querySelector('.game-over').style.display = 'none';
    resetGame();
    startGame();
}

function goToMenu() {
    window.location.href = 'main-question.html';
}

// Event listeners
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        if (!gameStarted) {
            startGame();
        } else {
            birdJump();
        }
    }
});

canvas.addEventListener('click', () => {
    if (!gameStarted) {
        startGame();
    } else {
        birdJump();
    }
});

// Initialize when page loads
window.addEventListener('load', initGame);