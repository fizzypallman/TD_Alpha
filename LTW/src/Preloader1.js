Grave.Preloader = function(game) {};
Grave.Preloader.prototype = {
	preload: function() {
    //Vorausladen aller Assets
    this.load.image('Red', 'assets/RedSquare.png');
    this.load.image('Blue', 'assets/BlueCircle.png');
    this.load.image('Purple', 'assets/PurpleMulti.png');
    this.load.image('Background', 'assets/Background2.png');
    this.load.image('Wall', 'assets/RedBarV.png');
    this.load.image('Ground', 'assets/RedBar.png');
    this.load.image('StartGoal', 'assets/Goal.png');
    this.load.image('Waypoint', 'assets/Waypoint.png');
    this.load.image('Tower1', 'assets/Tower1.png');
    this.load.image('Startbutton', 'assets/Startbutton.png');
    this.load.image('Life', 'assets/Life.png');
    this.load.image('bflost', 'assets/bflost.png');
    this.load.image('bullet', 'assets/bullet.png');
    this.load.image('Ende', 'assets/Ende.png');

    this.load.audio('Explosion', 'assets/Explosion.mp3');
    this.load.audio('Towershot', 'assets/Towershot.mp3');

    this.stage.disableVisibilityChange = true;
    },
    create: function() {
    this.game.state.start('Game');
    }
};