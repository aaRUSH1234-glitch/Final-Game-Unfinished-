class Fruits {
    constructor(x,y) {
    
        var options= 
      {
          'restitution':0.8,
      'friction':1.0,
      'density':1.0
      }
        this.body =Bodies.rectangle(x,y,50,50,options);
        this.fruit1 = loadImage("Images/fruit1.png")
        this.fruit2 = loadImage("Images/fruit2.png")
        this.fruit3 = loadImage("Images/fruit3.png")
        this.fruit4 = loadImage("Images/fruit4.png")
        this.width=50
        this.height=50
        
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position; 
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER);
        stroke("green");
        fill(255);
        
        image(this.fruit1,0,0,this.width,this.height)
        stroke("green");
        fill(255);
        
        pop();
    }
    
    }