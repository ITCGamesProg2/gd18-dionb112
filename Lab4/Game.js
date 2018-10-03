function main()
{
    var game = new Game();
    game.init();
    
    // Use the document object to create a new element canvas.
    canvas = document.createElement("canvas");
    // Assign the canvas an id so we can reference it elsewhere.
    canvas.id = 'mycanvas';
    canvas.width = 1000;
    canvas.height = 1000;
    canvas.style="border:2px solid"
    // We want this to be a 2D canvas.
    ctx = canvas.getContext("2d");
    // Adds the canvas element to the document.
    document.body.appendChild(canvas);


}

class Game
{
    constructor() {}
    init()
    {
        window.alert('Initializing Game. . .');
    }
}
