var bg, pedroPalmeirense, ricardoFlamenguista,cjBaianoRebaixado,bispo, pedroPalmeirenseImg, ricardoFlamenguistaImg,cjBaianoRebaixadoImg,bispoImg,veioDaHavanSuperHeroiImg,bispoSom;
var score = 0;

function preload() {
pedroPalmeirenseImg=loadImage("pedro palmeirense.png");  
ricardoFlamenguistaImg=loadImage("ricardo flamenguista.png");  
veioDaHavanSuperHeroiImg=loadImage("veio da havan super heroi.png");  
bispoImg=loadImage("bispo bombado.jpg");  
cjBaianoRebaixadoImg=loadImage("cj baiano rebaixado.png");  
bg=loadImage("IMG_5180 (1).JPG");  
bispoSom=loadSound("bispo.mp3");




}

function setup() {
  createCanvas(windowWidth,windowHeight);

ricardoFlamenguista=createSprite(width/5,height-(height/3),50,400);
ricardoFlamenguista.addImage(ricardoFlamenguistaImg);
ricardoFlamenguista.scale=width/3500;

pedroPalmeirense=createSprite(width-(width/5),height-(height/3),50,400);
pedroPalmeirense.addImage(pedroPalmeirenseImg);
//pedroPalmeirense.scale=0.62;
pedroPalmeirense.scale=width/5600


createEdgeSprites();
}
function draw(){
  background(bg);

  if(keyDown("a")&&ricardoFlamenguista.x>width/15){
    ricardoFlamenguista.x=ricardoFlamenguista.x-width/150;
  }
  if(keyDown("d")&&ricardoFlamenguista.x<width/1.4){
    ricardoFlamenguista.x=ricardoFlamenguista.x+width/150;
  }
  if(keyDown("w")&&ricardoFlamenguista.y>height/2.3){
    ricardoFlamenguista.y=ricardoFlamenguista.y-height/60;
  }
  if(keyDown("s")&&ricardoFlamenguista.y<height/1.1){
    ricardoFlamenguista.y=ricardoFlamenguista.y+height/60;
  }




  drawSprites();
}

