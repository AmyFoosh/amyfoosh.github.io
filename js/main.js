// --------------------------------------------

// ~ UTILS VARIABLES ~

// Get canvas access and context to display content.
let stage = document.getElementById("canvas");
let ctx = stage.getContext("2d");

// Set frame rate to 60 fps.
let fps = 1000 / 60;

// Resize canvas to match screen size.
ctx.canvas.width = window.innerWidth * 0.99;
ctx.canvas.height = window.innerHeight * 0.99;

// --------------------------------------------

// ~ VARIABLES FOR SHOWING CONTENT ~

let avatar = new Image();
avatar.src = "img/avatar.png";

let skullArmy = [
    addSkull(),
    addSkull(),
    addSkull(),
    addSkull()
];

// Degrees = radians * 180 / Math.Pi
// Radians = degrees * Math.Pi / 180

let speed = 8;

// --------------------------------------------

function addSkull() {

    let skull = new Skull(avatar, stage.width / 2, stage.height / 2, Math.random() * 360);

    return skull;
}

// --------------------------------------------

// GAME LOOP

setInterval(gameLoop, fps);

function gameLoop() {

    // This will prevent the stage from having unnecessary images.
    clearStage();

    // We are going to use 2 skulls to check collisions and move them across the stage.
    let skull;
    let skull2;

    for (let i = 0; i < skullArmy.length; i++) {
       
        skull = skullArmy[i];

        for (let j = 0; j < skullArmy.length; j++) {

            skull2 = skullArmy[j];
            
            if (i != j) {
                
                if (squareCollision(skull, skull2)) {
                    
                    let angle1 = Math.atan2(skull.y - skull2.y, skull.x - skull2.x);
                    let angle2 = Math.atan2(skull2.y - skull.y, skull2.x - skull.x);

                    skull.angle = angle1;
                    skull2.angle = angle2;
                    // skull.angle = Math.random() * 360;
                    // skull.angle = skull.angle * Math.PI / 180;
                }
            }
        }
    }

    for (let index = 0; index < skullArmy.length; index++) {
        
        skull = skullArmy[index];

        skull.move(speed);

        if (skull.x < 0) {

            skull.x = 0;
            skull.angle = Math.random() * 360;
            skull.angle = skull.angle * Math.PI / 180;

        } else if (skull.x > stage.width - skull.width) {

            skull.x = stage.width - skull.width;
            skull.angle = Math.random() * 360;
            skull.angle = skull.angle * Math.PI / 180;
        }

        if (skull.y < 0) {

            skull.y = 0;
            skull.angle = Math.random() * 360;
            skull.angle = skull.angle * Math.PI / 180;

        } else if (skull.y > stage.height - skull.height) {
         
            skull.y = stage.height - skull.height;
            skull.angle = Math.random() * 360;
            skull.angle = skull.angle * Math.PI / 180;
        }

        ctx.drawImage(skull.img, skull.x, skull.y);
    }
}

function clearStage() {

    ctx.canvas.width = window.innerWidth * 0.5;
    ctx.canvas.height = window.innerHeight * 0.5;
}