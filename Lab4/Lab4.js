function main()
{
    this.game = new Game();
    document.addEventListener("click", clickHandler);
}
function clickHandler(e)
{
    game.sceneManager.goToNextScene();
    game.sceneManager.render(game.ctx);
}