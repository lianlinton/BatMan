class drop{
	constructor(x,y,radius){
		var options={
			isStatic: false,
			restitution:0,
			friction:0.1,
			density:1.2
		}
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.body=Bodies.circle(this.x, this.y, this.radius/2, options);
 		World.add(world, this.body);


    }
	display(){
			
			var droppos=this.body.position;		

			push();
			translate(droppos.x, droppos.y);
			ellipseMode(CENTER)
			strokeWeight(3);
			fill("blue");
			ellipse(0,0,this.radius, this.radius);
			pop();
			
    }
    
    update(){
        if (this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,1000), y:random(0,1000)})
        }
    }

}

