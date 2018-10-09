class TitleScene
{
    constructor(title) 
    {
        this.title = title;
        this.start();
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
