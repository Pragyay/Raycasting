let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

let source_pos_x = 300,
    source_pos_y = 300;

let b_x1 = 800,
    b_y1 = 200,
    b_x2 = 800,
    b_y2 = 400;

let r = 5000;

let no_of_rays = 300;
let increment = Math.PI*2 / no_of_rays;

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(source_pos_x, source_pos_y, 5, 0, Math.PI*2);
ctx.fill();

ctx.strokeStyle = "white";

let b = new Boundary(700,200, 800, 400);
b.draw();

for(let angle = 0; angle <= Math.PI*2; angle += increment){

    let ray = new Ray(source_pos_x, source_pos_y, r*Math.cos(angle), r*Math.sin(angle));

    let inter = ray.intersect(b);
    if(inter){
        let r = new Ray(source_pos_x, source_pos_y, inter[0], inter[1]);
        r.draw();
    }else{
        ray.draw(); 
    }
    
}


document.body.addEventListener("mousemove",function(event){
    source_pos_x = event.clientX;
    source_pos_y = event.clientY;
});


