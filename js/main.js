let stage = document.getElementById("canvas");
let ctx = stage.getContext("2d");

let avatar = new Image();
avatar.src = "../img/avatar.png";

function init() {

   alert("Working!");

   stage.width = 300;
   stage.height = 300;

   ctx.drawImage(avatar, stage.width / 2, stage.height / 2);
}
