//WIP
var particules = [];

class Particule {
    constructor(x, y, dx, dy, size, speed, alpha) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = size;
        this.ogSpeed = speed;
        this.speed = speed;
        this.alpha = alpha;
    }

    run() {
        this.draw();
        this.update();
    }

    draw() {
        ctx.save();
        ctx.beginPath();
        
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255, 255, 255,"+this.alpha+")";
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;
    }
}

function addParticules(n) {
    for (i = 0; i < n; i++) {
        var x = randomNum(10, window.innerWidth - 10);
        var y = randomNum(window.innerHeight + 10, window.innerHeight + 100);
        var dx = randomNum(-0.8, 0.8);
        var speed = randomNum(0.1, 1);
        var size = Math.floor(randomNum(1, 6));
        particules.push(new Particule(x, y, dx , -1, size, speed, 1));
    }
}

function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}

function convertRange(OldValue, OldMax, OldMin, NewMax, NewMin){
    return (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
}