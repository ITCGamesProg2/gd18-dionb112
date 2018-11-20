function is_touch_device()
{
    return 'ontouchstart' in window;
}
function onTouchStart(e)
{
    ctx.clearRect(0,0,CANVAS_SIZE, CANVAS_SIZE);  
    time1 = new Date();
    e.preventDefault();
    var touches = e.touches[0];
    swipeStartX = touches.clientX;
    swipeStartY = touches.clientY;  
    swipeMoveX = swipeStartX;
    swipeMoveY = swipeStartY;                           
}
function onTouchMove(e)
{
    
    e.preventDefault();
    var changedTouches = e.changedTouches[0];
    ctx.lineWidth = 4.2;
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(swipeMoveX , swipeMoveY);
    ctx.lineTo(changedTouches.clientX, changedTouches.clientY);
    ctx.stroke();
    swipeMoveX = changedTouches.clientX;
    swipeMoveY = changedTouches.clientY;  
}
function onTouchEnd(e)
{
    var time2 = new Date();
    var swipeEndX;
    var swipeEndY;
    var swipeTime = time2 - time1;
    e.preventDefault();
    var changedTouches = e.changedTouches[0];
    swipeEndX = changedTouches.clientX;
    swipeEndY = changedTouches.clientY;
    // detect and resolve swipe
    var swipeLength = Math.sqrt(Math.pow(swipeEndX - swipeStartX, 2) + Math.pow(swipeEndY - swipeStartY, 2));
    if (swipeTime < 1200 && swipeLength > 142)
    {
        ctx.fillText(swipeTime +"ms Swipe detected, length: " + swipeLength, 42, 42);
    } 
}