var myFirstVar;
var mySecondVar;
var myThirdVar;
var myFourthVar;
var myFifthVar;
var myFirstNumVar	= 1;
var mySecondNumVar	= 2;
var myThirdNumVar	= 3;
var myFourthNumVar	= 4;
var myFifthNumVar	= 5;
var myFirstWordVar	= 'Sam';
var myFirstWordVar	= 'Tom';
var myFirstWordVar	= 'John';
var myFirstWordVar	= 'Kevin';
var myFirstWordVar	= 'Bill';
var hasADog	= true;
var ownsACat	= false;
var hasACar	= true;
var hasAHouse	= false;
var likesToEat	= true;
var firstSumVar = 2;
var secondSumVar = 3;
var sum = (+firstSumVar) + (+secondSumVar);

var isFoolish = true;
	if (isFoolish)
		console.log('Bill Is Foolish');
	else
		console.log('Bill Is Smart');

var myArray =	[1,2,3,4,5,6,7,8,9,10,11,]
for (var i = 0; i < 11; i++) {
		myArray[i]
	};

	var switchVar = 3;
switch (switchVar) {
  case 1:
  	switchVar = 1;
    console.log('A');
    break;
  case 2:
  	switchVar = 2;
    console.log('B');
    break;
  case 3:
  	switchVar = 3;
    console.log('C');
    break;
  case 4:
  	switchVar = 4;
    console.log('D');
    break;
  default:
    console.log('Sorry Number Not Found');
};

var isMorning = true;
var numCount = 0;

while (isMorning){

    if (numCount >= 10) {
        isMorning = false
    }
    numCount = numCount + 1;
    console.log(isMorning);        
}

var num5 = 5;
var num6 = 6;

//true

if (num5 != num6) {
    console.log(true);
}

if (num6 > num5) {
    console.log(true);
}

if (num5 < num6) {
    console.log(true);
}

//false

if (num5 === num6) {
    console.log(false);
}

if (num5 == num6) {
    console.log(false);
}

if (num5 > num6) {
    console.log(false);
}

if (num6 < num5) {
    console.log(false);
}

var isEvening = false;

if (isEvening) {
    isEvening = true;
}