Grave.Preloader = function(game) {};
Grave.Preloader.prototype = {
	preload: function() {
    //Vorausladen aller Assets
    this.load.image('Red', 'assets/red-square.png');
    this.load.image('Blue', 'assets/blue-circle.png');
    this.load.image('Purple', 'assets/purple-multi.png');
    this.load.image('Green', 'assets/green-dot.png');
    this.load.image('Background', 'assets/background-two.png');
    this.load.image('Wall', 'assets/red-bar-vertical.png');
    this.load.image('Ground', 'assets/red-bar.png');
    this.load.image('StartGoal', 'assets/goal.png');
    this.load.image('Waypoint', 'assets/waypoint.png');
    this.load.image('Tower1', 'assets/tower-1.png');
    this.load.image('Startbutton', 'assets/start-button.png');
    this.load.image('Life', 'assets/life.png');
    this.load.image('bflost', 'assets/bflost.png');
    this.load.image('bullet', 'assets/bullet.png');
    this.load.image('Ende', 'assets/ende.png');
    this.load.image('menu-background', 'assets/menu-background.png');
    this.load.image('menu-startbutton', 'assets/menu-startbutton.png');
    this.load.image('mainlevel-background', 'assets/mainlevel-background.png');
    this.load.image('mainlevel-vertical', 'assets/mainlevel-vertical.png');
    this.load.image('mainlevel-horizontal', 'assets/mainlevel-horizontal.png');
    this.load.image('mainlevel-controlpanel', 'assets/mainlevel-controlpanel.png');
    this.load.image('mainlevel-incomeframe', 'assets/mainlevel-incomeframe.png');
    this.load.image('mainlevel-unitspawn-header', 'assets/mainlevel-unitspawn-header.png');

    this.load.audio('Explosion', 'assets/explosion.mp3');
    this.load.audio('Towershot', 'assets/towershot.mp3');

    this.stage.disableVisibilityChange = true;
    },
    create: function() {
    this.game.state.start('Menu');
    }
};