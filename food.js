import { onSnake, expandSnake } from './snake.js';
import {randomGridPosition} from './grid.js';
let food = { x: 5, y: 6 };
const EXPANSION_RATE = 1;
export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = { x: 20, y: 10 }
    }

}

export function draw(gameBoard) {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = food.y
    snakeElement.style.gridColumnStart = food.x
    snakeElement.classList.add('food');
    gameBoard.appendChild(snakeElement);
}

function getRandomFoodPosition() {
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition; 
}