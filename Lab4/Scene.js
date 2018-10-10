class Scene
{
    constructor(title, colour) 
    {
        this.title = title;
        this.colour = colour;

    }
    start()
    {
        console.log(this.title + "  starting");
    }
    stop()
    {
        console.log(this.title + "  stopping");
    }
    render(ctx)
    {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);  
        ctx.fillText(this.title, 7, 42);
        ctx.fillStyle = this.colour;
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        ctx.fillStyle = 'BLACK';
        ctx.fillText(this.title, 7, 42);
    }
}

class TitleScene extends Scene
{
    constructor(title, colour)
    {
        super(title, colour);
    }
    render(ctx)
    {
        ctx.font = '22px verdana';
        super.render(ctx)
    }
}

class MenuScene extends Scene
{
    constructor(title, colour)
    {
        super(title, colour);
    }
    render(ctx)
    {
        ctx.font = '33px sans-serif';
        super.render(ctx)
    }
}
