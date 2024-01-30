# JavaScript GameDev Tutorial – Code an Animated Physics Game [Full Course]

2023.2

https://www.youtube.com/watch?v=U34l-Xz5ynU

HTML + CSS + vanilla JS

## Player 9:17

```js
export default class Player {
  constructor(game) {
    // center point of the of the collision circle
    // start position is in the middle of the screen
    this.collisionX = this.game.width * 0.5;
    this.collisionY = this.game.height * 0.5;
    // size of the collision circle
    this.collisionRadius = 30;
    this.speedX = 0;
    this.speedY = 0;
    this.dx = 0;
    this.dy = 0;
    this.speedModifier = 3;
    this.spriteWidth = 255;
    this.spriteHeight = 256;
    this.width = this.spriteWidth;
    this.height = this.spriteHeight;
    // in frame
    this.frameX = 0;
    this.frameY = 0;
    this.image = document.getElementById("bull");
  }

  draw(context) {

  }
}
```

## Mouse control 16:28


## Sprite

```html
 <img id="obstacles" src="assets/obstacles.png" alt="">


 #obstacles {
    display: none;
}
```

```js 
  this.image = document.getElementById("obstacles")
```


## Physics

Adjust position after collision

## sprite animation
1:17


## Debug mode 1:17:00


## Player boundaries 1:21:00

## FPF (frame per second) 1:25:00


## Egg class 1:34:03



## Draw order 1:51:36

```js
 this.gameObjects.sort((a, b) => a.collisionY - b.collisionY);
```


## Enemy class 1:59:00


## Larva class 2:11:06


## Particle 2:40:33
