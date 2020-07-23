var arrayOfArray = [["a", "b", "c"], [1, 2, 3], [true, true, false, false]];

var array = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
for (var i = 0; i < array.length; i++){
 document.write(array[i] + "<br></br>")
}

for (i = 1; i < 11; i++){
  document.write(i + "<br></br>");
}

var table = prompt("Enter table");
var length = prompt("Enter length");

for (var i = 1; i < Number(length) + 1; i++){
  document.write(i * Number(table) + "<br></br>");
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++){
    document.write(fruits[i] + "<br></br>");
}

var counting = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
for (var i=0; i<counting.length; i++){
  document.write(counting[i] + ", ")
}

var reverseCounting = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = reverseCounting.length - 1; i >= 0; i--){
  document.write(reverseCounting[i] + ", ")
}

var even = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < even.length; i++){
  document.write(even[i] * 2);
}

var odd = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < odd.length; i++){
  document.write(odd[i] * 3);
}

var series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < series.length; i++){
  document.write(series[i] * 2 + "k" + ", ");
}

var shop = ["cake", "apple pie", "cookie", "chips", "patties"];
var user = prompt("enter item you wanna buy");
var search = shop.indexOf(user);
if (search === -1){
    document.write("we are sorry " + user + " is not available");
} else {
  document.write(shop[search] + " is available at index of " + search);
}

var largestNumber = [23, 52, 161, 7436, 2534, 663, 66];
var largest = 0;
for (var i=0; i<largestNumber.length; i++){
  if (largestNumber[i] > largest){
    var largest = largestNumber[i]
  }
}
  document.write("Array " + largestNumber+ "<br></br>");
  document.write("largest Number in an array " + largest);

  var smallestNumber = [23, 52, 161, 7436, 2534, 663, 66];
  var smallest = Math.min.apply(null, smallestNumber);
  document.write("array " + smallestNumber + "<br></br>")
  document.write("smallest number " + smallest)


  var range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 , 19, 20];
  for(var i = 0; i < range.length; i ++){
    document.write(range[i] * 5 + ", ")
  }
