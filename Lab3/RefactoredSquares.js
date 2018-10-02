/**
 * main is the entry point for Javascript programs.
 *
 */
//Author 
 //Savage work!!!
function main()
{
    //const
    MOVEMENT = 42;
    initCanvas();
    window.addEventListener("keydown", function(e) {
        // Space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);    
    document.addEventListener("keydown", keyDownHandler);
}

/**
 * function that takes an event for key down, and checks 
 * to see if any of the arrow keys were the pressed one.
 * If so calls the move and draw functions on square,
 * passing in values as appropriate.
 * @param {Object} e listener event waiting for key press
 */
function keyDownHandler(e)
{
    switch (e.keyCode)
    {
    case 38:
        sq.move(0,-MOVEMENT);
        sq.draw(ctx); 
        break;
    case 37:
        sq.move(-MOVEMENT, 0);
        sq.draw(ctx);  
        break;
    case 39:
        sq.move(MOVEMENT, 0);
        sq.draw(ctx);  
        break;
    case 40:
        sq.move(0, MOVEMENT);
        sq.draw(ctx);  
        break;
    }
}

/**
 * Initialises the canvas - the drawing surface. The canvas
 * is added to the document. When a HTML document is loaded into a
 * browser, it becomes a document object. This document object is
 * the root node of the HTML document and is considered the 'owner' of all other
 * nodes such as forms, buttons, the canvas etc.
 */
function initCanvas()
{
	// Use the document object to create a new element canvas.
	canvas = document.createElement("canvas");
	// Assign the canvas an id so we can reference it elsewhere.
	canvas.id = 'mycanvas';
	canvas.width = 1000;
    canvas.height = 1000;
    canvas.style="border:1px solid"
	// We want this to be a 2D canvas.
    ctx = canvas.getContext("2d");
	// Adds the canvas element to the document.
    document.body.appendChild(canvas);

    sq = new Square(    Math.random() * 1000, Math.random() * 1000, 
                            80, 80, 
                            rgb(Math.random() * 255,Math.random() * 255,Math.random() * 255));    
    sq.draw(ctx);    
}



    /**
 * Helper function that clamps value between min and max and returns value.
 * Example: clamp(10, 1, 3) will return 3
 * @param {Integer} value integer value to be clamped.
 * @param {Integer} min lower range value.
 * @param {Integer} max upper range value.
* @return {Integer} min if value is less than min, max if max is less than value, otherwise value.
 */
function clamp(value, min, max)
{
    if(max<min) {
        var temp = min;
        min = max;
        max = temp;
    }
    return Math.max(min, Math.min(value, max));
}


/**
 * Helper function that returns a string of the form 'rgb(r,g,b)' where
 * r,g and b are numeric values.
 * @param {Number} r assumed numeric value for red.
 * @param {Number} g assumed numeric value for green.
 * @param {Number} b assumed numeric value for blue.
* @return {String} a string of the form 'rgb(r,g,b)' where r,g and b are integers clamped between 0 and 255.
 */

function rgb(r, g, b)
{
    return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

