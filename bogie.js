class Bogie{
    constructor(x,y){
        
        this.bogie=Bodies.rectangle(x,y,100,75);
        this.image=loadImage("images/trainBogie.png");
        this.width=120;
        this.height=175;
        World.add(world,this.bogie);

    }
    display(){
        imageMode(CENTER);
        image(this.image,this.bogie.position.x,this.bogie.position.y,this.width,this.height);
    }
}