import Phaser from "phaser";
import GameScene from "./scenes/game-scene";

const SHARED_CONFIG={
  width: 1000,
  height:200,

}
const config={
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  physics:{
    default:"arcade",
    arcade:{
      gravity:{y:800},
      debug: true
    }
    
  },
  scene:[new GameScene(SHARED_CONFIG)]
  
}
new Phaser.Game(config);