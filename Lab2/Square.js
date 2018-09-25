function Square(x, y, width, height, colour)
{
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = colour;
    ctx.fillRect(x,y,width,height);
    ctx.stroke();
}

