const CANVAS_SIZE = 1000;
/**
 * @author Dion Buckley
 * Lab to handle basic touch events
 * use device sim
 * then more advanced touch events
 */
// Patryk - it's good but you could have made this with greatly simplified code
// Dion - I should take this one board, even as I was creating this based on the linked 
// mozilla developer touch event page I thought it seemed overly complex and 
// chose to simplify certain elements from that page in my own implementation
function main()
{
    this.ongoingTouches = [];
    this.time1 = 0;
    this.swipeStartX = 0;
    this.swipeStartY = 0;
    this.ctx = {};   
    var canvas = document.createElement("canvas");

    // this will report false while running on a non-touch device and true otherwise
    console.log(is_touch_device());
    canvas.id = 'mycanvas';
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    canvas.style="border:2px solid"
    ctx = canvas.getContext("2d");
    ctx.font = '32px arial';
    document.body.appendChild(canvas);
    canvas.addEventListener("touchstart", onTouchStart);  
    canvas.addEventListener("touchmove", onTouchMove);  
    canvas.addEventListener("touchend", onTouchEnd);  
}
