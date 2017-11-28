import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5),
    this.game.physics.arcade.enable(this),
    this.enableBody = true,
    this.body.immovable = true;
  }

  update () {
  }
}
