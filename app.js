// Chapter21
var allLower = userInput.toLowerCase();
var x = "YourStringHere";
x = x.toLowerCase();
var y = "YourStringHere";
y = y.toUpperCase();
var originalString = "YourStringHere"; 
var lowercaseString = originalString.toLowerCase();
var yourString = "YourStringHere"; 
var uppercaseString = yourString.toUpperCase();

alert(uppercaseString);
var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// Chapter 22-25
var sameWords = "captain";
sameWords = sameWords.slice(0, 1) + sameWords.slice(3);
var sameWords = "captain";
var characterCount = sameWords.length;
console.log(characterCount);
var inputString = "exampleString"; 
var characterCount = inputString.length;
var text = "Let's go to the park and then go grab some ice cream and go home.";
var lastIndex = text.lastIndexOf("go");
var indx = lastIndex !== -1 ? lastIndex : -1;
if (yourString.length >= 3 && yourString.charAt(2) === 'yourCharacter');

var str = "This is a 1st example, and there may be more 1s.";
var newStr = str.replace("1", "one");
var y = x.replace(/a/g, "z");

// Chapter 26
var roundedNumber = Math.round(yourNumber);
var origNum = 7.3; 
var roundNum = Math.ceil(origNum);
var originalNumber = 7.3; 
var roundedNumber = Math.round(originalNumber);
var numberToRound = 0.5;
var roundedNumber = Math.floor(numberToRound);

// Chapter 27
var randomNumber = Math.floor(Math.random() * 50) + 1;
var randomValue = Math.random();
function coinToss() {
    var randomNumber = Math.floor(Math.random() * 2);
    return randomNumber === 0 ? "heads" : "tails";
  }
  var tossResult = coinToss();
  console.log("The coin landed on: " + tossResult);
  
//   Chapter 29-29
var str = "42"; 
var num = parseInt(str); 
function stringToInt(str) {
    var num = parseInt(str, 10); 
    return num;
  }
  var str = "123";
  var result = stringToInt(str);
  console.log(result); 
  var str = "3.14";
var num = +str;
console.log(num);
var num = 42;
var str = num.toString();
console.log(str); 
var decimalStr = "3.14";
var roundedNum = Math.round(parseFloat(decimalStr));
console.log(roundedNum); 

// Chapter30
var num = 3.14159265359; 
var newNum = num.toFixed(4);
console.log(newNum); 
if (num.toFixed(2).toString().length > 4);
var originalNumber = 123.456789; 
var roundedString = originalNumber.toFixed(2);
alert(roundedString); 


  





  
  
  

