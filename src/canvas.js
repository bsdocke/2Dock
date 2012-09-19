/**
 * @author Brandon
 */

function init() {
    var initialSettings = initializeEnvironment("/scripts/platform/settings.xml");
    var elem = document.getElementById('canvasbox');
    
    canvas = elem.getContext('2d');
    player = new Player(30,30,333333);
    g = 1;
    f = 0.25;
    canvas.fillRect(player.x,player.y,10,10);

    level = new Level(1);
    for(var i = 0; i < 50;i++) {
        canvas.fillRect(i*10,390,10,10);
    }

    tick = setInterval(beat,1000/fps);
}

function onKeyDown(e) {
    f = 0;
    var keyPressed = null;
    
    if(window.event) keyPressed = e.keyCode;
    else if(e.which) keyPressed = e.which;


    switch(keyPressed) {
        case 40:
            e.returnValue = false;
            e.preventDefault();
            player.vx = player.vx*0.5;
            break;
        case 38:
            e.returnValue = false;
            e.preventDefault();
            if(player.vy == 0 && 
            	player.prevVY == 0 && 
            	!level.platforms[Math.round(player.x/10)][Math.floor(player.y/10) -1]) {
                player.y -= 2;
                player.vy = -10;;
            }
            break;
        case 37:
            e.returnValue = false;
            e.preventDefault();
            player.vx--;

            break;
        case 39:
            e.returnValue = false;
            e.preventDefault();
            player.vx++;

            break;
    }
    redraw();
    return false;
}

function onKeyUp(e) {
    switch(e.keyCode) {
        case 37:
            f = 0.25;
            break;
        case 39:
            f = 0.25;
            break;
    }
}

document.addEventListener("keydown",onKeyDown,false);
document.addEventListener("keyup",onKeyUp,false);
window.addEventListener("load",init,false);