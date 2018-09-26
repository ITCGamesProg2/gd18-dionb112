function Square(x, y, width, height, colour)
{
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.colour = colour;


}

Square.prototype.draw = function(ctx)
{
    ctx.fillStyle = this.colour;
    ctx.fillRect(this.x,this.y,this.width,this.height);
}

