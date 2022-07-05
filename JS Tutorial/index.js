//1. ways to print in console
//alert("me");
//document.write("This is document");

//2. Javascript API
//console.log("helloworld", 4 + 4, "Another log");
//console.warn("this is warning");
//console.error("This is error");
//console.clear();
//console.assert(4+7);

//3. Javascript variables
//What are variables? --> Containers to store data values
// var number1 = 34;
// var number2 = 53;
//console.log(number1 + number2);

//4. comment
//single line comment //
//multi line comment
/*
this 
is comment
*/

//5. data Types
// var num1 = 542; //number

// var str1 = "This is a string";
// var str2 = "This is also a string"; //string
// //object
// var marks = {
//   ravi: 34,
//   zahid: 54,
// };
//console.log(marks);

//booleans
// var a = true;
// var b = false;
//console.log(a);

// var und = undefined;
//console.log(und);
// var under; //undefined

//null
// var n = null;
//console.log(n); //null

/* at a very high level, there are two types of datatype
1. primitive data typpes: undefined,null,number, string, boolean, symbol
2.reference datatype: arrays, object
*/

//array
// var arr = [1, 2, 3, "string", 4, 5];
//console.log(arr);
//console.log(arr[2]);

//6. Operators
// var a = 6;
// var b = 5;
//console.log(a-b);
//console.log(a+b);
//console.log(a*b);
//console.log(a/b);

//assigment operator
// var c = b;
// c += 2;
//console.log(c);

//comparison operator
//console.log(a==b);
//console.log(a>=b);
//console.log(a<=b);
//console.log(a<b);

//Logical operator
//logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);
// //logical or
// console.log(true || false);
// console.log(false || false);
// console.log(false || false);
// console.log(true || true);
// //logical not
// console.log(! false);
// console.log(! true);

//Function

// function avg(a, b) {
//   return (a + b) / 2;
// }
// console.log(c=avg(4,6));

//DRY= Do NOT Repeat yourself
// var d= 6;
// var e = 8;
// function addi(d, e){
//     g = (d + e);
//     return c;
// }
// c1 = addi(8 + 8);
// c2 = addi(18 + 2);
// // console.log(c1, c2);

//COnditional Operator
// var age = 74;
// if(age>18){
//     console.log('You are not a kid')
// }
// else{
//     console.log('You are a kid')
// }
//SIngle if statement
//if-else statement
//if-else ladder
// var age = 82;
// if(age<2){
//     console.log('You are a kid')
// }
// else if(age<8){
//     console.log('You are a toddler')
// }
// else if(age<18){
//     console.log('You are a adult')
// }
// else
//     console.log('You are a old')

// for loop
// var arr = [1,2,3,4,5,6];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
//}

// foreeach
// arr.forEach(function(element){
//     console.log(element)
// })
//let is limited to block
// let j = 0;
// const a = 0;
// a = a + 1; //will not work
//while loop
// var arr = [1, 2, 3, 4, 5, 6];

// let j = 14;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// //dowhile
// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

//break and continue
// var arr = [1,2,3,4,5,6];
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//        // break;
//        continue;
//     }
//     console.log(arr[i])
// }

//Array methods
// let myArr= ["Fan","Camera",76,null,true];
// console.log(myArr.lemgth);
// myArr.pop(4);
// myArr.push("zahid")
//myArr.shift();
// myArr.unshift("zahid")
// const newLen =myArr.unshift("zaid")
// console.log(newLen);
// myArr.toString()
// myArr.sort()
//splice etc method of array to check
// console.log(myArr)

//String methods
// let myString = "ZAHid is is is A Good Boy";
// console.log(myString.length);
// console.log(myString.indexOf("is"));
// console.log(myString.lastIndexOf("is"))
// console.log(myString.slice(6,9));
// d= myString.replace("is","tare");
// console.log(d,myString)

//date
// myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Manipulation Document Object Model
//document
// document.location
// document.getElementById('click').click()
// document.getElementById('click').style.border = 'blue'
// document.getElementById('click').style.border = '2px solid blue'

//DOM
// let elem = document.getElementById('click');
// console.log(elem)

// let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// //elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-succ")

// elemClass[0].innerHTML
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
// tn =document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "This is another innertext child append";
// tn[0].appendChild(createdElement)
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is another innertext child replace";
// tn[0].replaceChild(createdElement2,createdElement)
//removeChild(elem)
//documents. images, links, domain, etc
//selecting using query
// sel = document.querySelector('.container')
// console.log(sel)
// sel1 = document.querySelectorAll('.container')
// console.log(sel1)

//Events in JavaScript
// function clicked() {
//   console.log("The Button was clicked");
// }
// window.onload = function () {
//   console.log("The document was loaded");
// };
// firstContainer.addEventListener("click", function () {
//     console.log("click on container")
// });
// firstContainer.addEventListener("mouseover", function () {
//     console.log("Mouse on container")
// });
// firstContainer.addEventListener("mouseout", function () {
//     console.log("Mouse out container")
// });

// firstContainer.addEventListener("mouseup", function () {
//     console.log("Mouse up when clicked on container")
// });
// firstContainer.addEventListener("mousedown", function () {
//     console.log("Mouse down when clicked on container")
// });

//Dragging look for it

// firstContainer.addEventListener("click", function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
//         console.log("click on container")
// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener("mouseup", function () {
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//   console.log("Mouse up when clicked on container");
// });

// firstContainer.addEventListener("mousedown", function () {
//   document.querySelectorAll(".container")[1].innerHTML =
//     "<b> we have clicked </b>";
//   console.log("Mouse down when clicked on container");
// });


//set timeout set time interval

//Arrow function
// function summ(a,b){
//     return a+b;
// }

// //this can be written as 
// sum = (a,b) =>{
//     return a+b;
// }


// logkaro = ()=>{
//         document.querySelectorAll('.container')[1].innerHTML = "<b> settime outlog karo function running </b>"

//     console.log("Log-in")
// }

// setTimeout(logkaro, 2000);

// setInterval(logkaro,2000)
// //clearInterval or clearTimeout to cancle timeout or interval
// clr= setTimeout(logkaro, 2000);
// clr = setInterval(logkaro,2000)
// clearInterval(clr)



//JavaScript LocalStorage
//localStorage.setItem('name', 'zahid')
//localstorage
//localStorage.getItem('name')
//localStorage.removeItem('name)
//localStorage.clear()

//JSON
// obj= {name:'zahid',length:1 , a:{this:"that"}}
// jso= JSON.stringify(obj)
// console.log(jso)
// console.log(typeof jso)

// parsed=JSON.parse(jso)
// console.log(parsed)

//JS version
// ECMAScript
///Template loiterals - backtics
a=34
console.log(`This variable is typecasted to string ${a}`)