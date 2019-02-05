/**
 * @author Dion Buckley
 * Lab to create a SceneManager for use in a game
 * main entry point
 * create game instance and add even listener for clicks
 */
function main()
{
    var message = {};
    message.type = "test"
    message.data = "hello"
    this.ws = new WebSocket("ws://localhost:8080/wstest");
    // called upon websocket opening
    var that = this;
    this.ws.onopen = function() {
    };
    // called when client recieves message
    this.ws.onmessage = function(e)
    {
        var msg = JSON.parse(e.data)
        if (msg.type == "updateState")
        {
            updateLocalState(msg)
        }
    };
    var game = new Game();
    document.addEventListener("click", clickHandler.bind(null, game));
}
/** function called to handle clicks,
 *  goes to next scene and renders it
 */
function clickHandler(game, e)
{
    game.sceneManager.goToNextScene();
    game.sceneManager.render(game.ctx);
    this.updateState(e);
}
function updateState(e)
{
    var state = {};
    state.type = "updateState"
    state.data = {x: e.offsetX, y: e.offsetY};
    if(this.ws.readyState === this.ws.OPEN){
        this.ws.send(JSON.stringify(state))
    }
}
function updateLocalState(msg)
{
    console.log(msg.data)
}