window.Pipes = (function () {
    'use strict';

    var pipeid = 0;
    var gapHeight = 40;

    var Pipes = function (el, game) {
        this.el = el;
        this.game = game;
    };
    Pipes.prototype.spawnPipe = function() {
        pipeid++;
        var pipetopHeight = 0-200;
        var pipebottomHeight = this.el.find('.GameCanvas').height();
        var pipe = '<div class="pipe" pipe-id="' + pipeid + '" style="right: ' + 0 + 'px "><div style="height: ' + pipetopHeight + 'px " class="pipetop"></div><div style="height:' + pipebottomHeight + 'px" class="pipebottom"></div></div>';
        this.el.append(pipe);
    };
    Pipes.prototype.reset = function() {
        setInterval( (() => this.spawnPipe()), 1000 );
    };


    Pipes.prototype.deletePipe = function() {
        this.el.find('.pipe').first().remove();
    };


    Pipes.prototype.onFrame = function (delta) {

        // // Update UI
        // this.el.each(function () {
        this.el.find('.pipe').css('right', '+=10em');
        // });

        // this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
    };

    return Pipes;
})();
