/**
 * @author Brandon
 */

function beat() {
    player.prevVY = player.vy;
    if(player.y + 1 >= 390) {
        player.y = 389;
        player.vy = 0;
    } else {
        if(player.vy <10) player.vy += g;
        else player.vy = 10;
        
        player.y += player.vy;
    }

    if(Math.round(player.vx) > 0) player.vx -= f;
 	else if(Math.round(player.vx) < 0) player.vx += f; 
    else player.vx = 0;
    
    if(player.vx > 6) player.vx = 6;

    if(player.vx < -6) player.vx = -6;

    if(player.x <= 1) {
        player.x = 1;
        player.vx = 0.5;
    } else if(player.x + 10 >= 498) {
        player.x = 487;
        player.vx = -0.5;
    }
    
    gridCollisionCheck();
    player.x += player.vx;
    redraw();
}

function redraw() {
    canvas.clearRect(0,0,500,400);
    canvas.fillRect(player.x,player.y,10,10);
    for(var i = 0; i < 40;i++) {
        for(var j = 0; j < 50;j++) {
            if(level.platforms[i][j]) {
                canvas.fillRect(j*10,i*10,10,10);
            }
        }
    }
}