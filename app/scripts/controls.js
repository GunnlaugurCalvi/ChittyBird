
window.Controls = (function() {
    'use strict';



    /**
     * A singleton class which abstracts all player input,
     * should hide complexity of dealing with keyboard, mouse
     * and touch devices.
     * @constructor
     */
    var Controls = function() {
        this._didJump = false;
        this.keys = {};
        $(window)
            .on('mousedown', this._onMouseDown.bind(this))
            .on('mouseup', this._onMouseUp.bind(this))
            .on('keydown', this._onKeyDown.bind(this))
            .on('keyup', this._onKeyUp.bind(this));
    };

    Controls.prototype._onKeyDown = function(e) {
        // Remember that this button is down.
        if (e.keyCode === 32) {
            this.keys['jump'] = true;
            return false;
        }
    };

    Controls.prototype._onKeyUp = function(e) {
        if (e.keyCode === 32) {
            this.keys['jump'] = false;
            return false;
        }
    };

    Controls.prototype._onMouseDown = function(e) {
        this.keys['jump'] = true;
        return false;
    };

    Controls.prototype._onMouseUp = function(e) {
        this.keys['jump'] = false;
        return false;
    };

    // Export singleton.
    return new Controls();
})();
