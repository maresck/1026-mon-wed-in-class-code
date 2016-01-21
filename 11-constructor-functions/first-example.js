var dog = {
	sleepy : false,
	noise : 'woof', 
	makeNoise : function(){
		if (this.sleepy === false){
			console.log(this.noise);
		}
	}
}

dog.makeNoise();

var cat = {
	sleepy : true,
	noise : 'meow', 
	makeNoise : function(){
		if (this.sleepy === false){
			console.log(this.noise);
		}
	}
}

cat.sleepy = false;
cat.makeNoise();

// construction functions are used to reduce redundancy of object creation



function Animal(sleepy, noise){
	this.sleepy = sleepy;
	this.noise = noise;
	this.makeNoise = function(){
		if (this.sleepy === false){
			console.log(this.noise);	
		}
	}
}

var cat = new Animal(false, 'here is a value');
var dog = new Animal(false, 'shamoon');
var giraffe = new Animal(false, 'moo');


// Part one:
// ---------
// Make a dog object with two keys.

// One key called sleepy = false;

// Second key called noise = 'woof';

// Third key called makeNoise which alerts the noise to the screen if the dog is not sleepy.

// Part two:
// ---------
// Make a cat object with two keys.

// One key called sleepy = true;

// Second key called noise = 'meow';

// Third key called makeNoise which alerts the noise to the screen if the cat is not sleepy.

// Part Three:
// -----------
// make the dog bark

// make the cat meow

// Part Four:
// -----------
// Why are parts one and two redundant? What are ways we can write dry code?