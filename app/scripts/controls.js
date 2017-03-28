
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
            .on('tap', this._onMouseDown.bind(this))
            .on('mousedown', this._onMouseDown.bind(this))
            .on('keydown', this._onKeyDown.bind(this));
    };

    Controls.prototype._onKeyDown = function(e) {
        // Remember that this button is down.
        if (e.keyCode === 32) {
            this.keys.jump = true;
            return false;
        }
        else if(e.keyCode === 77){
            document.getElementById('themeAudio').muted = true;

        }
        else if(e.keyCode === 85){
            document.getElementById('themeAudio').muted = false;
        }

    };

    Controls.prototype._onMouseDown = function() {
        this.keys.jump = true;
        return false;
    };

    // Export singleton.
    return new Controls();
})();
