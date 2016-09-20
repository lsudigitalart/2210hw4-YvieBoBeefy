var speed = 10;

var ed = 100;
var ex = 200;
var ey = 200;

var px1 = 0;
var py1 = 220;
var pd = 200;
var pr = 25;

var px2;
var py2;

var rx = 310;
var ry = 0;
var rw = 20;
var rh = 480;

function setup() {
  createCanvas(640, 480);
  background(184);
}

function draw() {

 background(100);

  if(keyIsPressed) {
    println(key);
  }

    if(key == "a"){
      ex-=speed;
    }

    if(key == "d"){
      ex+=speed;
    }

    if(key == "s"){
      ey+=speed;
    }

    if(key == "w"){
      ey-=speed;
    }

noStroke();
 fill(200);
   rect(rx, ry, rw, rh);

   if((ex+50 > rx) && (ex-50 < rx+rw)){
     ex = 250;
   }
  

 fill(255);
   ellipse(ex, ey, ed);

 fill(255, 174, 0);
   ellipse(px1, py1, pr, pd);

  if(mouseIsPressed){
    px2 = mouseX;
    py2 = mouseY;
  }

  fill(0, 94, 255);
   ellipse(px2, py2, pr, pd);

   if((ex < px1) && (ey < 320) && (ey > 120)){
     ey = py2;
     ex = px2 - 50;
   }

   if((ex > px2 - 40) && (ey < py2 + 100) && (ey > py2 - 100)){
     ey = py1;
     ex = px1 + 50;
   }
}
