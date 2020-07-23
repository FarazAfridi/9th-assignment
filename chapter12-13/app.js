var time = prompt("Enter time");
var timeConversion = time * 100;
if (timeConversion >= 0000 && timeConversion < 1200){
  alert("Good Morning");
} else if (timeConversion >= 1200 && timeConversion < 1700){
  alert("Good Afternoon");
} else if (timeConversion >= 1700 && timeConversion < 2100){
  alert("Good Evening");
} else if (timeConversion >= 2100 && timeConversion < 2359){
  alert("Good Night");
}



var greeting;
 var hour = 13;
  if (hour < 18) {
     greeting = "Good day";
     console.log(greeting)
  }  else {
    greeting = "Good evening";
  }


var password = "abcd";
var enterPassword = prompt("Enter password");

if (enterPassword === ""){
  alert("Please enter your password");
} else if (password === enterPassword){
  alert("Correct the password you entered matches the original password");
} else {
  alert("Incorrect Password");
}




var typeCheck = prompt("Enter any string or a number");

if (typeCheck >= 'A' && typeCheck <= 'Z'){
  alert("its an uppercase letter");
} else if (typeCheck >= 'a' && typeCheck <= 'z'){
  alert("its a lowercase letter");
} else {
  alert("its a number");
}

var int1 = prompt("1st integer");
var int2 = prompt("2nd integer");
 if (int1 > int2){
   alert(int1 + " is a greater number")
 } else if (int2 > int1){
   alert(int2 + " is a greater number")
 } else if (int1 === int2){
   alert("both are equal")
 }
 var positivityCheck = prompt("enter positive or negative number");
 var negative = positivityCheck.includes("-");
 var zero = positivityCheck.includes("0");
 if (negative){
   alert("it is negative number");
 } else if (zero){
   alert("it is a zero");
 } else {
   alert("its a positive number");
 }

 var vowel = prompt("Enter any character");
 if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
    alert("ture")
 } else {
   alert("false")
 }
