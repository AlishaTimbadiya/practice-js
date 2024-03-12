console.log('hello');

// variable & value
var myAge = 30;
console.log(myAge);

// datatype 
// number
var myfavNum = 5;
console.log(myfavNum);

// string
var myName = "alisha";
console.log(myName);

// boolean
var isRaining = false;
var areYouAwesome = true;
console.log(isRaining);
console.log(typeof isRaining);

// undefined
var alisha;
console.log(alisha);

// null
var badMemories = null;
console.log(badMemories);

// typeof operator
var myName = "alisha";
console.log(myName);
console.log(typeof myName);
// convert a number to string
console.log(typeof (myName + " "));          

var myNum = "5";
console.log(myNum);
console.log(typeof myNum);
// convert a string to a number 
console.log(typeof +myNum);


// if statement 
var MyName = "alisha";
if(true){
    console.log("true value");
}else{
    console.log("false value");
}


// parseInt
console.log(parseInt("xuz"));
console.log(parseInt("@#&"));

// ! NAN === NAN why is it false?
if(NaN == NaN){
    console.log("both are equal");
}else{
    console.log("not equal");
}

// concatenation 
const str = "alisha " + "timbadiya";
console.log(str);

// OPERATOR
// assignment operator
var myFavNum = 15;

// arithmetic operator
var x=5;
var y=10;
var sum = x + y;
console.log(sum);

// subtraction 
var x=5;
var y=10;
var sub = x - y;
console.log(sub);

// mutliplication
var x=5;
var y=10;
var mutliplication = x * y;
console.log(mutliplication);

// division 
var x=5;
var y=10;
var devide = x / y;
console.log(devide);

// modulus(%)
var x=17;
var y=3;
var modulus = x % y;
console.log(modulus);

// questions
var result ="hello" / 2;
console.log(result); 

var ans = 0.1 + 0.2;
console.log(ans);

var Ans = 0.1 + 0.2;
console.log(Ans.toFixed(1));

// equal
console.log(5 == 5 );
console.log(5 == "5" );

var num1 = 5
var num2 = 5
if(num1 == num2){
    console.log("both are equal");
}else{
    console.log("not equal");
}

// strict equal
console.log(5 === "5" );

// not equal
console.log(5 != 5 );

// grater than
console.log(5>2);

// less than
console.log(5<7);

// grater than or equal to 
console.log(10>=10);

// less than or equal to 
console.log(5<=10);

// LOGICAL OPERATOR (&&)  both are true , result true otherwise false
var p = 10;
var q = 20 ;
console.log(p > 9 && q > 9);

// or operator (||) atleast one true ,result true otherwise false
var w= 10;
var r = 20 ;
console.log(w > 0 || r < 9);

// not operator (!)  true is false ,, false is true
var isOpen = true;
console.log(!isOpen);

// ternary operator
var age =15;
var result = age >=18 ? "yes" : "no";
console.log(result);

// question
var score = 58;
var Result = score>=60 ? "pass" : "fail";
console.log(Result);

console.log(typeof("5" - 3));

console.log(2 < 12 < 5);

console.log("20" + 10 + 10);

// CONTROL STATEMENTS & LOOPS
// if statmenet
var temp =40;
if(temp>30){
    console.log("go to beach");
}else{
    console.log("watch TV at home");
}

var temp =40;
if(temp>=50){
    console.log("go to beach");
}else if(temp >= 20 && temp < 50){
    console.log("watch TV at home");
}else{
    console.log("by by");
}

// even or odd
var num = "7"
if(num % 2 === 0){
    console.log("num is even");
}else{
    console.log("num is odd");
}

// positive nagative or zero
var Num =12;
if(Num === 0){
    console.log("number is zero");
}else if(Num > 0){
    console.log("number is positive");
}else{
    console.log("number is nagative");
}

// switch statement
var day ="friday";
switch(day) {
    case "monday":
        console.log("today is monday");
        break;

    case "friday":
        console.log("let's go to party");
        break;

    case "sunday":
        console.log("have to fun");
        break;

    default:
        console.log("no match the condition");
}


// areaofshapes
var areaofshapes = "square";
var a=5;
var b=10;
var result;
switch(areaofshapes){
    case "square":
        result = a*a;
        console.log(result);
        break;

    case "rectangle":
        result = a * b;
        console.log(result);
        break;

    case "circle":
        var r=2;
        result = 3.142 *(r*r);
        console.log(result);
        break;

        default:
            console.log("no match shape");
}

// while loop
// print num 1 to 10 using while loop
var num = 1;
while(num<=10){
    console.log(num);
    num++;
}

// print table using while loop
var num=1;
while(num<=10){
    console.log("5 * " + num  + " = "  + (5*num));
    num++ ;
}

// do - while loop
var num = 1;
do{
    console.log(num);
    num++;
}while(num<=10)

// for loop
for(num = 11; num<=20; num++){
    console.log(num);
}

// calculate the sum of 1 to 10 number using for loop
var sum = 0;
for(var num =1 ; num <=10 ;  num ++ ){
   var sum = sum + num;
}
console.log(sum);

// leap  year checker
var year = 2004;
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ){
    console.log(year,"is leap year");
}else{
    console.log(year,"not a leap year");
}

// pattern
for(var i =1; i<=5;  i++){
    var pattern = "";
    for(var j=1; j<=i; j++){
        pattern = pattern +  " * ";
    }
    console.log(pattern);
}


//  FUNCTION
function add(a,b){
    return a + b;
}console.log(add(3,7));
console.log(add(3,3));


function greet(){
    console.log("Hello World!");
}
greet();

  
function krishna(name){
    console.log("hello " + name + " ,welcome to javascript");
}
krishna("John Doe");
krishna("Jane Smith");

// function expression
var express = function(x,y){
    console.log(x+ y);
}
express(2,8);

// template strings (ES6)
let firstName = "alisha";
let lastName = "timbadiya";
let fullName = `${firstName} ${lastName}`;  
console.log(fullName);

// string interpolation
let Age = 21;
let message =  `i am ${Age} years old`;
console.log(message);

// multiline string
let mutiline = `hyyy
hello
good morning
byyy`;
console.log(mutiline);

// default function parameter
function add(a,b=10){  
    return a+b;
}console.log(add(5,7)); // output: 12

// fat arrow function (=>)
const Sum =(a,b) => {
    console.log(`the sum of ${a} and ${b} is ${a+b}`);
    return a+b;
};Sum(5,5);

// function calculator
function calculator (num1,num2,operator){
    let result;
    switch(operator){
        case "+":
            return num1 +num2;
   
        case "-":
            return num1 - num2;
           
        default:
            return "no operator found";
    }
}
console.log(calculator(2,5,"+"));
console.log(calculator(5,4,"-"));

// reverse string
const ReverseString = (str) => {
    let reverse = "";
    for(let char = str.length -1; char>=0 ; char--){
       reverse = reverse + str[char]; 
} return reverse;
};
console.log(ReverseString("Hello World!"));

// palindrome number
const isPalindrome = (str) => {
    let reverse = "";
    for(let char = str.length -1; char>=0 ; char--){
       reverse = reverse + str[char]; 
    }
       if(str === reverse){
        return true;
       }else{
        return false;
       }
};
console.log(isPalindrome("level"));

