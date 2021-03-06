/**
 * Constructor function for Square 'class'
 * @param {Number} x random x coord for starting position
 * @param {Number} y random y coord for starting position
 * @param {Number} width width to create square, 80
 * @param {Number} height height to create square, 80
 * @param {List} colour rgb values in the form of three ints
 */
function Square(x, y, width, height, colour)
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
Square.prototype.draw = function(ctx)
{
    ctx.clearRect(0,0,canvas.width, canvas.height);  
    ctx.fillStyle = this.colour;
    ctx.fillRect(this.x,this.y,this.width,this.height);

}

/**
 * function for square class to move the square by an offset after key is pressed
 * @param {Number} x ammount to move along x axis
 * @param {Number} y ammount to move along y axis
 */
Square.prototype.move = function(x, y)
{
    this.x += x;
    this.y += y;
}

