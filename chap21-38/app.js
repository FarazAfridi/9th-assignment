// String Methods
// Task 1
// var firstName = prompt("Whats your first name ?");
// var lastName = prompt("whats your last name ?");
// var fullName = firstName + " " + lastName;
// alert("welcome " + fullName);

// Task 2
// var favPhone = prompt("whats your fav phone ?");
// var phoneLength = favPhone.length;
// document.write("my fav phone is: " + favPhone + "<br/>");
// document.write("string length: ", phoneLength);

// Task 3
// var str = "Pakistani";
// var index = str.indexOf("n");
// document.write("string: ", str, "<br />");
// document.write("index: ", index);

// Task 4
// var string = "Hello World";
// var index = string.lastIndexOf("l");
// document.write("string: ", string, "<br />");
// document.write("index: ", index);

// Task 5
// var string = "Pakistani";
// var index = string.indexOf("i", 3);
// document.write("string: ", string, "<br />");
// document.write("character at index 3: ", string[index]);

// Task 6
// var firstName = prompt("Whats your first name ?");
// var lastName = prompt("whats your last name ?");
// var fullName = firstName.concat(" ", lastName);
// alert("welcome " + fullName);

// Task 7
// var hyderabad = "hyderabad";
// var exchange = hyderabad.replace("hyder", "islam")
// document.write("city ", hyderabad, "<br />");
// document.write("after replacement ", exchange);

// Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g, "&");
// document.write(message, "<br />");
// document.write("after replacing and: ", replace);

// Task 9
// var str = "479";
// document.write("value ", str, "<br/>");
// document.write("type ", typeof(str), "<br/>");
// var number = 479;
// document.write("value ", number, "<br/>");
// document.write("type ", typeof(number), "<br/>");

// Task 10
// var input = prompt("type anything");
// var toUpperCase = input.toUpperCase();
// document.write("input " , input, "<br/>");
// document.write("to uppercase ", toUpperCase);

// Task 11
// var input = prompt("Enter anything");
// var index = input[0].toUpperCase();
// var replace = input.replace(input[0], index);
// document.write(replace);

// Task 12
// var num = 35.36;
// var toString = num.toString();
// var removeDot = toString.split(".").join("");
// document.write(removeDot);

// Task 13
// var input = prompt("enter username");
// if(input.includes("!") || input.includes("@") || input.includes(".") || input.includes(",")){
//   alert("please enter a valid username")
// }

// Task 14
// var array = ["cake", "applepie", "cookie", "chips", "patties"];
// var input = prompt("enter something you want").toLowerCase();
// var index = array.indexOf(input);
// index === -1 ? document.write("sorry " + input + " is not available in our bakery") :
// document.write(input + " is available at index of " + index + " in our bakery");

// Task 15
// var input = prompt("enter password");
// if (input[0] <= 9 ){
//   alert("password cannot begin with a number");
// } else if (input.length < 6){
//   alert("password must contain atleast six characters");
// } else if (!input.match( /[A-Z]/g) || !input.match(/[0-9]/g) || !input.match(/[a-z]/g)){
//   alert("password should contain characters and numbers")
// }

// Task 16
// var university = "University of Karachi";
// var toArray = university.split("");
// for (var i=0; i<toArray.length; i ++){
//   document.write(toArray[i] + "<br/>");
// }

// Task 17
// var input = prompt("");
// var lastChar = input.substr(input.length - 1);
// document.write(input, "<br/>")
// document.write(lastChar);

// Task 18
// var str = ("The quick brown fox jumps over the lazy dog").toLowerCase();
// var count = (str.match(/the/g)).length;
// document.write("text: " + str + "<br/>");
// document.write("there are two occurrences of word " + count)

// MATH Methods
// Task 1 & Task 2
// var input = prompt("enter any number");
// var ceil = Math.ceil(input);
// var roundOf = Math.round(input);
// var floor = Math.floor(input);
// document.write("number " + input + "<br/>");
// document.write("round of number " + roundOf + "<br/>");
// document.write("ceil " + ceil + "<br/>");
// document.write("floor " + floor + "<br/>");

// Task 3
// var value = prompt("any number");
// var abs = Math.abs(value);
// document.write("the absolute value of " + value + " is " + abs);

// Task 4
// var random = Math.floor(Math.random() * 6 + 1);
// document.write("random dice value: " + random)

// Task 5
// var random = Math.floor(Math.random() * 2 + 1);
// if (random === 2){
// document.write("random coin value: Heads");
// } else if (random === 1){
// document.write("random coin value: Tails");
// }

// Task 6
// var random = Math.floor(Math.random() * 100 + 1);
// document.write("Random number between 1 and 100: " + random);

// Task 7
// var str = prompt("enter your weight is kg");
// var number = str.match(/(\d+)/);
// document.write("the weight of user is " + number[0] + " kilograms");

// Task 8
// var secret = 7;
// var number = prompt("enter secret number");
// if (number == secret){
//   alert("congratulations");
// } else {
//   alert("try again");
// }


// Date Methods
// Task 1
// document.write(Date());

// Task 2
// var month = ["january", "feburary", "march", "april", "may", "june", "july", "august", "september", "october", "november" , "december"]
// var date = new Date();
// var currentMonth = date.getMonth();
// document.write(month[currentMonth]);

// Task 3
// var month = ["january", "feburary", "march", "april", "may", "june", "july", "august", "september", "october", "november" , "december"]
// var date = new Date();
// var currentMonth = date.getMonth();
// document.write(month[currentMonth].substr(0,3));

// Task 4
// var date = new Date();
// if (date.getDate() === 6 || date.getDate() === 0){
//   document.write("its fun day");
// }

// Task 5
// var date = new Date();
// if (date.getDate() <= 15){
//   document.write("first fifteen days of the month");
// } else if (date.getDate() <= 30){
//   document.write("last fifteen days of the month");
// }

// Task 6
// var date = new Date(1970-01-01);
// var today = new Date();
// var timeInMiliseconds = (today - date) ;
// var timeInMinutes = Math.round(timeInMiliseconds / 60 * 1000);
// document.write("current date: " + today + "<br/>");
// document.write("elapsed miliseconds since jan 1,1970: " + timeInMiliseconds + "<br/>");
// document.write("elapsed minutes since jan 1,1970: " + timeInMinutes + "<br/>");

// Task 7
// var hours = new Date().getHours();
// if (hours > 12){
//   document.write("Its PM");
// } else {
//   document.write("Its AM");
// }

// Task 8
// var laterDate = new Date("December 31, 2020")
// console.log(laterDate)

// Task 9
// var ramdan = new Date("june 18, 2015");
// var today = new Date();
// var diff = today - ramdan;
// var toDays = Math.floor(diff / (1000*60*60*24));
// document.write(toDays + " days have passed since 1st Ramadan, 2015");

// Task 10
// var date = new Date("Dec 5, 2015");
// var diff = new Date() - date;
// var seconds = diff / 1000;
// document.write("on reference date " + date + "," + "<br/>" + Math.floor(seconds) + " seconds had passed since beginning of 2015");

// Task 11
// let hourAgo = new Date('2020-06-17T19:43:00');
// let now = new Date('2020-06-17T20:43:00');
// document.write("now: " + now + "<br/>");
// document.write("1 hour ago: " + hourAgo);

// Task 12
// let hundredYearAgo = new Date('1920-06-17T19:43:00');
// let now = new Date('2020-06-17T20:43:00');
// document.write("now: " + now + "<br/>");
// document.write("100 years ago: " + hundredYearAgo);

// Task 13
// var year = new Date().getFullYear();
// var age = prompt("enter your age");
// var minus = year - age;
// alert("your birth year is: " + minus);

// Task 14
// var name = prompt("name");
// var month = prompt("month");
// var units = prompt("units");
// var charges = 16;
// var payableAmount = units * charges;
// var surcharge = 350;
// var lateAmount = payableAmount + surcharge;
//
// document.write("<h1>K-Electric Bill</h1>" + "<br/>");
// document.write("Customer Name: " + name + "<br/>");
// document.write("Month: " + month + "<br/>");
// document.write("Number of units: " + units + "<br/>");
// document.write("Charges per unit: " + charges + "<br/>");
// document.write("Net payable amount (within due date): " + payableAmount + "<br/>");
// document.write("late payement surcharge: " + surcharge + "<br/>");
// document.write("Gross Amount Payable (after due date): " + lateAmount + "<br/>");


// FUNCTIONS
// Task 1
// function date () {
//   document.write(new Date());
// }
// date();

// Task 2
//var firstName = prompt("firstName");
//var lastName = prompt("lastName");
// function greet(firstName, lastName){
//   document.write("Welcome " + firstName+ " " + lastName);
// }
// greet(firstName, lastName);

// Task 3
// var num1 = prompt("enter number");
// var num2 = prompt("enter number 2");
// function add(num1, num2){
//   document.write(Number(num1) + Number(num2))
// }
// add(num1, num2);

// Task 4
// var num1 = prompt("number 1");
// var num2 = prompt("number 2");
// var operator = prompt("operator");
// function math(num1, num2, operator){
//   if (operator === "add"){
//   var ans = Number(num1) + Number(num2);
//   document.write(ans);
// } else if (operator === "subtract"){
// var ans = Number(num1) - Number(num2);
// document.write(ans);
// } else if (operator === "multiply"){
// var ans = Number(num1) * Number(num2);
// document.write(ans);
// } else if (operator === "divide"){
// var ans = Number(num1) / Number(num2);
// document.write(ans);
// }
// }
// math(num1, num2, operator);

// Task 5
// function square(num){
//    document.write(num * num);
// }
// square(5);

// Task 7
// var start = prompt("start");
// var end = prompt("end");
// function count(start, end){
//   for (var i=start; i <= end; i ++){
//     document.write(i + "<br/>")
//   }
// }
// count(start, end);

// Task 8
// var b = prompt("base");
// var p = prompt("perp");
//
// function geometry(b, perp){
//   var base = b * b;
//   var perpendicular = perp * perp;
//
//   var hyp = Number(base) + Number(perpendicular);
//   square(hyp);
//   function square(hyp){
//     document.write(hyp * hyp);
//   }
//
// }
// geometry(b, p)

// Task 9
// var width = 25;
// function area(width, height){
//   document.write("area " + width * height);
// }
// area(width, 5)

// Task 10
// var word = prompt("word");
// function palindrome(word){
//   if (word[0] === word[word.length - 1]){
//     document.write("it is a palindrome word");
//   } else {
//     document.write("nope its not");
//   }
// }
// palindrome(word);

// Task 11
// function titleCase(str) {
//    var splitStr = str.toLowerCase().split(' ');
//    for (var i = 0; i < splitStr.length; i++) {
//        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//    }
//    return splitStr.join(' ');
// }
//
// document.write(titleCase('the quick brown fox'));

// Task 12

// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     document.write(word);
// }
// longestWord("web development tutorial");

// Task 13
// function numOfChar(str, char){
//   num = str.match(char).length;
//   document.write(num)
// }
// numOfChar("hello world", /l/g);

// Task 14
// var radius = 20;
// function calcCircumference(radius){
//   circumference = 2 * 3.142 * radius;
//   document.write("circumference: " + Math.round(circumference) + "<br/>");
//   calcArea(radius);
// }
// function calcArea(radius){
//   area = 3.142 * (radius * radius);
//   document.write("area: " + area);
// }
// calcCircumference(radius)
