class Particles {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
            
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill(this.color)
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r*2,this.r*2);
        pop();
    }

};