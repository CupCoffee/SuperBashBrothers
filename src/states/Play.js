import Phaser from 'phaser'

export default class Play extends Phaser.State {
	create()
	{
		// Add your game content here
		var background = game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
		this.pepe = game.add.sprite(0, 0, 'pepe');

		game.physics.arcade.enable(this.pepe);

		this.pepe.body.bounce.y = 0.2;
		this.pepe.body.gravity.y = 900;
		this.pepe.body.collideWorldBounds = true;

		this.pepe.anchor.setTo(0.5);

		this.pepe.animations.add('walk', [14, 13, 12, 11, 10, 9], 5, true);
		this.pepe.animations.add('idle', [16, 17, 18, 19, 20, 21, 22], 5, true);
		this.pepe.animations.add('attack', [16, 17, 18, 19, 20, 21, 22], 5, true);
		this.pepe.smoothed = false;

		this.cursors = game.input.keyboard.createCursorKeys();
	}

	update()
	{
		//  Reset the this.pepes velocity (movement)
		this.pepe.body.velocity.x = 0;

		if (this.cursors.left.isDown)
		{
			//  Move to the left
			this.pepe.body.velocity.x = -150;

			this.pepe.animations.play('walk');
			this.pepe.scale.x = 1;
		}
		else if (this.cursors.right.isDown)
		{
			//  Move to the right
			this.pepe.body.velocity.x = 150;

			this.pepe.animations.play('walk');
			this.pepe.scale.x = -1;
		}
		else
		{
			//  Stand still
			this.pepe.animations.play('idle');

//			this.pepe.frame = 4;
		}

		//  Allow the this.pepe to jump if they are touching the ground.
		if (this.cursors.up.isDown)
		{
			this.pepe.body.velocity.y = -350;
		}
	}
}
