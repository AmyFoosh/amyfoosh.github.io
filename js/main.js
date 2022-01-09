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

var skull = new Sprite(avatar, 0, 0);

// --------------------------------------------

// GAME LOOP

setInterval(gameLoop, fps);

function gameLoop() {

}

// --------------------------------------------

function init() {

   // let posX = Math.random() * stage.width;
   // let posY = Math.random() * stage.height;

   ctx.drawImage(skull.img, skull.x, skull.y);
}

// --------------------------------------------

// CLASSES

// This class is used to display objects on stage.
class Sprite {

   constructor(img, x, y) {

      this.img = img;
      this.x = x;
      this.y = y;
   }
}

// --------------------------------------------
