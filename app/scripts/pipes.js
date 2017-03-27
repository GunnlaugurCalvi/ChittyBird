window.Pipes = (function () {
    'use strict';

    var pipeid = 0;
    var gapHeight = 20;
    var spawner;

    var Pipes = function (el, game) {
        this.el = el;
        this.game = game;
    };
    Pipes.prototype.spawnPipe = function() {
        pipeid++;
        var pipetop = Math.floor(((Math.random() * 0.8) + 0.2) * 100);
        var pipebottom = 100 - pipetop + gapHeight;
        var pipe = '<div class="pipe" pipe-id="' + pipeid + '" style="right: ' + -200 + 'px "><div style="bottom: ' + pipetop + '% " class="pipetop"></div><div style="top:' + pipebottom + '%" class="pipebottom"></div></div>';
        this.el.append(pipe);
    };
    Pipes.prototype.reset = function() {
        this.el.find('.pipe').remove();
        spawner = setInterval( (() => this.spawnPipe()), 1750 );
    };


    Pipes.prototype.deletePipes = function() {
        var firstPipe = this.el.find('.pipe').first();
        if(parseInt(firstPipe.css('right')) > this.el.width()) {
            firstPipe.remove();
        }
    };

    Pipes.prototype.stop = function() {
        clearInterval(spawner);
    };

    Pipes.prototype.onFrame = function (delta) {
        // Move all pipes
        this.el.find('.pipe').css('right', '+=5em');
        this.deletePipes();
    };

    return Pipes;
})();
