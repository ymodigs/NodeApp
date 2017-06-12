//Simple HTTP and File server







/* object name same as module name , Core module just right down the name . for your custom module give a path ./NameoftheModule
*/
/*var fs = require('fs');
fs.writeFileSync("test.txt", "Core is good for a health");
console.log(fs.readFileSync("test.txt").toString());
*/

/*var path = require('path');
var websiteHome = "Document/GitHub//yeshamodi/index.html";
var websiteAbout = "Document/GitHub//yeshamodi/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteHome));
console.log(path.extname(websiteAbout));

console.log(__dirname);
console.log(__filename);
*/












//Shared module or shared object + Object Factory
/*require('./person1');
require('./person2'); */


//Export modules
/* module.exports.avatar = printAvtar; // name , value , object
	module.exports.chappie = printChappie; (name, value , pair)
*/


// Making a prototype

/*function User() { 
	this.name = "";
	this.life = 100;
	this.giveLife = function giveLife(targetPlayer) {
		targetPlayer.life += 1;
		console.log(this.name + "gave 1 life to" + targetPlayer.name);
	}
}

var Yesha = new User();
var Mishrak = new User();
Yesha.name = "Yesha";
Mishrak.name = "Mishrak";

Yesha.giveLife(Mishrak);
console.log("Yesha: " +Yesha.life);
console.log("Mishrak: " +Mishrak.life);

// You can add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.life -3;
	console.log(this.name + "just uppercutted" + this.targetPlayer);
};

//You can add properties to all objects
User.prototype.magic = 60;
console.log(Yesha.magic);
console.log(Mishrak.magic);
*/


//Be Productive as much as you can

//console.log("yesha");
/*
var person = {
	firstName : "yesha",
	lastName : "modi",
	age : 24
};

console.log(person);

var printBanana = function(){
	console.log("Bannnas are Healthy!");	
}

//calling a variable as a function  --> make function assign it to a variable and use that variable to send to another fucntion such as timeOut
printBanana();

setTimeout(printBanana, 5000);*/

// Server doesnt have to stand steady --> Keep working :) Node js. Real time data ( request coming in more and more )

/*function placeAnOrer(orderNumber) {

	console.log("Customer order", orderNumber);

	cookAndDeliverFood(function (){
		console.log("Delivered food order: ", orderNumber);
	});
}

// Simulate a 5 sec operation
// Concept of call back function --> 

function cookAndDeliverFood(callback){
	//scheduling this piece of code (Wherenever you are done)
	setTimeout(callback, 5000);

}

//Simulate users web request
placeAnOrer(1);
placeAnOrer(2);
placeAnOrer(3);
placeAnOrer(4);
placeAnOrer(5);
placeAnOrer(6);*/

//Everything is a reference
/*	var yesha = {
		favFood: "chinese",
		favMovie: "YJHD"
	}

	var person = yesha;
	person.favFood = "salad";

	console.log(yesha.favFood);

console.log('24' == 24); // compare values ans: true

console.log('24' === 24); // compare values and type too so answer would be false*/


// This key word concept --> this keyword referece to whatever onject or fucntion calling it