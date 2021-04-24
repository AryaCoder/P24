class Iron {
    constructor(x, y) {
      var options = {
        'density':40,
        'friction': 5,
        'restitution':0.01
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 100;
      this.height = 20;
      World.add(world, this.body);
    };
    display(){
      
        var pos = this.body.position;
        
        var angle = this.body.angle;
    
        
  
      push();
    translate(pos.x, pos.y);
    rotate(angle);
      
      strokeWeight(3);
      stroke('black')
      fill('grey')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  