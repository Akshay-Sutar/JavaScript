function func(){
  let counter = 0;
  this.counter1 = 0;
  this.instanceMethod = function(){
    console.log('Instance method called ' + (++counter) + ' times');
  }
}

func.prototype.prototypeMethod = function(){
  console.log('Instance method called ' + (++this.counter1) + ' times');  
}

var a = new func();
var b = new func();

a.prototypeMethod();
a.prototypeMethod();
b.prototypeMethod();

Number.prototype.isPrime = function() {
  if (this < 2 && this >= 0){
    return false;
  }

  for (let i = 2; i < Math.sqrt(this); i++) {
      if (this % i == 0) {
        return false;
      }
  }

  return true;
}

String.prototype.toTitleCase = function(){
  return this.charAt(0).toUpperCase() + this.substring(1);
}