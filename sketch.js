var b1,b2,b3,b4,b5,b6,b7,b8,b9
var x,o
var b11,b22,b33,b44,b55,b66,b77,b88,b99
var turn=1;
var game="start";
function preload(){
x=loadImage("X.png")
o=loadImage("O.png")
}
function setup() {
  createCanvas(400,400);
b1=createSprite(100,100)
b2=createSprite(200,100)
b3=createSprite(300,100)
b4=createSprite(100,200)
b5=createSprite(200,200)
b6=createSprite(300,200)
b7=createSprite(100,300)
b8=createSprite(200,300)
b9=createSprite(300,300)
b11=0;
b22=0;
b33=0;
b44=0;
b55=0;
b66=0;
b77=0;
b88=0;
b99=0;
b1.visible=false;
b2.visible=false;
b3.visible=false;
b4.visible=false;
b5.visible=false;
b6.visible=false;
b7.visible=false;
b8.visible=false;
b9.visible=false;
start=0;
}

function draw() {
  background("red")
  drawSprites();
  //vertical lines
   line(50,50,50,350)
   line(150,50,150,350)
   line(250,50,250,350)
   line(350,50,350,350)
   //horizontal lines
   line(50,50,350,50)
   line(50,150,350,150)
   line(50,250,350,250)
   line(50,350,350,350)
   textSize(20)
   fill("black");
   if(turn===1){
     text("X turn",20,20)
     
   }

   if(turn===2){
     text("O turn",20,20)
   }
   //turn 1
if(turn==1 && mousePressedOver(b1)&&b11===0){
b1.addImage(x)
b1.visible=true;
b1.scale=0.43
start=start+1
turn=2
b11=1
}

if(turn==1 && mousePressedOver(b2)&&b22==0){
  b2.addImage(x)
  b2.visible=true;
  b2.scale=0.43
  start=start+1
turn=2
b22=1
  }
  if(turn==1 && mousePressedOver(b3)&&b33==0){
    b3.addImage(x)
    b3.visible=true;
    b3.scale=0.43
    start=start+1
  turn=2
  b33=1
    }
    if(turn==1 && mousePressedOver(b4)&&b44==0){
      b4.addImage(x)
      b4.visible=true;
      b4.scale=0.43
      start=start+1
    turn=2
    b44=1
      }
      if(turn==1 && mousePressedOver(b5)&&b55==0){
        b5.addImage(x)
        b5.visible=true;
        b5.scale=0.43
        start=start+1
      turn=2
      b55=1;
        }
        if(turn==1 && mousePressedOver(b6)&&b66==0){
          b6.addImage(x)
          b6.visible=true;
          b6.scale=0.43
          start=start+1
        turn=2
        b66=1;
          }
          if(turn==1 && mousePressedOver(b7)&&b77==0){
            b7.addImage(x)
            b7.visible=true;
            b7.scale=0.43
            start=start+1
          turn=2
          b77=1;
            }
            if(turn==1 && mousePressedOver(b8)&&b88==0){
              b8.addImage(x)
              b8.visible=true;
              b8.scale=0.43
              start=start+1
            turn=2
            b88=1;
              }
              if(turn==1 && mousePressedOver(b9)&&b99==0){
                b9.addImage(x)
                b9.visible=true;
                b9.scale=0.43
                start=start+1
              turn=2
              b99=1;
                }

                //line for if X wins

                //horizontal
                if(b11==1 && b22==1 && b33==1){
                  game="end"
                  text("X wins",200,50)
                  strokeWeight(5)
                  stroke("blue")
                  line(50,100,350,100)

                }
                if(b44==1 && b55==1 && b66==1){
                  game="end"
                  text("X wins",200,50)
                  strokeWeight(5)
                  stroke("blue")
                  line(50,200,350,200)
                }
                if(b77==1 &&b88==1 &&b99==1){
                  game="end"
                  text("X wins",200,50)
                  strokeWeight(5)
                  stroke("blue")
                  line(50,300,350,300)
                }
                //diagonal
                if(b11==1 && b55==1 && b99==1){
                  game="end"
                  text("X wins",200,50)
                  strokeWeight(5)
                  stroke("blue")
                  line(50,50,350,350)
                }
                if(b33==1 && b55==1 && b77==1){
                  game="end"
                  text("X wins",200,50)
                  strokeWeight(5)
                  stroke("blue")
                  line(350,50,50,350)
                }
                //vertical
                if(b11==1 && b44==1 && b77==1){
                  game="end"
                  text("X wins",200,50)
                  strokeWeight(5)
                  stroke("blue")
                  line(100,50,100,350)
                }
                if(b22==1 && b55==1 && b88==1){
                  game="end"
                  text("X wins",200,50)
                  strokeWeight(5)
                  stroke("blue")
                  line(200,50,200,350)
                }
                if(b33==1 && b66==1 && b99==1){
                  game="end"
                  text("X wins",200,30)
                  strokeWeight(5)
                  stroke("blue")
                  line(300,50,300,350)
                }


      //turn 2

if(turn==2 && mousePressedOver(b1)&&b11==0){
  b1.addImage(o)
  b1.visible=true;
  b1.scale=0.43;
  start=start+1
  turn=1
  b11=2
}
if(turn==2 && mousePressedOver(b2)&&b22==0){
  b2.addImage(o)
  b2.visible=true;
  b2.scale=0.43;
  start=start+1
  turn=1
  b22=2;
}
if(turn==2 && mousePressedOver(b3)&&b33==0){
  b3.addImage(o)
  b3.visible=true;
  b3.scale=0.43;
  start=start+1
  turn=1
  b33=2;
}
if(turn==2 && mousePressedOver(b4)&&b44==0){
  b4.addImage(o)
  b4.visible=true;
  b4.scale=0.43;
  start=start+1
  turn=1
  b44=2;
}
if(turn==2 && mousePressedOver(b5)&&b55==0){
  b5.addImage(o)
  b5.visible=true;
  b5.scale=0.43;
  start=start+1
  turn=1
  b55=2;
}
if(turn==2 && mousePressedOver(b6)&&b66==0){
  b6.addImage(o)
  b6.visible=true;
  b6.scale=0.43;
  start=start+1
  turn=1
  b66=2;
}
if(turn==2 && mousePressedOver(b7)&&b77==0){
  b7.addImage(o)
  b7.visible=true;
  b7.scale=0.43;
  start=start+1
  turn=1
  b77=2;
}
if(turn==2 && mousePressedOver(b8)&&b88==0){
  b8.addImage(o)
  b8.visible=true;
  b8.scale=0.43;
  start=start+1
  turn=1
  b88=2;
}
if(turn==2 && mousePressedOver(b9)&&b99==0){
  b9.addImage(o)
  b9.visible=true;
  b9.scale=0.43;
  start=start+1
  turn=1
  b99=2;
}
 //line for if O wins

                //horizontal
                if(b11==2 && b22==2 && b33==2){
                  game="end"
                  text("O wins",200,50)
                  strokeWeight(5)
                  stroke("blue")
                  line(50,100,350,100)

                }
                if(b44==2 && b55==2 && b66==2){
                  game="end"
                  text("X wins",200,50)
                  strokeWeight(5)
                  stroke("blue")
                  line(50,200,350,200)
                }
                if(b77==2 &&b88==2 &&b99==2){
                  game="end"
                  text("O wins",200,50)
                  strokeWeight(5)
                  stroke("blue")
                  line(50,300,350,300)
                }
                //diagonal
                if(b11==2 && b55==2 && b99==2){
                  game="end"
                  text("O wins",200,50)
                  strokeWeight(5)
                  stroke("blue")
                  line(50,50,350,350)
                }
                if(b33==2 && b55==2 && b77==2){
                  game="end"
                  text("O wins",200,50)
                  strokeWeight(5)
                  stroke("blue")
                  line(350,50,50,350)
                }
                //vertical
                if(b11==2 && b44==2 && b77==2){
                  game="end"
                  text("O wins",200,50)
                  strokeWeight(5)
                  stroke("blue")
                  line(100,50,100,350)
                }
                if(b22==2 && b55==2 && b88==2){
                  game="end"
                  text("O wins",200,50)
                  strokeWeight(5)
                  stroke("blue")
                  line(200,50,200,350)
                }
                if(b33==2 && b66==2 && b99==2){
                  game="end"
                  text("O wins",200,30)
                  strokeWeight(5)
                  stroke("blue")
                  line(300,50,300,350)
                }
}
