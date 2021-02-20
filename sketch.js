var fs_img,ks_img,ca_img,h_img;
var fs,ks,ca,h,l1,l2,l3,l4;
var bg,bg_img;

function preload(){
    fs_img=loadAnimation("Flying/f1.png","Flying/f2.png","Flying/f3.png","Flying/f4.png","Flying/f5.png","Flying/f6.png")
    ks_img=loadAnimation("Kick/k1.png","Kick/k2.png","Kick/k3.png","Kick/k4.png","Kick/k5.png","Kick/k6.png","Kick/k7.png","Kick/k8.png","Kick/k9.png")
    ca_img=loadImage("Captain America.png");
    h_img=loadImage("Hi.jpg");
    bg_img=loadImage("bg.jpg");
}

function setup(){
    canvas=createCanvas(500,500);

    bg=createSprite(250,200);
    bg.addImage(bg_img);
    bg.scale=1.4;
    bg.velocityX=2;
    bg.width=bg.width/2;

    l1=createSprite(160,100,10,25);
    l1.shapeColor="black";
    l1.velocityX=0.5;

    l2=createSprite(210,115,110,10);
    l2.shapeColor="black";
    l2.velocityX=0.5;

    l3=createSprite(260,100,10,25);
    l3.shapeColor="black";
    l3.velocityX=0.5;

    l4=createSprite(210,85,110,10);
    l4.shapeColor="black";
    l4.velocityX=0.5;

    h=createSprite(210,100);
    h.addImage(h_img);
    h.scale=0.7;
    h.velocityX=0.5;

    ca=createSprite(350,430);
    ca.addImage(ca_img);
    ca.scale=0.2+0.05;

    fs=createSprite(100,150);
    fs.addAnimation("flying",fs_img);
    fs.velocityX=0.5;
    fs.scale=1;

    ks=createSprite(200,430);
    ks.addAnimation("kick",ks_img);
    ks.scale=1.1;
}

function draw(){
    background("white");
    
   if(bg.x>=300){
       bg.x=250;
   }

    drawSprites();

   textSize(40);
   fill("blue");
   stroke("black");
   strokeWeight(3);
   text("Animated Cartoons",80,50);
}