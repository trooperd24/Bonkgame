const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

import Maze from './game/maze.js';
import Player from './game/player.js';
import AI from './game/ai.js';
import Coin from './game/coin.js';

let maze;
let player;
let coins = [];
let score = 0;

function init() {
    maze = new Maze();
    maze.generateMaze();
    
    player = new Player(maze.startPosition);
    
    for (let i = 0; i < 10; i++) {
        const coin = new Coin(maze.getRandomPosition());
        coins.push(coin);
    }
    
    gameLoop();
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    maze.drawMaze(ctx);
    player.draw(ctx);
    
    coins.forEach((coin, index) => {
        coin.draw(ctx);
        if (player.collect(coin)) {
            score += 10;
            coins.splice(index, 1);
        }
    });
    
    requestAnimationFrame(gameLoop);
}

window.addEventListener('keydown', (event) => {
    player.move(event.key);
});

init();