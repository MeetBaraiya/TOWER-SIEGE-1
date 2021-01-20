class Block {
    constructor (x,y){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':0.1
        }
        this.body = Bodies.rectangle (x,y,40,55,options);
        this.width = 40;
        this.height= 55;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect (pos.x,pos.y,this.width,this.height)
    }
}