/*var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cons = require('consolidate'),
	dust = require('dustjs-helpers'),
	pg = require('pg'),
	app = express();


// DB Connect String
var connect = "postgres://postgres:specsy@localhost/postgres";

// Assign Dust Engine to .dust Files
app.engine('dust', cons.dust);

//Set Default Ext .dust
app.set('view engine', 'dust');
app.set('views', __dirname + '/views'); 

//Set public Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({	extended: false}));

app.get('/', function (req, res) {
	console.log('Running with postgres'); 
});


//Server
app.listen(3000, function(){
	console.log('Server started on Port 3000');
})


 */


/*  
var mysql = require('mysql');
var connection = mysql.createConnection({
	host	: 'localhost',
	user 	: 'root',
	password: 'specsy',
	database: 'demo'
});


connection.connect();

connection.query('Select * from test', function(err, rows, fields) {
	if (!err)
			console.log('The Solution is:', rows);
	else
			console.log('Error while performing query.');
});

connection.end();*/


/*const express = require('express')
const app = express()

app.locals.points = "8,713";

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

*/







/*var connect = require('connect');
var http = require('http');

var app = connect();*/

/*function doFirst(request, response, next) {
	console.log("Yesha");
	next();
}


function doSecond(request, response, next) {
	console.log("Mishrak");
	next();
}
app.use(doFirst);
app.use(doSecond);
*/ 

/*function profile(request, response){
	console.log('User Requested Profile');
}

function forum(request, response){
	console.log('User Requested forum');
}

app.use('/profile', profile);
app.use('/forum', forum);
http.createServer(app).listen(8888);
console.log("Server is running...");*/





//Simple HTTP and File server
	//Checkout server.js






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