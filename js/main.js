function init() {

   let stage = document.getElementById("canvas");
   let ctx = stage.getContext("2d");

   let avatar = new Image();
   avatar.src = "./img/avatar.png";

   stage.width = 300;
   stage.height = 300;
   
   alert(stage.width);

   ctx.drawImage(avatar, stage.width / 2, stage.height / 2);
}
