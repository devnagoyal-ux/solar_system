class Earth{
    constructor(x,y,width){
        this.width = width;
        this.x = x;
        this.y = y;
        this.body = ellipse(x,y,this.width);
    }

    display(){
  ellipseMode(CENTER);
   translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 500, 300));
  fill(color(0, 0, 255));
  ellipse(this.x,this.y,this.width);
    }
}