
window.Game = (function() {
	'use strict';
	/**
	 * Main game class.
	 * @param {Element} el jQuery element containing the game.
	 * @constructor
	 */
	
	var Game = function(el) {
		this.el = el;
		this.player = new window.Player(this.el.find('.Player'), this);
		this.pipes = new window.Pipes(this.el.find('.Pipes'), this);
		this.isPlaying = false;

		// Cache a bound onFrame since we need it each frame.
		this.onFrame = this.onFrame.bind(this);
	};

	/**
	 * Runs every frame. Calculates a delta and allows each game
	 * entity to update itself.
	 */
	Game.prototype.onFrame = function() {
		// Check if the game loop should stop.
		if (!this.isPlaying) {
			return;
		}

		// Calculate how long since last frame in seconds.
		var now =+ new Date() / 1000,
				delta = now - this.lastFrame;
		this.lastFrame = now;

		// Calculate screen size
		Game.prototype.WORLD_WIDTH = $('.GameCanvas').width() / 10;
		Game.prototype.WORLD_HEIGHT = $('.GameCanvas').height() / 10;


		// Update game entities.
		this.pipes.onFrame(delta);
		this.player.onFrame(delta);

		// checkPipeCollision
		if (this.checkPipeCollision()) {
			this.gameover();
		}

		// Request next frame.
		window.requestAnimationFrame(this.onFrame);
	};

	/**
	 * Starts a new game.
	 */
	Game.prototype.start = function() {
		this.reset();

		// Restart the onFrame loop
		this.lastFrame = +new Date() / 1000;
		window.requestAnimationFrame(this.onFrame);
		this.isPlaying = true;
	};

	/**
	 * Resets the state of the game so a new game can be started.
	 */
	Game.prototype.reset = function() {
		this.player.reset();
		this.pipes.reset();
	};

	Game.prototype.checkPipeCollision = function() {

		if (this.el.find('.pipe').length) {
			var player = this.el.find('.Player').first();
			var x1 = player.offset().left;
			var y1 = player.offset().top;
			var h1 = player.outerHeight(true);
			var w1 = player.outerWidth(true);
			var b1 = y1 + h1;
			var r1 = x1 + w1;

			var pt = this.el.find('.pipe').first().find('.pipetop');
			var x2 = pt.offset().left;
			var y2 = pt.offset().top;
			var h2 = pt.outerHeight(true);
			var w2 = pt.outerWidth(true);
			var b2 = y2 + h2;
			var r2 = x2 + w2;

			var pb = this.el.find('.pipe').first().find('.pipebottom');
			var x3 = pb.offset().left;
			var y3 = pb.offset().top;
			var h3 = pb.outerHeight(true);
			var w3 = pb.outerWidth(true);
			var b3 = y3 + h3;
			var r3 = x3 + w3;

			if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
				if (b1 < y3 || y1 > b3 || r1 < x3 || x1 > r3) {
					return false;
				}
			}
			return true;

		} else {
			return;
		}


	};


	/**
	 * Signals that the game is over.
	 */
	Game.prototype.gameover = function() {
		this.isPlaying = false;
		this.pipes.stop();
		
		// Should be refactored into a Scoreboard class.
		var that = this;
		var scoreboardEl = this.el.find('.Scoreboard');
		scoreboardEl
			.addClass('is-visible')
			.find('.Scoreboard-restart')
				.one('click', function() {
					scoreboardEl.removeClass('is-visible');
					that.start();
				});
	};

	/**
	 * Some shared constants.
	 */

	return Game;
})();


