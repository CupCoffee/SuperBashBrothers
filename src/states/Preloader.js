import Phaser from 'phaser'

export default class Preloader extends Phaser.State {
  constructor () {
    super()

    this.loader = null
  }

  preload () {
    // These are the assets we loaded in Boot.js
    this.loader = this.add.sprite(this.world.centerX, this.world.centerY, 'loaderBar')
    this.loader.anchor.setTo(0.5)

    // Sets a basic loading bar
    this.load.setPreloadSprite(this.loader)

    // Load any assets for the game here
	  this.game.load.spritesheet('pepe', 'assets/sprites/pepe.png', 107, 64)
  }

  create () {
    this.state.start('Play')
  }
}
