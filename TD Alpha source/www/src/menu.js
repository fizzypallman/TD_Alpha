Grave.Menu = function(game) {};
Grave.Menu.prototype = {
	create: function() {
		this.add.sprite(0, 0, 'menu-background');
	//	this.gameTitle = this.add.sprite(Grave._WIDTH*0.5, 40, 'title'); //
	//	this.gameTitle.anchor.set(0.5,0); //
		this.startButton = this.add.button(Grave._WIDTH*0.5, 200, 'menu-startbutton', this.startGame, this, 2, 0, 1);
		this.startButton.anchor.set(0.5,0);
		this.startButton.input.useHandCursor = true;

		// button to "read the article"
	},
	startGame: function() {
		this.game.state.start('Mainlevel');
	}
};