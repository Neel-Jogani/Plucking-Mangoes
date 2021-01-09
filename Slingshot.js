class Slingshot{
    constructor(body, pointA){
        var option={
            bodyA: body,
            pointB: pointA,
            stiffness: 0.04,
            length: 1
        }
        
        this.bodyA=body
            this.pointB=pointA
            this.slingshot=Constraint.create(option)
            World.add(world,this.slingshot)
        }
    
        attach(body){
            this.slingshot.bodyA=body;
        }
    
        fly() {
            this.slingshot.bodyA=null;
        }
    
        display(){
            if(this.slingshot.bodyA){
                var pointA=this.bodyA.position;
                var pointB=this.pointB
    
                strokeWeight(2);		
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
        }
    }