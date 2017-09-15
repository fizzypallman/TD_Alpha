// Variables
var Walls;
var income = 10;
var gold = 50;
var gameActive = true;
var Mobs


// State-Definition
Grave.Mainlevel = function(game) {};
Grave.Mainlevel.prototype = {

// Definition of game-functions
create: function() {

this.physics.startSystem(Phaser.Physics.ARCADE);

// mainlevel
this.add.sprite(0, 0, 'mainlevel-background');
this.add.sprite(600, 0, 'mainlevel-controlpanel');
this.add.sprite(600, 0, 'mainlevel-incomeframe');
this.add.sprite(600, 50, 'mainlevel-unitspawn-header');
Walls = this.add.group();
Walls.enableBody = true;

 // Mobs
 Mobs = this.add.group();
 this.physics.arcade.enable(Mobs);
 Mobs.enableBody = true;


spawnRed = this.add.button(640, 90, 'Red', this.redSpawn, this, 2, 1, 0);
spawnBlue = this.add.button(710, 90, 'Blue', this.blueSpawn, this, 2, 1, 0);
spawnPurple = this.add.button(640, 135, 'Purple', this.purpleSpawn, this, 2, 1, 0);
spawnGreen = this.add.button(710, 135, 'Green', this.greenSpawn, this, 2, 1, 0);
//  Try changing the position constant to see the difference:
// this.minions.align(5, 3, 160, 160, Phaser.CENTER);


// Towers
/*Towers = this.add.group();
tower1 = Towers.create(400, 300, 'Tower1'); */

// Startbutton
// Startbutton = this.add.button(360, 40, 'Startbutton', this.actionOnClick, this, 2, 1, 0);

//Endbutton
// Endbutton = this.add.button(30, 570, 'Ende', this.actionOnClick, this, 2, 1, 0);

// Lifes
/* Lifes = this.add.group();
for (bf = 0; bf < 10; bf++) {
    Lifes.create(330 + 40 * bf, 185, "Life").scale.setTo(0.1);
} */

/* this.add.text(255, 200, 'Lifes:', { fontSize: '32px', fill: '#FFF' });
bflost = this.add.image(this.world.centerX - 213, this.world.centerY - 284, 'bflost');
bflost.scale.setTo(0);
gameLost = this.add.text(270, 50, 'Verloren :\'(', { font: '50pt Arial', fill: '#FFF' });
gameLost.visible = false; */


this.mainLvl();

},

mainLvl: function() {

goldSign = this.add.text(608, 15, gold, { fontSize: '24px', fill: '#f0ff05' });
goldLabel = this.add.text(635, 6, 'Gold', { fontSize: '12px', fill: '#f0ff05' });
incomeSign = this.add.text(708, 15, income, { fontSize: '24px', fill: '#f0ff05' });
incomeLabel = this.add.text(735, 6, 'Income', { fontSize: '12px', fill: '#f0ff05' });

unitSpawnLabel = this.add.text(649, 53, 'Minion-List', {fontSize: '20px', fill: '#6607c9' });

 //Sidewalls
 /* var sidewalls = Walls.create(770, 0, 'Wall');
 sidewalls.scale.setTo(1, 2);
 sidewalls = Walls.create(0, 0, 'Wall');
 sidewalls.scale.setTo(1, 2); */

 Walls.create(0, 0, 'mainlevel-vertical');
 Walls.create(580, 0, 'mainlevel-vertical');
 Walls.create(0, 0, 'mainlevel-horizontal');
 Walls.create(0, 580, 'mainlevel-horizontal');
 
 
/* goal = StartGoal.create(700, 80, 'StartGoal');
start = StartGoal.create(700, 470, 'StartGoal');
//Waypoints
WaypointUp.create(120, 485, 'Waypoint');
WaypointUp.create(670, 350, 'Waypoint');
WaypointUp.create(120, 250, 'Waypoint');
WaypointRight.create(120, 350, 'Waypoint');
WaypointRight.create(120, 115, 'Waypoint');
WaypointLeft.create(670, 250, 'Waypoint'); */


this.time.events.repeat(Phaser.Timer.SECOND * 5, 20000, this.generateIncome, this);

},

/* update: function() {
Mobs.forEach(function (mob) {
    this.physics.arcade.overlap(mob, WaypointUp, this.turnUp, null, this);
    this.physics.arcade.overlap(mob, WaypointLeft, this.turnLeft, null, this);
    this.physics.arcade.overlap(mob, WaypointRight, this.turnRight, null, this);
    this.physics.arcade.overlap(mob, goal, this.deductLife, null, this);
    this.physics.arcade.overlap(mob, bullets, this.damage, null, this);
    
    }, this);
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
}, */

generateIncome: function() {
    gold = gold + income;
    goldSign.text = gold;
    
},

redSpawn: function() {
    if (gold >= 10) {
        var redMob = Mobs.create(Math.random()*560, 20, 'Red');
        redMob.body.gravity.y = 100;
        redMob.body.velocity.x = 0;
        redMob.health = 3;
        income = income + 1;
        gold = gold - 10;
        goldSign.text = gold;
        incomeSign.text = income;
        } else {return};
},

blueSpawn: function() {
    if (gold >= 20) {
        var blueMob = Mobs.create(Math.random()*560, 20, 'Blue');
        blueMob.body.gravity.y = 100;
        blueMob.body.velocity.x = 0;
        blueMob.health = 5;
        income = income + 2;
        gold = gold - 20;
        goldSign.text = gold;
        incomeSign.text = income;
        } else {return};
},

purpleSpawn: function() {
    if (gold >= 30) {
        var purpleMob = Mobs.create(Math.random()*560, 20, 'Purple');
        purpleMob.body.gravity.y = 100;
        purpleMob.body.velocity.x = 0;
        purpleMob.health = 8;
        income = income + 3;
        gold = gold - 30;
        goldSign.text = gold;
        incomeSign.text = income;
        } else {return};     
},

greenSpawn: function() {
    if (gold >= 40) {
        var greenMob = Mobs.create(Math.random()*560, 20, 'Green');
        greenMob.body.gravity.y = 100;
        greenMob.body.velocity.x = 0;
        greenMob.health = 10;
        income = income + 4;
        gold = gold - 40;
        goldSign.text = gold;
        incomeSign.text = income;
        } else {return};
}
/* Damage
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

} */
};