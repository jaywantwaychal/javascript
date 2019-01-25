//number
var $number1 = 35;
var Number1 = 70;

//strings
var strNumber1 = "35";
var strNumber2 = "35";


//variables can have letters numbers underscores doller signs
//begin with a letter
//_ or $
// case sensitive


//arrays --0 based
var colors = ['red', 'blue', 'green'];
//or
var colorsArray = new Array('red','yellow','orange');

colorsArray[3] = 'green';
//or
colorsArray.push('purple');

/*alert (colorsArray.length);
alert (colorsArray.sort());
alert (colorsArray.reverse());*/

//loops
//for
for(var i=0; i< colorsArray.length;i++) {
	console.log(colorsArray[i]);
}
//while
var i=0;
while(i < colors.length) {
	console.log ('Available color ->'+colors[i]);
	i++;
}

//for-each

var numbers = [2,4,5,6,7,2,66,33,31];

numbers.forEach(function(number){
	console.log("from for each : "+number);
});

numbers.reverse();

numbers.forEach(function(number) {
	console.log("revers item : "+number);
})

//objects literals

var person = {

	firstName: "tFirstName",
	lastName: 'tLastName',
	children: ['tKid1', 'tKid2'],
	address: {
		street: '555 any street',
		city: 'myCity',
		state: 'CA'
	},
	//function
	fullName: function() {
		return this.firstName + " " + this.lastName;
	}
}

console.log(person);
console.log(person.firstName);
console.log(person.children[0]);
console.log(person.address);
console.log(person.address.street);
console.log(person.fullName());


//object constructor

var apple = new Object();
apple.color = 'red';
apple.share = 'round';
apple.describe = function() {
	return 'An apple with color '+ this.color;
}

console.log(apple.describe());

//constructor pattern
function Fruit (name, color, shape) {
	this.name = name;
	this.color = color;
	this.shape = shape;

	this.describe2 = function() {
		return 'This is a fruit of type '+this.name;
	}
}

var apple2 = new Fruit('apple', 'red', 'round');
var orange = new Fruit('orange', 'orange', 'round');


console.log(apple2);
console.log(orange);
console.log(apple2.color);
console.log(apple2.describe2());
console.log(orange.describe2());

//arrays of objects

var users = [
	{
		name: 't1'
	},
	{
		name: ' t2'
	}
];

console.log(users[0].name);

//events
//to make web pages interactive

function doClick() {
	alert('You Clicked!');
}

function changeText(id) {
	id.innerHTML = 'Text Changed by Click';
}

function getDate() {
	var ele = document.getElementById('dateShow');
	ele.innerHTML = Date();
}

function changeHeading(bgColor) {
	var heading = document.getElementById('heading');
	heading.style.color = bgColor.value;
}

function validateForm() {
	var fName = document.getElementById('firstName');
	//var fName = document.forms['myForm']['firstName'].value;
alert(fName);
	if(fName == null || fname == "") {
		alert("name required");
	//	var errorStr = document.getElementById("fnameError");
	///	errorStr.innerHTML = "Enter Valid First Name";
	//	errorStr.style.color = 'red';
		return false;
	}
}