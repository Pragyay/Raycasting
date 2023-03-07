class Ray{
    constructor(x, y, x2, y2){
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
    }

    intersect(boundary){
        const x1 = this.x,
            y1 = this.y,
            x2 = this.x2,
            y2 = this.y2;

        const x3 = boundary.x1,
            y3 = boundary.y1,
            x4 = boundary.x2,
            y4 = boundary.y2;
        
        const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if(denom == 0){
            // boundary and ray parallel
            return;
        }

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denom;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denom; 

        if(t > 0 && t < 1 && u  > 0 && u < 1){
            let x = x1 + t * (x2 - x1);
            let y = y1 + t * (y2 - y1);

            return [x,y];
        }else {
            return;
        }

    }

    draw(){
        ctx.beginPath();
        ctx.lineWidth = 0.4;
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
    }
}