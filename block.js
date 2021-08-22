class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)

        World.add(world,this.body)
        
       
        }
        display() { 
            rectMode(CENTER) 
            
           if((this.body.speed)<2.5){
             rect(this.body.position.x,this.body.position.y,this.width,this.height) 
                }
            else{ 
                World.remove(world,this.body) 
            } 
        }
}
