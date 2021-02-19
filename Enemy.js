class Enemy {
constructor(x,y) {

    var options= 
  {
      'restitution':0.5,
        'friction':1.0,
        'density':1.0
  }
    this.body =Bodies.rectangle(x,y,50,50,options);
    this.enemy1 = loadImage("Images/alien1.png")
    this.enemy2 = loadImage("Images/alien2.png")
    this.width=50;
    this.height=50;
    
    World.add(world,this.body);
}
display() {
    var pos = this.body.position; 
    var angle = this.body.angle;
    //this.body.velocity.x = -2;
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    imageMode(CENTER);
    //stroke("green");
    //fill(255);
    //if(frameCount % 60 ==0)
    image(this.enemy1,0,0,this.width,this.height);
    //else
    //image(this.enemy2,0,0,this.width,this.height);
    pop();
}

}