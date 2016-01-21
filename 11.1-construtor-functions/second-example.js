/*
For those who don't remember (or choose to forget), Tamagotchis were "digital pets" that you could carry around with you and feed them, clean up after them, pet them, and try to keep them happy.

Make a Tamagotchi constructor. Give it the following properties:
1. a hungry property (initially false)
2. a sick property (initially false)
3. an age of 0

and give it the following methods:

feed() - if hungry is true, print "That was yummy!" and set hungry to false. If hungry is false, print "No thanks, I'm full." and set hungry to true.
sleep() - prints out "zzzzzzz" (use as many z's as you want)
medicate() - if sick is true, print "I feel much better!" and set sick to false. If sick is false, print "No thanks, I feel fine." and set sick to true.
increaseAge() - increase the age by one and print "Happy Birthday to me! I am " + age + " years old!"
Now make a variable named dog that is set to a new Tamagotchi.

Add the following methods to it:
1. bark() - prints out "ruff ruff
2. goOutside() - prints out "I own that tree now!"

Make a variable named cat that is set to a new Tamagotchi. Add the following methods to it:
1. meow() - prints out "Meow!"
2. scratchThatChair() - "Stop scratching that chair!!!"
*/

function Tamagotchi(){
	...
}

var Tamagotchi = function() {
  this.hungry = false;
  this.sick = false;
  this.age = 0;

  this.feed = function() {
    if(this.hungry === true) {
      console.log("That was yummy!");
      this.hungry = false;
    }
    else {
      console.log("No thanks, I'm full.");
      this.hungry = true;
    }
  };

  this.sleep = "zzzzzzzzzzzz";

  this.sleep = function() {
    console.log("zzzzzzzzzzzz");
  };

  this.medicate = function() {
    if(this.sick === true) {
      console.log("I feel much better");
      this.sick = false;
    }
    else {
      console.log("No thanks, I feel fine.");
      this.sick = true;
    }
  };

  this.increaseAge = function() {
    this.age ++;
    console.log("Happy Birthday to me! I am " + this.age +
    " years old!");
  };
};

var dog = new Tamagotchi();
dog.bark = function() {
  console.log("ruff ruff!");
}

dog.goOutside = function() {
  console.log("I own that tree now!");
}

var cat = new Tamagotchi();
cat.meow = function() {
  console.log("Meow!");
}
cat.scratchThatChair = function() {
  console.log("Stop scratching that chair!!!");
}