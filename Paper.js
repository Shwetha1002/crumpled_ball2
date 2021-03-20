class Paper{
  constructor(x, y, radius ) {
      var options = {
         'isStatic' : false,
          'restitution':0.8,
          'friction':0.5,
          'density':1

      }
              this.radius = radius;

      this.body = Bodies.circle(x, y, radius,options);
      
      this.image = loadImage("crumpled_paper.png");
      World.add(world, this.body);
    }
    display(){
      
      
      var pos =this.body.position;
   push();
   translate( pos.x, pos.y)
   imageMode(CENTER);
        //     source image, x,y, width, height
        image(this.image, 0, 0, 50, 50);
      
      pop();
    }
}