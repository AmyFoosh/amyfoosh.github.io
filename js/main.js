let stage = document.getElementById("canvas");
let ctx = stage.getContext("2d");

let avatar = new Image();
avatar.src = "img/avatar.png";

function init() {

   stage.width = 200;
   stage.height = 200;

   ctx.drawImage(avatar, stage.width / 2, stage.height / 2);
}
