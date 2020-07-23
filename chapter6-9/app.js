// 2. What will be the output in variables a, b & result after execution of the following script:
var a = 2, b = 1;

var result = --a - --b + ++b + b--;
console.log(result, result)


// Explain the output at each stage:
console.log("a", a);
--a;
console.log("--a", a)
 --a - --b;
console.log("--a - --b", a, b);
  --a - --b + ++b;
console.log("--a - --b + ++b", a, b);
   --a - --b + ++b + b--;
   console.log("--a - --b + ++b + b--", a, b);

var user = prompt("Enter your name");
alert("Welcome to our website " + user);

var table = prompt("Enter any number");
if(table === ""){

  document.write(5 * 1);
  document.write(5 * 2);
  document.write(5 * 3);
  document.write(5 * 4);
  document.write(5 * 5);
  document.write(5 * 6);
  document.write(5 * 7);
  document.write(5 * 8);
  document.write(5 * 9);
  document.write(5 * 10)
} else {
document.write(table * 1);
document.write(table * 2);
document.write(table * 3);
document.write(table * 4);
document.write(table * 5);
document.write(table * 6);
document.write(table * 7);
document.write(table * 8);
document.write(table * 9);
document.write(table * 10);
}
