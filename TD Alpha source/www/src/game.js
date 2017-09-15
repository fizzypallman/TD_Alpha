// Variables
    var Mobs;
    var Walls;
    var StartGoal, goal, start;
    var Startbutton;
    var i;
    var Lifes, gameLost, bflost;
    var fireRate = 100;
    var nextFire = 0;
    var Towers;
    var tower1;
    var bullets;
    var score = 0;
    var scoreText;
    var explosion;
    var towershot;
    var WaypointUp;
    var WaypointRight;
    var WaypointLeft;

// State-Definition
Grave.Game = function(game) {};
Grave.Game.prototype = {

// Definition of game-functions
	create: function() {

    this.physics.startSystem(Phaser.Physics.ARCADE);


    // Tutorial - Level!
this.add.sprite(0, 0, 'Background');
Walls = this.add.group();
Walls.enableBody = true;
StartGoal = this.add.group();
StartGoal.enableBody = true;
WaypointUp = this.add.group();
WaypointUp.enableBody = true;
WaypointRight = this.add.group();
WaypointRight.enableBody = true;
WaypointLeft = this.add.group();
WaypointLeft.enableBody = true;

    // Mobs
    Mobs = this.add.group();
    this.physics.arcade.enable(Mobs);
    Mobs.enableBody = true;

    // Towers
    Towers = this.add.group();
    tower1 = Towers.create(400, 300, 'Tower1');

    // Startbutton
    Startbutton = this.add.button(360, 40, 'Startbutton', this.actionOnClick, this, 2, 1, 0);

    //Endbutton
    Endbutton = this.add.button(30, 570, 'Ende', this.actionOnClick, this, 2, 1, 0);

    // Lifes
    Lifes = this.add.group();
    for (bf = 0; bf < 10; bf++) {
        Lifes.create(330 + 40 * bf, 185, "Life").scale.setTo(0.1);
    }

    this.add.text(255, 200, 'Lifes:', { fontSize: '32px', fill: '#FFF' });
    bflost = this.add.image(this.world.centerX - 213, this.world.centerY - 284, 'bflost');
    bflost.scale.setTo(0);
    gameLost = this.add.text(270, 50, 'Verloren :\'(', { font: '50pt Arial', fill: '#FFF' });
    gameLost.visible = false;

    // bullet
    bullets = this.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(50, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);

    //Sounds
    explosion = this.add.audio('Explosion');
    towershot = this.add.audio('Towershot');

    this.tutorialLvl();

},

tutorialLvl: function() {

    scoreText = this.add.text(32, 29, 'Erreiche 100 Punkte!', { fontSize: '32px', fill: '#00FF00' })
     // Ground
     var ground = Walls.create(0, this.world.height - 32, 'Ground');
     ground.scale.setTo(2, 2);
     // Ceiling
     var ceiling = Walls.create(0, 0, 'Ground');
     ceiling.scale.setTo(2, 1);
 
     //Sidewalls
     var sidewalls = Walls.create(770, 0, 'Wall');
     sidewalls.scale.setTo(1, 2);
     sidewalls = Walls.create(0, 0, 'Wall');
     sidewalls.scale.setTo(1, 2);
 
     //Midwalls
     var midwall = Walls.create(250, 400, 'Ground');
     midwall.scale.setTo(1.5, 1)
     midwall = Walls.create(0, 300, 'Ground');
     midwall.scale.setTo(1.5, 1);
     midwall = Walls.create(250, 200, 'Ground');
     midwall.scale.setTo(1.5, 1);

    goal = StartGoal.create(700, 80, 'StartGoal');
    start = StartGoal.create(700, 470, 'StartGoal');
    //Waypoints
    WaypointUp.create(120, 485, 'Waypoint');
    WaypointUp.create(670, 350, 'Waypoint');
    WaypointUp.create(120, 250, 'Waypoint');
    WaypointRight.create(120, 350, 'Waypoint');
    WaypointRight.create(120, 115, 'Waypoint');
    WaypointLeft.create(670, 250, 'Waypoint');

},

mainLevel: function() {

},

update: function() {
    Mobs.forEach(function (mob) {
        this.physics.arcade.overlap(mob, WaypointUp, this.turnUp, null, this);
        this.physics.arcade.overlap(mob, WaypointLeft, this.turnLeft, null, this);
        this.physics.arcade.overlap(mob, WaypointRight, this.turnRight, null, this);
        this.physics.arcade.overlap(mob, goal, this.deductLife, null, this);
        this.physics.arcade.overlap(mob, bullets, this.damage, null, this);
        
    }, this);
     if (this.input.activePointer.isDown)
    {
    this.fire();
    }
},

turnUp: function (mob, WaypointUp) {
    mob.body.velocity.y = -100;
    mob.body.velocity.x = 0;
},

turnLeft : function (mob, WaypointUp) {
    mob.body.velocity.y = 0;
    mob.body.velocity.x = -100;
},

turnRight: function (mob, WaypointUp) {
    mob.body.velocity.y = 0;
    mob.body.velocity.x = 100;
},

deductLife: function (mob, goal) {
    Mobs.remove(mob);
    var tempLife = Lifes.getFirstExists();
    this.add.tween(tempLife.scale).to({ x: 0, y: 0 }, 200, Phaser.Easing.Linear.None, true);
    this.time.events.add(200, function () {
        Lifes.remove(tempLife);
        if (Lifes.total == 0) {
            gameLost.visible = true;
            this.add.tween(bflost.scale).to({ x: 1, y: 1 }, 500, Phaser.Easing.Linear.None, true);
        }
    }, this);
},

// Buttonfunctionn
actionOnClick: function() {
    for (i = 0; i < 10; i++) {
        //for (i = 1; i < 10; i++) {
        //moblist[i] = i;
        this.time.events.add(Phaser.Timer.SECOND * 0.5 * i, this.spawnMob, this);
    }

},

spawnMob: function () {
    var tempMob = Mobs.create(680, 490, 'Red');
    tempMob.body.gravity.y = 0;
    tempMob.body.velocity.x = -200;
    tempMob.health = 3;
},

// Damage
damage: function (tempMob, bullet) {
    if (tempMob.health > 1) {
    bullet.kill();
   tempMob.health = tempMob.health-1;
    } else {
        tempMob.kill();
        explosion.play();
        bullet.kill();
        score += 10;
        scoreText.text = 'Score: ' +  score;
        if (score == 100) {
            this.game.state.start('Mainlevel');
        }
    }
    
},

//Fire
fire: function () {
    if (Startbutton.input.pointerOver() == false) {
    if (this.time.now > nextFire && bullets.countDead() > 0)
{
nextFire = this.time.now + fireRate;
var bullet = bullets.getFirstDead();
bullet.reset(tower1.x, tower1.y);
this.physics.arcade.moveToPointer(bullet, 300);
towershot.play();
}
    }
},

endGame: function () {

}
};