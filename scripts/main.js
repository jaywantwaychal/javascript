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
	console.log ('Available colord ->'+colors[i]);
	i++;
}

//for-each