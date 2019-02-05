/**
 * @author Dion Buckley
 * Lab to create a SceneManager for use in a game
 * main entry point
 * create game instance and add even listener for clicks
 */
function main()
{ 
    var game = new Game();
    game.initWorld();
    game.update();
}