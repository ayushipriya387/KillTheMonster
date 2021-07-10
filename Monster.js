class Monster{
    constructor(x,y,r){
var options={
    density:5,
    restitution:0.8,
    frictionAir:0
   
}
this.x = x;
this.y = y;
this.r = r;
this.image=loadImage("images/Monster-01.png");
this.body=Bodies.circle(this.x,this.y,this.r/2,options);

//this.width=width;
//this.height=height;
World.add(world,this.body)
    }
    display(){
        
        push();
        translate(this.body.position.x,this.body.position.y-100);
      imageMode(CENTER);
       image(this.image,0,0,this.r,this.r);
        pop()
    }
}