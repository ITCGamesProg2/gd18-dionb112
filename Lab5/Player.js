class Player
{
    /**
    * Constructor function for Player 'class'
    * @param {Number} x x coord for starting position
    * @param {Number} y y coord for starting position
    * @param {Number} width width to create square, 42
    * @param {Number} height height to create square, 42
    * @param {Number} colour rgb values in range 0 - 255
    */
    constructor(x, y, width, height, colour)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.colour = colour;
    }
    /**
    * function for our square class, clears canvas and draws the square
    * @param {Context} ctx context for the html canvas element, '2D'
    */
    draw(ctx)
    {
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
    /**
    * function for square class to move the square by an offset after key is pressed
    * @param {Number} x ammount to move along x axis
    * @param {Number} y ammount to move along y axis
    */
    move(x,y)
    {
        this.x += x;
        this.y += y;
    }
    checkCollision(e)
    {
        var collides = false;
        if ((this.x < e.x + e.width) &&
            (this.x + this.width > e.x) &&
            (this.y + this.height > e.y) &&
            (this.y <e.y +e.height))
        {
            collides = true;
            console.log('collision');
        }
        return collides;
    }
}
