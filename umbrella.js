class umbrella{
	constructor(x,y,radius){
		var options={
			isStatic:true,
			restitution:0,
			friction:0.1,
			density:1.2
		}
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.body=Bodies.circle(this.x, this.y, this.radius/2, options);
        World.add(world, this.body);
         
        this.image = loadAnimation("images/walkingFrame/w1.png", "images/walkingFrame/w2.png", "images/walkingFrame/w3.png", "images/walkingFrame/w4.png", "images/walkingFrame/w5.png", "images/walkingFrame/w6.png", "images/walkingFrame/w7.png", "images/walkingFrame/w8.png" )


    }
	display(){
			
			var umbrellapos=this.body.position;		

			push();
			translate(umbrellapos.x, umbrellapos.y);
			imageMode(CENTER)
			strokeWeight(3);
			fill("blue");
			animation(this.image,0,0,this.radius, this.radius);
			pop();
			
    }
}

