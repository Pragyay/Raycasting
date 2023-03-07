let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

// ctx.strokeStyle = "yellow";

// initial position of light source 
let source_pos_x = 300,
    source_pos_y = 300;

// length of ray
let r = 4000;

// no of rays and the angle between them
let no_of_rays = 450;
let increment = Math.PI*2 / no_of_rays;

// generating walls
let no_of_walls = 5;
let walls = [];
for(let i=0; i<no_of_walls; i++){
    let x1 = Math.random()*width,
        y1 = Math.random()*height,
        x2 = Math.random()*width,
        y2 = Math.random()*height;
    walls.push(new Boundary(x1,y1,x2,y2));
}

update();


function update(){
    ctx.clearRect(0,0,width,height);

    // rendering walls for every frame
    for(let i = 0; i < no_of_walls; i++){
        walls[i].draw();
    }

    for(let angle = 0; angle <= Math.PI*2; angle += increment){

        // generate an infinte ray (infinite since r is very large)
        let ray = new Ray(source_pos_x, source_pos_y, r*Math.cos(angle), r*Math.sin(angle));
        
        let least_distance = 1;
        let closest_pt_of_intersection = [];

        // if no_intersections = true, ray drawn to infinity,
        // else, ray drawn till closest point of intersection
        let no_intersections = true;

        // looping through every wall in walls array to find the closest wall to 
        // the ray, if any
        for(let i=0; i<no_of_walls; i++){
            let intersects = ray.intersect(walls[i]);

            // if intersects is a non-null value:
            if(intersects){

                no_intersections = false;
                
                let distance = intersects[2];
                if(distance < least_distance){
                    least_distance = distance;
                    closest_pt_of_intersection[0] = intersects[0];
                    closest_pt_of_intersection[1] = intersects[1];
                }
            }
        }

        // if no intersections, draw the ray to infinity
        if(no_intersections){
            ray.draw(); 
        }
        //otherwise, draw it to the closest pt. of intersection
        else{
            let r = new Ray(source_pos_x, source_pos_y, closest_pt_of_intersection[0], closest_pt_of_intersection[1]);
            r.draw();
        }
        
    }
    requestAnimationFrame(update);
}


document.body.addEventListener("mousemove",function(event){
    source_pos_x = event.clientX;
    source_pos_y = event.clientY;
});


