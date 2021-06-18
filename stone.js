class Stone {
    constructor(x, y, width, height) {
      var options ={
        'restitution':0.8,
        'friction': 0.9,
        'density': 12
               
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var stonepos = this.body.position;
      push();
      translate(stonepos.x, stonepos.y);
      strokeWeight(3);
      rectMode(CENTER);
      stroke('black')
      fill('red')
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  