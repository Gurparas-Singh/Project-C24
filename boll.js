class boll {
    constructor(x, y,radius) {
      this.body = Bodies.circle(x, y, radius, {isStatic:false, restitution: 0.3, friction: 0.5, density: 12});
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS);
      var pos =this.body.position;
      fill("red");
      ellipse(pos.x, pos.y, this.radius);
    }
  };
  