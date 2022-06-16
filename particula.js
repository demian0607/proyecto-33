class Particula{
    constructor (x,y){
        var options ={
            restitution: 1,
            isStatic: false,
        }
        this.body = Bodies.circle(x,y,10,options);
        this.color = color("red");
        World.add(world,this.body);

    }

    display(){
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(this.color)
        ellipse(0,0,10);
        pop();

        
    }
}