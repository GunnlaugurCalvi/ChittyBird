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
        var pipetopHeight = this.el.height() - 200;
        var pipebottomHeight = $('.GameCanvas').height();
        var pipe = '<div class="pipe" pipe-id="' + pipeid + '"><div style="height: ' + pipetopHeight + 'px" class="pipetop"></div><div style="height:' + pipebottomHeight + 'px" class="pipebottom"></div></div>';
        this.el.append(pipe);
    }



    Pipes.prototype.deletePipe = function() {
        $('.window .pipe').first().remove();
    }


    Pipes.prototype.onFrame = function (delta) {

        // // Update UI
        this.spawnPipe();
        this.el.each(function () {
            this.animate({
                right: '+=160px'
            }, 1300, 'linear');
        });

        // this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
    };

    return Pipes;
})();
