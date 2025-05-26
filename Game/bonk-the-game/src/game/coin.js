class Coin {
    constructor(x, y) {
        this.position = { x: x, y: y };
        this.collected = false;
    }

    collect() {
        this.collected = true;
    }

    draw(ctx) {
        if (!this.collected) {
            ctx.fillStyle = 'gold';
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

export default Coin;