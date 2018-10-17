/**
 * @author Dion Buckley
 * Lab to setup a game loop,
 * add collision detection
 * add collision response
 */

function main()
{
    var game = new Game();
    window.requestAnimationFrame(game.update());
    document.addEventListener("keydown", clickHandler.bind(null, game));
}

/** function called to handle clicks,
 *  goes to next scene and renders it
 */
function clickHandler(game, e)
{
    game.sceneManager.goToNextScene();
    game.sceneManager.render(game.ctx);
}