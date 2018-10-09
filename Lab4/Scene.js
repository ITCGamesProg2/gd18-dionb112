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
    ctx.fillText(this.title, 7, 42);
    }
}
