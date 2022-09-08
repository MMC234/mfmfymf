var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/LotaMathaus.png")
Zombie2 =loadImage("assets/Jha.png")
  bgImg = loadImage("assets/BG.png")
Walk = loadImage ("assets/Tu.png")
Bul = loadImage ("assets/Deusche.png")
pele = loadImage ("assets/pele-5.png")
}

function setup() {
  JogadoresClassicos = createGroup();

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//criando o sprite do jogador
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooter_shooting)
   player.scale = 0.8
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   




pele1 =createSprite(100,100,100)
pele1.addImage(pele)
pele1.scale=0.2

}

function Zombie() {
  if (frameCount%160===0){
  Zombie1 = createSprite(displayWidth-500,displayHeight-300,50,50)
  Zombie1.addImage(Zombie2)
  Zombie1.velocityX=-3
  Zombie1.scale=0.4
  JogadoresClassicos.add(Zombie1)
  Zombie1.setCollider("rectangle",0,0,300,300)
  }



}
function Bullet() {
  bulet = createSprite(player.x,player.y)
  bulet.velocityX=+5
 bulet.addImage(Bul)
bulet.scale=0.1
}


function draw() {
  background(0); 
Zombie()
if(player.isTouching(JogadoresClassicos)){
  
  JogadoresClassicos.destroyEach();
  console.log("Tocou")
  pele.x=World.mouseX
  pele.y=World.mouseY
}



  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-30

}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
}

//solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
if(keyWentDown("space")){
 Bullet()
  player.addImage(shooter_shooting)
 
}

//o jogador volta à imagem original quando pararmos de pressionar a barra de espaço


drawSprites();

}



