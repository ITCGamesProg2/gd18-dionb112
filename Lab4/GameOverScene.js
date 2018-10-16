class GameOverScene extends Scene
{
    constructor(title, colour)
    {
        super(title, colour);
    }
    render(ctx)
    {
        ctx.font = '55px courier';
        super.render(ctx)
    }
}

