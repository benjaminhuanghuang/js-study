# JavaScript GameDev Tutorial – Code an Animated Physics Game [Full Course]

2023.2

https://www.youtube.com/watch?v=U34l-Xz5ynU

HTML + CSS + vanilla JS



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