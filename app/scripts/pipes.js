window.Pipes = (function () {
    'use strict';


    var pipeId = 0;


    var Pipes = function (el, game) {
        this.el = el;
        this.game = game;
    };


	Pipes.prototype.reset = function() {
        // WOW
	};



    // function spawnPipe() {
    //     pipeId++;
    //     pipeTopHeight = Math.floor(Math.random() * ($window.height() - 250)) + 50;
    //     pipeBottomHeight = $window.height() - (pipeTopHeight + gapHeight);
    //     pipe = '<div class="pipe" pipe-id="' + pipeId + '"><div style="height: ' + pipeTopHeight + 'px" class="topHalf"></div><div style="height:' + pipeBottomHeight + 'px" class="bottomHalf"></div></div>';
    //     $window.append(pipe);
    // }


    Pipes.prototype.onFrame = function (delta) {
        // this.pos.y += (delta * SPEED) / 4;

        // // Update UI
        // this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
    };

    return Pipes;
})();
