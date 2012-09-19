/*
 * Collision-handling functionality
 */

function gridCollisionCheck() {
    var playRow = Math.floor(player.y/10);
    var playCol = Math.round(player.x/10);
    if(playRow == 39) {
        //  return false;
    }
    if(level.platforms[playRow][playCol] && tbCollision(player,level.platforms[playRow][playCol])) {
        //alert("derp");
        player.vy = 0;
        player.y = ((playRow+1)*10) + 1;
      //  return true;

    }

    if(level.platforms[playRow-1][playCol] && tbCollision(player,level.platforms[playRow-1][playCol])) {
        player.vy = 0;
        player.y = ((playRow+1)*10) + 1;
       // return true;
    }

    if(level.platforms[playRow-1][playCol-1]) {
        if(tbCollision(player,level.platforms[playRow-1][playCol-1])) {
            player.vy = 0;
            player.y = ((playRow+1)*10) + 1;
          //  return true;
        } else if(lrCollision(player,level.platforms[playRow-1][playCol-1])) {
            player.vx = 0;
            player.x++;
        }
        //return true;
    }

    if(level.platforms[playRow-1][playCol+1]) {
        if(tbCollision(player,level.platforms[playRow-1][playCol+1])) {
            player.vy = 0;
            player.y = ((playRow+1)*10) + 1;
            //   return true;
        } else if(lrCollision(player,level.platforms[playRow-1][playCol+1])) {
            player.vx = 0;
            player.x--;
        }
        // return true;
    }

    if(level.platforms[playRow][playCol + 1] && lrCollision(player,level.platforms[playRow][playCol+1])) {
        player.vx = 0;
        player.x --;
        //return true;
    }

    if(level.platforms[playRow][playCol - 1] && lrCollision(player,level.platforms[playRow][playCol-1])) {
        player.vx = 0;
        player.x++;
        //  return true;
    }

    if(level.platforms[playRow + 1][playCol + 1]) {
        if(tbCollision(player,level.platforms[playRow+1][playCol+1]) && lrCollision(player,level.platforms[playRow+1][playCol+1])) {
            player.vy = 0;
            player.y = (playRow*10);
            //     return true;
        } //else if(lrCollision(player,level.platforms[playRow+1][playCol+1])) {
        //    player.vx = 0;
        //    player.x--;
        // }
        //   return true;
    }

    if(level.platforms[playRow + 1][playCol] && tbCollision(player,level.platforms[playRow+1][playCol])) {

        player.vy = 0;
        player.y = (playRow*10);
        //return true;

    }

    if(level.platforms[playRow + 1][playCol - 1]) {
        if(tbCollision(player,level.platforms[playRow+1][playCol-1]) && lrCollision(player,level.platforms[playRow+1][playCol-1])) {
            player.vy = 0;
            player.y = (playRow*10);
            //  return true;
        } //else if(lrCollision(player,level.platforms[playRow+1][playCol-1])) {
        // player.vx = 0;
        // player.x++;
        //return true;
        // }
    }

}

function lrCollision(objA,objB) {
    var leftA
    var leftB;
    var rightA
    var rightB;

    var res = null;

    leftA = objA.x;
    leftB = objB.x;

    rightA = objA.x + objA.width;
    rightB = objB.x + objB.width;

    if(rightA < leftB) {
        res = false;
    } else if(leftA > rightB) {
        res = false;
    } else {
        res = true;
    }
    return res;
}

function tbCollision(objA,objB) {
    var topA
    var topB;
    var bottomA
    var bottomB;

    topA = objA.y;
    topB = objB.y;

    bottomA = objA.y + objA.height;
    bottomB = objB.y + objB.height;

    if(bottomA < topB) {
        return false;
    }
    if(topA > bottomB) {
        return false;
    }
    return true;
}