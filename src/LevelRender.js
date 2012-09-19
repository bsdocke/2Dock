/**
 * @author Brandon
 */

function Level(id) {
    this.id = id;
    this.platforms = new Array(canvas_height/10);

    for(var i = 0; i < 40; i++) {
        this.platforms[i] = new Array(canvas_width/10);
    }

    for(var j = 0; j < 50;j++) {
        this.platforms[39][j] = {
            x:j*10,
            y:390,
            width: 10,
            height: 10
        };

    }
    this.platforms[35][20] = {
        width:10,
        height:10,
        x:200,
        y:350
    };
    this.platforms[35][22] = {
        width:10,
        height:10,
        x:220,
        y:350
    };
    this.platforms[35][23] = {
        width:10,
        height:10,
        x:230,
        y:350
    };
    this.platforms[35][24] = {
        width:10,
        height:10,
        x:240,
        y:350
    };
    this.platforms[35][21] = {
        width:10,
        height:10,
        x:210,
        y:350
    };
    this.platforms[33][21] = {
        width:10,
        height:10,
        x:210,
        y:330
    };
    this.platforms[33][21] = {
        width:10,
        height:10,
        x:210,
        y:330
    };
    this.platforms[34][20] = {
        width:10,
        height:10,
        x:200,
        y:340,
    };
    this.platforms[34][21] = {
        width:10,
        height:10,
        x:210,
        y:340,
    };
    this.platforms[34][22] = {
        width:10,
        height:10,
        x:220,
        y:340,
    };
    this.platforms[34][23] = {
        width:10,
        height:10,
        x:230,
        y:340,
    };
    this.platforms[34][24] = {
        width:10,
        height:10,
        x:240,
        y:340,
    };
    this.platforms[33][20] = {
        width:10,
        height:10,
        x:200,
        y:330,
    };
    this.platforms[33][21] = {
        width:10,
        height:10,
        x:210,
        y:330,
    };
    this.platforms[33][22] = {
        width:10,
        height:10,
        x:220,
        y:330,
    };
    this.platforms[33][23] = {
        width:10,
        height:10,
        x:230,
        y:330,
    };
    this.platforms[33][24] = {
        width:10,
        height:10,
        x:240,
        y:330,
    };
    
    this.platforms[38][18] = {
        width:10,
        height:10,
        x:180,
        y:380,
    };

}