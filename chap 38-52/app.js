// 1
// chapter 38-42
// function power(a, b){
//     Math.pow(a, b);
// }
// power(5,2);

// 2
// function leapYear(year){
//     if (year % 2 === 0){
//         console.log('it is a leap year');
//     } else {
//         console.log('its not a leap year');
//     }
// }
// leapYear(2020);

// 3
// function triangle(a,b,c){
//     var S = ( a + b + c ) / 2;
//     areaOfTriangle(S, a, b, c);
// }
// function areaOfTriangle(S, a, b, c){
//     var area = S * (S - a) * (S - b) * (S - c);
// }
// triangle(2,4,5)

// 4
// function mainFunction(student1, student2, student3, average, percentage){
//     if(average){
//     console.log('average marks: ', average);
//     console.log('percentage: ', percentage + "%");
//     } else {
//     var total = student1 + student2 + student3;
//     avgFunction(total);
//     }
// }
// function avgFunction(total){
//     var average = total / 3;
//     perFunction(total, average);
// } 
// function perFunction(total, average){
//     var percentage = (total * 100) / 300
//     mainFunction(20, 40, 60, average, percentage);
// }
// mainFunction(40, 90, 80);

// 5
// function indexOf(string, character) {
//     var i=0;
//     while(i < string.length){
//         if(string[i] == character){ 
//             return i
//         }
//         i++                         
//     }
//     return -1;                  
// }
// console.log(indexOf('mango', 'o'));

// 6
// function vowelsRemover(str){
//     var withoutVowels = str.replace(/[aeiou]/gi, '');
//     return withoutVowels;
// }
// console.log(vowelsRemover('abcdefghijklmno'))

// 7
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let vowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (vowel) {
//               count++;
//               vowel = false;
//             } else {
//               vowel = true;
//             }
//             break;
//           }
//         default:
//           vowel = false
//       }
//     }
  
//     return count
//   }
  
//   console.log(findOccurrences());

// 8
// var input = prompt('enter distance');
// function kmToM(input){
//     var metre = input * 1000;
//     document.write('km to metre: ' + metre + '<br/>');
//     kmToF(input);
// }
// function kmToF(input){
//     var feet = input * 3280.84;
//     document.write('km to feet: ' + feet + '<br/>');
//     kmToI(input);
// }
// function kmToI(input){
//     var Inch = input * 39370.08;
//     document.write('km to Inch: ' + Inch + "<br/>");
//     kmToC(input);
// }
// function kmToC(input){
//     var centi = input * 100000.0032;
//     document.write('km to Inch: ' + centi + '<br/>');
// }
// kmToM(input);

// 9
// function overPay(overwork){
//     var weekWork = 40;
//     if (weekWork >= overwork){
//         console.log("you haven't work overtime");
//     } else {
//         var overPay = (overwork - 40) * 12;
//         console.log('your have worked over time so you have been paid: ', overPay + 'Rs');
//     }
// }
// overPay(40);

// 10
// var exchange = prompt('enter amount');
// function cashier(exchange){
//     var a = exchange[0];
//     var b = exchange - a * 100;
//     var c, d;
//     if(b <= 40){
//         c = String(b);
//         c = c[0]
//         document.write('you will have ' + a + ' hundred rupee notes ' + c + ' ten rupee notes'); 
//     } else if (b >= 50){
//         c = b - 50;
//         d = String(c);
//         d = d[0];
//         document.write('you will have ' + a + ' hundred rupee notes ' + '1 fifty rupee note and ' + d + ' ten rupee notes' );
//     } 
// }
// cashier(exchange);

// chap 43-48
// function showAlert(){
//     alert('thanks for purchasing');
// }

// var arr = ['john', 'doe', 'mark', 'jane'];
// var elem = document.getElementById('name');

// for (var i=0; i<arr.length; i++){
    
  
// }

// 4
// var elem = document.getElementById('image');
// function changeImage(){
//     elem.src = './images/10.jpg'
// }
// function backToFirst(){
//     elem.src = './images/11.jpg'
// }

// 5
// var elem = document.getElementById('counter');
// var num = 0

// function increment(){
//     num += 1;
//     elem.innerHTML = num;
// }
// function decrement(){
//     num -= 1;
//     elem.innerHTML = num;
// }

// 4 
// var ul = document.getElementById('ul1');

//     var li = document.createElement('li')
//     var p1 = document.createElement('p');
//     var p2 = document.createElement('p');
//     var heading1 = document.createElement('h3');
//     var heading2 = document.createElement('h3');
//     var editBtn = document.createElement('button');

//     heading1.innerHTML = "Name";
//     heading2.innerHTML = "Class"

//     li.setAttribute('class', 'students')
//     ul.appendChild(li);

//     var btn = document.createElement('button');

//     p1.innerHTML = "john";
//     p1.setAttribute('class', 'p1');
//     heading1.appendChild(p1);
//     li.appendChild(heading1);

//     p2.innerHTML = "10th";
//     p2.setAttribute('class', 'p2');
//     heading2.appendChild(p2);
//     li.appendChild(heading2);

//     btn.innerHTML = "Delete";
//     btn.setAttribute('class', 'btn');
//     btn.addEventListener('click', function(){
//         btn.parentNode.remove();
//     });
//     btn.setAttribute('class', 'btn');
//     li.appendChild(btn);
// 49-52
// 1
// var elem = document.getElementById('submit');
// var nameElem = document.getElementById('name');
// var emailElem = document.getElementById('email');
// var passElem = document.getElementById('password');
// elem.addEventListener('click', function(e){
//     e.preventDefault()
//     document.write('Name ' + nameElem.value + "<br/>");
//     document.write('Email ' + emailElem.value + "<br/>");
//     document.write('Password ' + passElem.value + "<br/>");
// })

// 2
// var elem = document.getElementById('content');
// var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it tomake a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentiallyunchanged. It was popularised in the 1960s with the release of Letrasetsheets containing Lorem Ipsum passages, and more recently with desktoppublishing software like Aldus PageMaker including versions of LoremIpsum";
// elem.innerHTML = text.substring(0, 99);
// let link = document.createElement('a');
// link.innerHTML = 'read more'
// link.setAttribute('href', '#')
// link.addEventListener('click', function(){
//     elem.innerHTML = text;
// })
// elem.appendChild(link);

// 3
// var ul = document.getElementById('ul1');

//     var li = document.createElement('li')
//     var p1 = document.createElement('p');
//     var p2 = document.createElement('p');
//     var heading1 = document.createElement('h3');
//     var heading2 = document.createElement('h3');
//     var editBtn = document.createElement('button');

//     heading1.innerHTML = "Name";
//     heading2.innerHTML = "Class"

//     li.setAttribute('class', 'students')
//     ul.appendChild(li);

//     var btn = document.createElement('button');

//     p1.innerHTML = "john";
//     p1.setAttribute('class', 'p1');
//     heading1.appendChild(p1);
//     li.appendChild(heading1);

//     p2.innerHTML = "10th";
//     p2.setAttribute('class', 'p2');
//     heading2.appendChild(p2);
//     li.appendChild(heading2);

//     btn.innerHTML = "Delete";
//     btn.setAttribute('class', 'btn');
//     btn.addEventListener('click', function(){
//         btn.parentNode.remove();
//     });
//     btn.setAttribute('class', 'btn');
//     li.appendChild(btn);

//     editBtn.innerHTML = 'Edit';
//     editBtn.setAttribute('class', 'btn');
//     li.appendChild(editBtn);
//     editBtn.addEventListener('click', function(){
//         var value = prompt('edit name', editBtn.parentNode.childNodes[0].childNodes[1].childNodes[0].nodeValue);
//         editBtn.parentNode.childNodes[0].childNodes[1].childNodes[0].nodeValue = value;

//         var value2 = prompt('edit class', editBtn.parentNode.childNodes[1].childNodes[1].childNodes[0].nodeValue);
//         editBtn.parentNode.childNodes[1].childNodes[1].childNodes[0].nodeValue = value2;
//     });
    