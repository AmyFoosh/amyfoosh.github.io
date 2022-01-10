class Skull extends Sprite {

    constructor(img, x, y, angle) {
        
        super(img, x, y);

        angle = angle * Math.PI / 180;
        this.angle = angle;
    }

    move(speed) {

        this.x += Math.cos(this.angle) * speed;
        this.y += Math.sin(this.angle) * speed;
    }
}