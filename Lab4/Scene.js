class Scene
{
    constructor(title) 
    {
        this.title = title;
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
    }
}

class TitleScene extends Scene
{
    constructor(title, colour)
    {
        super(title)
        this.colour = colour;
    }
    render(ctx)
    {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);  
        //document.body.style.backgroundColor = this.colour;
        ctx.fillStyle = this.colour;
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
        ctx.fillStyle = 'BLACK';
        ctx.fillText(this.title, 7, 42);

    }
}
