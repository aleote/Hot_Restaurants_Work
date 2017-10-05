// Dependencies 
var express = require("express");
var bodyParser = require ("body-parser");
var path = require ("path");

//set up Express App 
var app = express();
var PORT = process.env.PORT || 3000;

//Set up Express to handle data parsing 
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());




app.get("/", function(req, res) {
	console.log("home page requested");
	res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res){
	console.log("tables page requested");
	res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function(req, res){
	console.log("reservation page requested");
	res.sendFile(path.join(__dirname, "reservations.html"));
});


var tables = [
{
	name: "josh",
	phone: "2925675890",
	email: "text@gmail.com",
	id: 1
},
{	name: "josh",
	phone: "2925675890",
	email: "text@gmail.com",
	id: 1
}


];

app.get("/api/tables", function(req, res) {
	// console.log("table data requested");
	// var response = "testing";
	res.json(tables);
});


app.post("/api/reservations", function(req, res){
	console.log("reservations are submitted");
	console.log(req.body);




var newReservation = req.body;

tables.push(newReservation);


// check to see if the user is in the first 5 on the list
var isBooked; 
if (tables.length <= 5){
	isBooked = true;
}
else {
	isBooked = false;
}
res.json(isBooked);

});


app.post('api/clear', function(req, res){
	console.log("clear all tables");
	tables = [];
	res.sendFile(path.join(__dirname, "tables.html"));
});

app.post ('/api/killreservation', function(req, res){
	res.json(tables);
});


app.listen(PORT, function(){
	console.log("App listening on PORT" + PORT);
});