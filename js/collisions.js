function squareCollision(sprite1, sprite2) {

    let collisionAmount = 0;

    // X Coord.
    // This will check if an Sprite is overlapping another Sprite.
    if (sprite1.x < sprite2.x && sprite2.x < sprite1.x + sprite1.width) {

        collisionAmount++;

    } else if (sprite2.x < sprite1.x && sprite1.x < sprite2.x + sprite2.width) {

        collisionAmount++;
    }

    // Y Coord.
    // This will check if an Sprite is overlapping another Sprite.
    if (sprite1.y < sprite2.y && sprite2.y < sprite1.y + sprite1.height) {

        collisionAmount++;

    } else if (sprite2.y < sprite1.y && sprite1.y < sprite2.y + sprite2.height) {

        collisionAmount++;
    }

    // If collisionAmount is 2, means we have a collision.
    if (collisionAmount == 2) return true;
}

function circularCollision(sprite1, sprite2) {

}