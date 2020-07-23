var array = [];

var strings = ["a", "b", "c"];

var numbers = [1, 2, 3, 4];

var boolean = [true, false, true, false];

var mixedArray = [true, 1, 3, "abcd"];


var color = ["red", "green", "blue", "pink"];
document.write(color, "<br/>");
var colorToBegining = prompt("what color do you wanna add to begining");
color.unshift(colorToBegining);
document.write(color, "<br />");
var colorToEnd = prompt("what color do you wanna add to the end");
color.push(colorToEnd);
document.write(color, "<br />");
color.unshift("orange", "silver");
document.write(color, "<br />");
color.shift();
document.write(color, "<br />");
color.pop();
document.write(color, "<br />");
var colorToAdd = prompt("color you wanna add");
var postion = prompt("position");
color.splice(postion, 0, colorToAdd);
document.write(color, "<br />");
var postionToRemove = prompt("position of item you wanna remove");
color.splice(postionToRemove, 1);
document.write(color, "<br />");


var studentScore = [230, 320, 440, 110,250];
document.write("Student Score: " + studentScore + "<br></br>");
var sortedScore = studentScore.sort();
document.write("Sorted students score: " + sortedScore + "<br></br>");

var cities = ["karachi", "lahore", "islamabad", "quetta", "multan"];
document.write("city list" + cities + "<br></br>");
var selectedCities = cities[0] + " " + cities[2] + " " + cities[4];
document.write("selected cities: " + selectedCities + "<br></br>")


var arr = ["This", "is", "my", "cat"];
var arrToString = arr.join("  ");
document.write("array: " + arr + "<br></br>");
document.write("string: " + arrToString + "<br></br>");


var computer = ["keyboard", "mouse", "printer", "monitor"];
for(var i=0; i < computer.length; i++){
  document.write("output: " + computer[i] + "<br></br>");
}


document.write("array " + computer + "<br></br>")
var reverse = computer.reverse();

document.write("reverse " + reverse + "<br></br>")


var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" ,"Haier"];
document.write(phones[0] + "<br></br>")
document.write(phones[1] + "<br></br>")
document.write(phones[2] + "<br></br>")
document.write(phones[3] + "<br></br>")
document.write(phones[4] + "<br></br>")
document.write(phones[5] + "<br></br>")
