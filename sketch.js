var gameState="play"
var gun,gunInABox;
var rocket,rocketInABox;
var enemy1Img,enemy2Img,enemy3Img,enemy4Img;
var gunImg,bulletImg;
var backgroundImg;
var enemy1Group,enemy2Group,enemy3Group,enemy4Group,bulletGroup;
var score

function preload(){
    enemy1Img=loadImage("image/enemy1.png");
    enemy2Img=loadImage("image/enemy2.png");
    enemy3Img=loadImage("image/enemy3.png");
    enemy4Img=loadImage("image/enemy4.png");
    gunImg=loadImage("image/AK47.png");
    backgroundImg=loadImage("image/jungle.jpg");
    bulletImg=loadImage("image/bullet.png")
}
function setup(){
    var canvas = createCanvas(900,600);
    gun=createSprite(10,585,20,20);
    gun.addImage("gun",gunImg);
    gun.scale=0.5

    enemy1Group=new Group()
    enemy2Group=new Group()
    enemy3Group=new Group()
    enemy4Group=new Group()
    bulletGroup=new Group()
    score=0
}                          

function draw(){
    background(backgroundImg);
    text(mouseX+ "," +mouseY, 10,15)

    gun.y=mouseY

    var enemy = Math.round(random(1,4));
     if (World.frameCount%80===0){
       if (enemy === 1){
        spawnEnemy1(); 
    }
    else if(enemy === 2){
        spawnEnemy2();
     }
     else if(enemy === 3){
        spawnEnemy3();
     }
    else if (enemy === 4){
         spawnEnemy4(); 
    }
     }
     edges=createEdgeSprites();
     
     if(bulletGroup.isTouching(enemy1Group)){
        enemy1Group.destroyEach();
        bulletGroup.destroyEach();
        score = score + 20;
     }
     if(bulletGroup.isTouching(enemy2Group)){
        enemy2Group.destroyEach()
        bulletGroup.destroyEach()
        score = score + 40
     }
     if(bulletGroup.isTouching(enemy3Group)){
        enemy3Group.destroyEach()
        bulletGroup.destroyEach()
        score = score + 60
     }
     if(bulletGroup.isTouching(enemy4Group)){
        enemy4Group.destroyEach()
        bulletGroup.destroyEach()
        score = score + 80
     }

     spawnBullet();

    drawSprites();
    if(enemy1Group.collide(edges[3])){
        fill("orange")
    textSize(30)
        text("GAME OVER",400,300)
        text("LOL HAHAHA LOSER",350,400)
     }
     if(enemy2Group.collide(edges[3])){
        fill("orange")
    textSize(30)
        text("GAME OVER",400,300)
        text("LOL HAHAHA LOSER",350,400)
     }
     if(enemy3Group.collide(edges[3])){
        fill("orange")
    textSize(30)
        text("GAME OVER",400,300)
        text("LOL HAHAHA LOSER",350,400)
     }
     if(enemy4Group.collide(edges[3])){
        fill("orange")
    textSize(30)
        text("GAME OVER",400,300)
        text("LOL HAHAHA LOSER",350,400)
     }
    fill("white")
    textSize(20)
    text("score:"+ score,700,50)
}

function spawnEnemy1(){

    var enemy1 = createSprite(900,390,20,20);
    enemy1.velocityX = -3
    enemy1.addImage("enemy1",enemy1Img);
    enemy1.scale=0.5
    enemy1.lifetime=330
    enemy1Group.add(enemy1);
}

function spawnEnemy2(){

        var enemy2 = createSprite(900,390,20,20);
        enemy2.velocityX = -3
        enemy2.addImage("enemy2",enemy2Img);
        enemy2.scale=0.5
        enemy2.lifetime=330
        enemy2Group.add(enemy2);
    }
    
    function spawnEnemy3(){

            var enemy3 = createSprite(900,390,20,20);
            enemy3.velocityX = -3
            enemy3.addImage("enemy3",enemy3Img);
            enemy3.scale=0.5
            enemy3.lifetime=330
            enemy3Group.add(enemy3);
        }
        
        function spawnEnemy4(){

                var enemy4 = createSprite(900,random(50,450),20,20);
                enemy4.velocityX = -3
                enemy4.addImage("enemy4",enemy4Img);
                enemy4.scale=0.5
                enemy4.lifetime=330
                enemy4Group.add(enemy4);    
            }
            

            function spawnBullet(){
                if(keyDown("space")){
                    var bullet = createSprite(gun.x + 120,gun.y - 115,10,10)
                    bullet.addImage("bullet",bulletImg);
                    bullet.velocityX=4
                    bullet.scale=0.1
                    bulletGroup.add(bullet);
                }

            }