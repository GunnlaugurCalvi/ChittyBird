window.Player = (function() {
	'use strict';

	var Controls = window.Controls;

	// All these constants are in em's, multiply by 10 pixels
	// for 1024x576px canvas.
	var SPEED = 30; // * 10 pixels per second
	var WIDTH = 5;
	var HEIGHT = 5;
	var INITIAL_POSITION_X = 30;
	var INITIAL_POSITION_Y = 25;
	var GRAVITY = 1.05;


	var Player = function(el, game) {
		this.el = el;
		this.game = game;
		this.pos = { x: 0, y: 0 };
		this.currSpeed = 0;
		INITIAL_POSITION_X = this.el.width()/4;
		INITIAL_POSITION_Y = this.el.height()/4;
	};

	Player.prototype.jump = function() {
		this.el.stop().animate({
			top: 0
		}, {
			duration: Infinity
		});
	};

	/**
	 * Resets the state of the player for a new game.
	 */
	Player.prototype.reset = function() {
		this.pos.x = INITIAL_POSITION_X;
		this.pos.y = INITIAL_POSITION_Y;
		this.currSpeed = SPEED;
		this.WIDTH = this.el.find('.Player').width();
	};

	Player.prototype.onFrame = function(delta) {
		if (Controls.keys.jump) {
			this.pos.y -= 5;
			if(this.game.state === 0) {
			}
			this.jump();
			this.currSpeed = SPEED;
			// this.pos.y -= (delta * SPEED)*40;
		}

		// Gravity
		this.currSpeed = this.currSpeed * GRAVITY;
		this.pos.y += (delta * this.currSpeed)/4;

		this.checkCollisionWithBounds();

		Controls.keys = {};

		// Update UI
		this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
	};

	Player.prototype.checkCollisionWithBounds = function() {
		if (this.pos.y + HEIGHT > this.game.WORLD_HEIGHT) {
			return this.game.gameover();
		}
	};

	return Player;

})();
