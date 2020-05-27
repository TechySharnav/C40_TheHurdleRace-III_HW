//Define variables for bullet, Wall, Speed, weight and damage
var bullet, Wall, speed, weight, thickness, damage;

function setup() {
	createCanvas(1600, 400);

	thickness = random(22, 83);

	//Assign Random Values to Speed and Weight
	speed = random(223, 321);
	weight = random(30, 52);

	//Create bullet Sprite and assign it color
	bullet = createSprite(50, 200, 50, 10);
	bullet.shapeColor = '#F9A602';

	//Create Wall Sprite and assign it color
	wall = createSprite(1600, 200, thickness, height / 2);
	wall.shapeColor = rgb(80, 80, 80);

	damage = 0;
}

function draw() {
	background('#C0C0C0');

	//Give Velocity to bullet
	bullet.velocityX = speed;

	//Text Formatting to display damage Value
	fill(0, 0, 0);
	textSize(15);
	text('Damage: ' + damage, 750, 100);

	if (hascollided(bullet, wall)) {
		//Calculate damage
		damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
		damage = damage.toFixed(2);

		//Set bullet's Velocity to 0 and make it stop it a bit back
		bullet.x = wall.x - wall.width / 2 - 20;
		bullet.velocityX = 0;

		//Set wall color to red if damage is greater than 10
		if (damage > 10) {
			wall.shapeColor = 'red';
		}
		//Set wall Color to green if damage is lesser than 10
		if (damage < 10) {
			wall.shapeColor = 'green';
		}
	}

	drawSprites();
}

function hascollided(Objbullet, Objwall) {
	//Check for collision and Calculate damage Value
	if (wall.x - bullet.x < (bullet.width + wall.width) / 2) {
		return true;
	} else {
		return false;
	}
}
