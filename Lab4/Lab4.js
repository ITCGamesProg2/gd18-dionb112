/**
 * @author Dion Buckley
 * Lab to create a SceneManager for use in a game
 * main entry point
 * create game instance and add even listener for clicks
 */
function main()
{
    this.game = new Game();
    document.addEventListener("click", clickHandler);
}
/** function called to handle clicks,
 *  goes to next scene and renders it
 */
function clickHandler(e)
{
    game.sceneManager.goToNextScene();
    game.sceneManager.render(game.ctx);
}