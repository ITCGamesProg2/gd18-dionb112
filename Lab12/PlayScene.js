class PlayScene extends Scene
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