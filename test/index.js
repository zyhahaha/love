var canvas = $('#canvas');
canvas.click(function(e) {
    var offset = canvas.offset(),
        x,
        y;
    x = e.pageX - offset.left;
    y = e.pageY - offset.top;
    if (seed.hover(x, y)) {
        myAuto.play();
        hold = 0;
        canvas.unbind('click');
        canvas.unbind('mousemove');
        canvas.removeClass('hand');
    }
})
