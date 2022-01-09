// --------------------------------------------

// VARIABLES

let stage = document.getElementById("canvas");
let ctx = stage.getContext("2d");

let fps = 1000 / 60;

// Resize canvas to match screen size.
ctx.canvas.width = window.innerWidth * 0.99;
ctx.canvas.height = window.innerHeight * 0.99;

let avatar = new Image();
avatar.src = "img/avatar.png";

// --------------------------------------------

// GAME LOOP

setInterval(gameLoop, fps);

function gameLoop() {

}

// --------------------------------------------

function init() {

   let posX = Math.random() * stage.width;
   let posY = Math.random() * stage.height;

   ctx.drawImage(avatar, posX, posY);
}
