var firstNumber = prompt("enter first number");
var secondNumber = prompt("enter second number");
var operand = prompt("enter operand eg: plus or minus");
if (operand === "plus"){
  alert(Number(firstNumber) + Number(secondNumber));
} else if (operand === "minus"){
  alert(Number(firstNumber) - Number(secondNumber));
} else if (operand === "divide"){
  alert(Number(firstNumber) / Number(secondNumber));
} else if (operand === "multiply"){
  alert(Number(firstNumber) * Number(secondNumber));
} else if (operand === "modulus"){
  alert(Number(firstNumber) % Number(secondNumber));
}






var temp = prompt("enter temperature");
if (temp >= 40){
  alert("its to hot outside")
} else if (temp >= 30){
  alert("the weather today is normal")
} else if (temp >= 20){
  alert("Today weather is cool")
} else if (temp >= 10){
  alert("omg today weather is so cool")
}


var num = prompt("Enter any number");
var divisionCheck = num % 3;
if (divisionCheck === 0){
  alert("it is divisible by 3");
}

var number= prompt("Enter number");
var checkNumberType = number % 2;
if (checkNumberType === 0){
  alert("its even number");
} else {
  alert("its odd number");
}


var a = 4;
 if (++a === 5){
    alert("given condition for variable a is true");
  }
  // yop it will execute
  var b = 82;
   if (b++ === 83){
      alert("given condition for variable b is true");
     }
// nope it won't

var c = 12;
if (c++ === 13){
  alert("condition 1 is true"); }
if (c === 13){
  alert("condition 2 is true"); }
 if (++c < 14){
   alert("condition 3 is true"); }
if(c === 14){
  alert("condition 4 is true"); }

  //condition 2 and 4 are true

  var materialCost = 20000;
  var laborCost = 2000;
  var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost){
    alert("The cost equals"); }

    if (true){ alert("True");
   }
   if (false){ alert("False");
 }


 if("car" < "cat"){
   alert("car is smaller than cat");
  }


var secret = 5;
var guess = prompt("guess the secret number");
if (secret === Number(guess)){
  alert("Bingo ! correct answer");
} else if (secret === Number(guess) + 1) {
  alert("Too Close");
}



var user = prompt("enter your city name");
if(user === "karachi"){
  alert("Welcome to the city of lights.");
}

var gender = prompt("Enter your gender");
if (gender === "male"){
  alert("Good morning sir !");
} else if (gender === "female"){
  alert("Good morning ma'am !");
} else {
  alert("Good morning");
}

var signalColor = prompt("Enter traffic signal color");
if (signalColor === "red"){
  alert("must stop");
} else if (signalColor === "yellow"){
  alert("ready to move");
} else if (signalColor === "green"){
  alert("move now");
}

var carFuel = prompt("Enter your fuel in litres");
if (carFuel <= 0.25){
  alert("Please refill the fuel in your car");
} else {
  alert("you are good to go");
}
