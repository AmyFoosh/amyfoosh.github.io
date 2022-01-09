let stage = document.getElementById("canvas");
let ctx = stage.getContext("2d");

ctx.canvas.width = window.innerWidth * 0.99;
ctx.canvas.height = window.innerHeight * 0.99;

let avatar = new Image();
avatar.src = "img/avatar.png";

function init() {

   let posX = Math.random() * stage.width;
   let posY = Math.random() * stage.height;

   ctx.drawImage(avatar, posX, posY);
}
