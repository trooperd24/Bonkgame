class Player {
    constructor(x, y) {
        this.position = { x: x, y: y };
        this.image = new Image();
        this.image.src = 'assets/bonc.png';
    }

    move(direction) {
        switch (direction) {
            case 'up':
                this.position.y -= 1;
                break;
            case 'down':
                this.position.y += 1;
                break;
            case 'left':
                this.position.x -= 1;
                break;
            case 'right':
                this.position.x += 1;
                break;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
}

export default Player;