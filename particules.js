class Particule {
    constructor(x, y, dx, dy, size, speed) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = size;
        this.speed = speed;
    }

    run() {
        this.draw();
        this.update();
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill
    }

    update() {
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed; 
    }
}