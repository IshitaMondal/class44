class SlingShot{
    constructor(bodyA, bodyB){
        console.log(bodyA);
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 1,
            length: 10
        }
        
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        var posA=this.sling.bodyA.position;
        var posB=this.sling.bodyB.position;

        stroke("yellow");
        strokeWeight(5);

        line(posA.x,posA.y,posB.x,posB.y);
    }
}