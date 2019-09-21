var myInputsManager = {
    leftMouseDown : false,
    rightMouseDown : false,
    middleMouseDown : false,
    traceLive : [2, 0],//limitacion de vida del trazo
    trace : [],
    start : function () {
        let that = myInputsManager;
        $( "#canvas2" ).mousedown(function(event) {
            switch (event.which) {
                case 1:
                    //console.log('left mouse press')
                    that.trace = [];
                    that.trace.push(that.traceLive.slice());
                    that.leftMouseDown = true;
                    break;
                case 2:
                    that.middleMouseDown = true;
                    break;
                case 3:
                    that.rightMouseDown = true;
                    break;
                default:
                    console.log('Error in inputsManager/myInputsManager/start/mousedown');
            }
        });

        $( "#canvas2" ).mousemove(function(event) {
            if (that.leftMouseDown) {
                that.trace.push([event.pageX - parseInt(myGameArea.canvas2.style.left), event.pageY - parseInt(myGameArea.canvas2.style.top)])
                /*var msg = "Move to: ";
                msg += (event.pageX - parseInt(myGameArea.canvas2.style.left)) + ", " + (event.pageY - parseInt(myGameArea.canvas2.style.top));
                console.log(msg)*/
            }
        });

        $( "#canvas2" ).mouseup(function(event) {
            switch (event.which) {
                case 1:
                    //console.log('left mouse stop press')
                    that.leftMouseDown = false;
                    if(that.trace.length > 1) {
                        myGameMechanics.traces.push(that.trace);
                    }
                    break;
                case 2:
                    that.middleMouseDown = false;
                    break;
                case 3:
                    that.rightMouseDown = false;
                    break;
                default:
                    console.log('Error in inputsManager/myInputsManager/start/mouseup');
            }
        });
    }
}