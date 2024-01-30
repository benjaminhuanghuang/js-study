import Player from "./player.js";
import Obstacle from "./obstacle.js";
import Egg from "./egg.js";
import Enemy from "./enemy.js";

export default class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.width = canvas.width;
      this.height = canvas.height;
      this.topMargin = 260;
      this.debug = true;
      this.fps = 70;
      this.timer = 0;
      this.interval = 1000 / this.fps;
      this.eggTimer = 0;
      this.eggInterval = 1000;

      this.player = new Player(this);
      this.numberOfObstacles = 5;
      this.obstacles = [];
      this.maxEggs = 5;
      this.eggs = [];
      this.enemies = [];
      this.hatchlings = [];
      this.particles = [];
      this.gameObjects = [];
      this.score = 0;
      this.winningScore = 5;
      this.gameOver = false;
      this.lostHatchlings = 0;

      this.mouse = {
        x: this.width * 0.5,
        y: this.height * 0.5,
        pressed: false,
      };
      // event listeners
      canvas.addEventListener("mousedown", (e) => {
        this.mouse.x = e.offsetX;
        this.mouse.y = e.offsetY;
        this.mouse.pressed = true;
      });

      canvas.addEventListener("mouseup", (e) => {
        this.mouse.x = e.offsetX;
        this.mouse.y = e.offsetY;
        this.mouse.pressed = false;
      });

      canvas.addEventListener("mousemove", (e) => {
        if (this.mouse.pressed) {
          this.mouse.x = e.offsetX;
          this.mouse.y = e.offsetY;
        }
      });
      // for debug
      window.addEventListener("keydown", (e) => {
        if (e.key === "d") {
          this.debug = !this.debug;
        }
        else if (e.key === "r") {
         this.restart();
        }
      });
    }

    render(context, deltaTime) {
      if (this.timer > this.interval) {
        // animate to next frame
        context.clearRect(0, 0, this.width, this.height);
        this.gameObjects = [
          ...this.obstacles,
          ...this.eggs,
          this.player,
          ...this.enemies,
          ...this.hatchlings,
          ...this.particles,
        ];
        // sort by y position
        this.gameObjects.sort((a, b) => a.collisionY - b.collisionY);
        this.gameObjects.forEach((gameObject) => {
          gameObject.draw(context);
          gameObject.update();
        });

        this.timer = 0;
      }
      this.timer += deltaTime;

      // add eggs periodically
      if (this.eggTimer > this.eggInterval && this.eggs.length < this.maxEggs && !this.gameOver) {
        this.addEgg();
        this.eggTimer = 0;
        //console.log(this.eggs);
      } else {
        this.eggTimer += deltaTime;
      }

      // draw score
      context.save();
      context.textAlign = "left";
      context.fillText(`Score: ${this.score}`, 25, 50);
      if (this.debug) {
        context.fillText(`Lost: ${this.lostHatchlings}`, 25, 100);
      }
      context.restore();

      // win /lost message
      if (this.score >= this.winningScore) {
        this.gameOver = true;
        context.save();

        context.fillStyle = "rgba(0,0,0,0.5)";
        context.fillRect(0, 0, this.width, this.height);
        context.fillStyle = "white";
        context.textAlign = "center";
        context.shadowOffsetX = 4;
        context.shadowOffsetY = 4;
        context.shadowColor = 'black';
        let message1, message2;
        if (this.lostHatchlings <= 5) {
          message1 = "Bullseye!!!";
          message2 = "You bullied the bullies!";
        } else {
          message1 = "Bullocks!";
          message2 =
            "You lost " +
            this.lostHatchlings +
            " hatchlings, don't be a pushover!";
        }

        context.font = "130px Helvetica";
        context.fillText(message1, this.width * 0.5, this.height * 0.5);
        context.font = "40px Helvetica";
        context.fillText(message2, this.width * 0.5, this.height * 0.5);
        context.fillText("Final score: " + this.score + 'Press R to play again', this.width * 0.5, this.height * 0.5 + 80);

        context.restore();
      }
    }

    checkCollision(a, b) {
      const dx = a.collisionX - b.collisionX;
      const dy = a.collisionY - b.collisionY;
      const distance = Math.hypot(dy, dx);
      const sumOfRadii = a.collisionRadius + b.collisionRadius;
      return [distance < sumOfRadii, distance, sumOfRadii, dx, dy];
    }

    addEgg() {
      this.eggs.push(new Egg(this));
    }

    addEnemy() {
      this.enemies.push(new Enemy(this));
    }

    removeGameObject() {
      this.eggs = this.eggs.filter((object) => !object.markedForDeletion);
      this.hatchlings = this.hatchlings.filter(
        (object) => !object.markedForDeletion
      );
      this.particles = this.particles.filter(
        (object) => !object.markedForDeletion
      );
    }
    restart() {
      this.player.restart();
   
      this.obstacles = [];
      this.eggs = [];
      this.enemies = [];
      this.hatchlings = [];
      this.particles = [];

      this.mouse = {
        x: this.width * 0.5,
        y: this.height * 0.5,
        pressed: false,
      };
      this.score = 0;
      this.lostHatchlings = 0;
      this.gameOver = false;
      this.init();
    }
    init() {
      for (let i = 0; i < 3; i++) {
        this.addEnemy();
      }

      // No overlap obstacles
      let attempts = 0;
      while (this.obstacles.length < this.numberOfObstacles && attempts < 500) {
        let testObstacle = new Obstacle(this);
        let overlap = false;
        this.obstacles.forEach((obstacle) => {
          const dx = testObstacle.collisionX - obstacle.collisionX;
          const dy = testObstacle.collisionY - obstacle.collisionY;
          const distance = Math.hypot(dy, dx);
          const distanceBuffer = 150;
          const sumOfRadii =
            testObstacle.collisionRadius +
            obstacle.collisionRadius +
            distanceBuffer;
          if (distance < sumOfRadii) {
            overlap = true;
          }
        });
        const margin = testObstacle.collisionRadius * 3;
        if (
          !overlap &&
          testObstacle.spriteX > 0 &&
          testObstacle.spriteX < this.width - testObstacle.width &&
          testObstacle.collisionY > this.topMargin + margin &&
          testObstacle.collisionY < this.height - margin
        ) {
          this.obstacles.push(testObstacle);
        }
        attempts++;
      }
    }
  }
