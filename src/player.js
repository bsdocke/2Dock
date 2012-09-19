/**
 * Player class.
 * This class defines a prototype for a character that the user can control
 * via the keyboard
 * @author Brandon
 */

function Player(startX,startY,color) {
    this.x = startX;
    this.y = startY;
    this.color = color;
    this.width = 10;
    this.height = 10;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
}