function StopWatch(){
    // clock is stopped
    this.startAt = 0; 
    this.elapsedTime = 0;
}

StopWatch.prototype.now = function(){
    return (new Date()).getTime();
}
StopWatch.prototype.start = function(){
    if (this.startAt == 0) {
        //restart the watch
        this.startAt = this.now();
    }
}

StopWatch.prototype.stop = function(){
    // if clock is running
    if(this.startAt > 0)
        // update elapse time
        this.elapsedTime = this.elapsedTime + this.now() - this.startAt;
    // stop it
    this.startAt = 0;
}

//we don't have a pause() method, only stop(). If you refer to the example on line 16)

StopWatch.prototype.reset = function(){
    this.startAt = this.now();
    this.elapsedTime =0;
}

StopWatch.prototype.getTime = function(){
  let ms = this.elapsedTime + this.startAt ? this.now()- this.startAt : 0;
   return parseInt(ms / 1000);
}

 
