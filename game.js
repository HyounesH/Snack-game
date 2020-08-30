import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js';
import { draw as drawFood, update as updateFood } from './food.js';
import { outsideGride } from './grid.js';
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
    if (gameOver) {
        if(confirm('you lost, press ok to restart. ')) {
            window.location='/'
        }
        return 
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    console.log('Render');
    lastRenderTime = currentTime;

    update();
    draw();
}
window.requestAnimationFrame(main);


function update() {
    updateSnake();
    updateFood();
    checkDeath();
}
function draw() {
    gameBoard.innerHTML = ''
    drawFood(gameBoard);
    drawSnake(gameBoard);
}

function checkDeath() {
    gameOver = outsideGride(getSnakeHead()) || snakeIntersection();
}