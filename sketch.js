var earth;
var sun;

var widths = 90;

var fr = 5;

function draw() {
 frameRate(fr);
 var canvas = createCanvas(1200,700); 
  background(200);

  fill(255, 204, 0);
  sun = circle(600,320,widths);
 
  earth = new Earth(0, 0, 50, 50);
  earth.display();
  
  widths = widths + 2;
   fr = fr + 2;

   if(fr > 440){
    clear();
    background(255,204,0);
   
  }
  
} 