function azizship(p) {
    let y = 0;
    let x = 0;
    let yonalish = "up";

    for (let i = 0; i < p.length; i++) {
        if (p[i] == "R") {

            if (yonalish == "up") {
                yonalish = "right"
            }
            else if(yonalish == "right"){
                yonalish = "down";
            }
            else if(yonalish == "down"){
                yonalish = "left";
            }
            else if(yonalish == "left"){
                yonalish = "up";
            }
            
        }
        else if (p[i] == "L") {
            if (yonalish == "up") {
                yonalish = "left";
            }
            else if(yonalish == "left"){
                yonalish = "down";
            }
            else if (yonalish == "down") {
                yonalish = "right";                
            }
            else if(yonalish == "right"){
                yonalish = "up"
            }
        }
        else if (p[i] == "A") {
            if (yonalish == "up") {
                y--;
            }
            else if(yonalish == "down"){
                y++;
            }
            else if(yonalish == "right"){
            x++;
            }
            else if(yonalish == "left"){
                x--;
            }
        }
        
    }
    return "X: "+x+", y: "+y+", direction: "+yonalish+" "
}

console.log(azizship("RAAAAAAAAAAALALLAAAAAAAAAALRRAA"))