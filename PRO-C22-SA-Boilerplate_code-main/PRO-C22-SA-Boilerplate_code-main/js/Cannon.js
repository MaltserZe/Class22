class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonimg = loadImage("assets/canon.png");
    this.baseimg = loadImage("assets/cannonBase.png");
  }
  display() {
    push();
    imageMode(CENTER);
    image(this.cannonimg,this.x,this.y,this.width,this.height);
    pop();
    image(this.baseimg,70,20,200,200);
    noFill();
    
  }
}
