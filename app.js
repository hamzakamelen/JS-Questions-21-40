// chapter 21 Changing case
// Question no 01:
// var yourCity = prompt("Enter your city")
// var city = yourCity.toUpperCase()
// document.write(city);

// Question no 2

// var titleCase = prompt("your city?");
// var caseTitle = titleCase.slice(1,2);
// var titleOther = titleCase.slice(2);
// caseTitle = caseTitle.toUpperCase();
// titleOther = titleOther.toLowerCase();
// var neww = caseTitle + titleOther;
// document.write(neww);

// chapter no 22  Strings: measuring length and extracting parts

// Question no 01":
// var Model= prompt("Enter your favorite mobile phone model.")
// var modelLength = Model.length;
// document.write(modelLength);

// question no 02:  

// var userInput = prompt("Enter Your NAME");
// var lastCharacter = userInput.slice(-1);
// document.write(lastCharacter);

// chapter no 23 Strings: finding segments

// question no 01:
// var country = "Pakistani"
// var indexCountry = country.indexOf("n");
// document.write(indexCountry);

// question no 02:
// var a = prompt("your Name")
// for(i=0; i < a.length; i++){
//     var text = a.slice(i,i+1);
//     if(text== "@"|| text == "!" || text== "#" ){
//         alert("enter Valid Name ")
//     } else {
//         alert(a);
//     }
// }

// question no 03:
// var string = "The quick brown fox jumps over the lazy dog"
// var counting = string.toLowerCase()
// var count = 0;
// for(i=0; i < string.length; i++ ){
//     var thee = counting.slice(i,i+3)
//     if(thee="the"){
//         count++
//     }
// }
// console.log(count)

// chapter no 24 Strings: finding a character at a location
// question no 01
// var nationality= "Pakistani"
// var character = nationality.charAt(3)
// document.write(character);

// chapter no 25: Strings: replacing characters
// question no 01
// var city = "Hyderabad"
// var changeCity = city.replace("Hyder","Islam")
// document.write(changeCity); 

// question no 02
// var message = "Ali and Sami are best friends. They play cricket and football together";
// var newMessage = message.replace(/and/g,"&")
// document.write(newMessage);

// chapter no 26 Rounding numbers

// Question no 01 
// var int = +prompt("enter positive numbeer")
// document.write(int)
// var num = Math.round(int)
// console.log(num)
// var num1 = Math.floor(int)
// console.log(num1)
// var num2 = Math.ceil(int)
// console.log(num2)

// question no 02:
// var int = +prompt("enter negative numbeer")
// document.write(int)
// var num = Math.round(int)
// console.log(num)
// var num1 = Math.floor(int)
// console.log(num1)
// var num2 = Math.ceil(int)
// console.log(num2)

// chapter no 27: Generating random numbers

// question no 01:
// var dice = Math.floor(Math.random() *6 + 1 )
// console.log(dice);

// question no 02: 
// var game = Math.floor(Math.random()*2+1)
// if (game==2){
//     document.write("Head")
// } else {
//     document.write("Tail")
// }

// question no 03:
// var userSecret = +prompt("Enter number (1 to 10)")
// var programSecret = Math.floor(Math.random()*10+1)
// if(userSecret==programSecret){
//     alert("Congratulations You WIN")
// } else {
//     alert("TRY AGAIN")
// }
// Chapter no 28 Converting strings to integers and decimals

// question no 01:
// var userWeight = prompt("Enter Your Weight");
// var weight = parseFloat(userWeight);
// console.log(weight);

// chapter no 29 Converting strings to numbers, numbers to strings

// question no 01:
// var string = "472"
// var int = Number(string);
// document.write("Type "  + typeof(int) );
// question no 02
// var num = 35.36 ;
// var newNum = num.toString().replace(".","")
// console.log(newNum);

// chapter no 30 Controlling the length of decimals
// question no 01
// var percentage = 30 / 45 * 100;
// var npercentage = percentage.toFixed(2)
// console.log(npercentage)

// chapter no 31,32,33,34:DATE METHODS
// question no 01:
// var date = new Date()
// document.write(date);

// question no 02
// var months = ["January" , "Feburary" , "March" , "April" , "May" , "June" , " July" , "August" , " September" , "October" , "November" , "December" ]
// var todayDate = new Date()
// var month = todayDate.getMonth()
// document.write(months[month]);

// question no 03
// var days = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"]
// var todayDate = new Date()
// var day = todayDate.getDay()
// document.write(days[day]);

// question no 04:
// var days = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"]
// var todayDate = new Date()
// var day = todayDate.getDay()
// document.write(days[day]);
// if(day=="Sun"||day=="Sat"){
//     alert("Its Fun Day")
// } else {
//     alert("Working Day")
// }

// question no 05:
// var todayDate = new Date()
// var date = todayDate.getDate()
// console.log(date);
// if(date < 16){
//     alert("First fifteen days of the month")
// } else {
//     alert("Last days of the month")
// }

// question no 06
// var todayDate = new Date()
// console.log(todayDate)
// var millisec = todayDate.getTime()
// console.log("Elapsed milliseconds since January 1,1970:   " + millisec)
// var minute = millisec/1000/60
// console.log("Elapsed minutes since January 1,1970:  "+ minute);

// question no 07
// var todayDate = new Date()
// console.log(todayDate);
// var hour = todayDate.getHours()
// console.log(hour)
// if (hour < 12){
//     console.log("Its PM")
// } else{
//     console.log("Its AM")
// }

// question no 08:
// var laterDate = new Date ("December 31,2020")
// console.log(laterDate)

// question no 09:
// var todayDate = new Date()
// var ramzanDate = new Date ("June 18,2015")
// console.log(ramzanDate)
// var milliToday = todayDate.getTime()
// // var milliRamzan = milliRamzan.getTime()
// var diff = milliToday - ramzanDate
// console.log(diff)
// var days = diff/(1000*60*60*24)
// console.log(days + " Days passed since June 18,2015")

// question no 10:
// var date = new Date ("January 01 ,2015")
// var passedDate = new Date("December 05 , 2015")
// var newDat = passedDate - date
// console.log(newDat)
// var second = newDat/(1000*60)
// console.log("On reference date "+ passedDate + second +" Seconds Have Passed Since Beginning of 2015")

// question no 11:

// var todayDate = new Date()
// console.log("Current Date:  " +todayDate);
// var neDate = new Date()
// neDate.setHours(todayDate.getHours() - 1)
// console.log("One Hour Ago it was " +neDate)

// question no 12:

// var todayDate = new Date()
// console.log("Current Date:  " +todayDate);

// var newYear = new Date()
// newYear.setFullYear(todayDate.getFullYear() - 100)
// console.log ("100 years back it was " + newYear)

// question no 13

// var todayDate = new Date()
// var Age = +prompt("Enter Your Age")
// var thisYear = todayDate.getFullYear()
// console.log("Your Age is: " + Age)
// console.log( thisYear - Age)

// question no 14:
// Electricity Bill
// var Name = prompt("Enter Your Name")
// document.write("Consumer Name: " + Name + "<br />")
// var months = ["January", "Feburary", "March", "April", "May", "June", " July", "August", " September", "October", "November", "December"]
// var todayDate = new Date()
// var month = todayDate.getMonth()
// document.write("Current Month: "+ months[month] + "<br />" );
// var Units = +prompt("Enter your Meter Units ")
// document.write("Number Of Units: "+ Units + "<br />")
// var charges = 100
// document.write("Charges per unit:" + charges+ "<br />")
// var payableAmount = charges * Units
// document.write("Net Payable Amount (with in Due Date): " + payableAmount + "<br />")
// var late_charges = 120
// document.write("Late Payment Surcharge: " + late_charges + "<br />")
// var after = payableAmount + late_charges
// document.write("Gross Amount Payable (after Due Date): " + after + "<br />")

// CHARTER NO 35,36,37,38
// Question no 01:
// function currentDate() {
//     var newDate = new Date()
//     alert(newDate)
// }
// currentDate()

// question no 02:
// function Username(firstname,lastname){
//     alert("Congratulations  " + firstname,lastname)
// }
// var first = prompt("firstName")
// var second = prompt("lastname")
// Username(first+" "+second)

// question no 03:
// function thirdquestion() {
//     var num1 = +prompt("Enter First Number")
//     var num2 = +prompt("Enter second Number")
//     var final = num1 + num2
//     return final
// }
// var value = thirdquestion()
// alert("Final Value " + value)

// question no 04:
// function calculator(num1,sign,num2) {
//     if(sign =="+"){
//         return num1 + num2
//     }else if(sign =="*"){
//         return num1 * num2
//     }else if(sign =="/"){
//         return num1 / num2
//     } else if(sign =="-"){
//         return num1 - num2
//     }
// }
// var num1 = +prompt("NUMBER 1")
// var sign = prompt("sign")
// var num2 = +prompt("NUMBER 2")
// var calc = calculator(num1,sign,num2) 
// document.write(calc)

// question no 05:
// function argu(numb) {
//     var square = numb * numb
//     return square
    
// }
// var result = argu(16)
// document.write(result)

// question no 06:
// function factorial(numb) {
//     if(numb < 0){
//         return -1
//     }
//     else if(numb == 0 ){
//         return 1
//     }
//     else{
//         return (numb * factorial( numb - 1 ))
//     }
// }
// var result = factorial(5)
// document.write(result)

// question no 07:
// function count() {
//     var countStart = +prompt("Enter Counting starting number")
//     var countEnd = +prompt("Enter Counting ending number")
//     for(var i= countStart; i <= countEnd;i++){
//         document.write(i + "<br />")
//     }
// }
// count()

// question no 08
// function calhypotenous(){
//     function calculatesquare(){
//         var base = +prompt("Enter Base")
//         var perpendicular = +prompt("Enter Perp")
//         return base,perpendicular
//     }
//     return calculatesquare;
// }
// calhypotenous()
// NOT WORKING

// question 09:
// function areaoftriangle(width,height){
//     var area = width * height
//     document.write(area)
// }
// var wid = 20
// areaoftriangle(21,wid)

// QUESTION NO 10
// ..........................
// var palinword = prompt("Enter Word")
// function palindrome(){
//     var check = ""

//     for(i = palinword.length-1 ; i >=0 ; i--){
//         check += palinword[i]
//     }

//     if(check === palinword){
//         alert("This Word is Palindrome")
//     }else {
//         alert("This Word is not Palindrome")
//     }
// }
// palindrome()

// Q11

// function uppercase(str){
//     var array1 = str.split(" ")
//     var newarray = []

//     for(var x = 0 ; x < array1.length ; x++){
//         newarray.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1))
//     }
//     return newarray.join(" ")
// }
// var result = uppercase("the quick brown fox")
// document.write(result)

// Q12

// function longestword(str){
//     var arr = str.split(" ")
//     var lgword = ""

//     for( i = 0 ; i < arr.length ; i++){
//         var ind = arr[i]

//         if(ind.length > lgword.length){ 
//            lgword = ind 
//         }

//     }
//     return lgword

// }
// var rs = longestword("Web Developent Tutorial")
// console.log(rs)

// Q13

// function counter(string , letter){
//     var count = 0;
//     for(i = 0 ; i < string.length ; i++){
//         if(string.charAt(i) === letter){
//             count++
//         }
//     }
//     return count;
// }
// var ct = counter("hamza" , "a")
// console.log(ct)

// Q14

// function circumference(){
//     var radius = 20
//     var pie = 3.142
//     var circle = 2 * pie * radius
//     document.write(circle + "<br />")
// }
// circumference()

// function area(){
//     var radius = 20
//     var pie = 3.142
//     var circle = pie * radius**2
//     document.write(circle)
// }
// area()


// Chapter 39,40

// Q1 

// function power(a,b){
//     var c = a*a
//     var d = b*b
//     console.log(c,d)
// }
// power(2,3)

// Q2

// var year = +prompt("Enter Any Year")
// switch (year){
    
//     case 2012:
//     alert("Its Leap Year")
//     break;

//     case 2016:
//     alert("Its Leap Year")
//     break;

//     case 2020:
//     alert("Its Leap Year")
//     break;

//     default:
//         alert("Its Not Leap Year")
// }

// Q3

// function calculation(a,b,c){
//     var s = ( a + b + c ) / 2

//     function area(){
//         var area = s*(s - a)(s - b)(s - c)
//         var root = Math.sqrt(area)
//         document.write(root)
//     }
//     area()
// }
// calculation(2,3,4)

// Q4

// function subject(Math,English,Urdu){
    
//     function Avg(){
//         var av = (Math + English + Urdu) / 2
//         return av
//     }
//     var average = Avg()
    
//     function Perc(){
//         var totalMarks = 300
//         var obtainedMarks = Math + English + Urdu
//         var per = (obtainedMarks / totalMarks)*100
//         return per   
//     }
//     var Percentage = Perc()
//     return average,Percentage
// }

// var a = +prompt("Enter Math Mark")
// var b = +prompt("Enter English Mark")
// var c = +prompt("Enter Urdu Mark")
// console.log(subject(a,b,c))

// Q5

// function index(string){
//     var ind = string.indexOf("d")
//     console.log(ind)
// }
// index("adnan")

// Q6

// function check (){
//     var res = ""
//     var str = "gjgmaabbbc"

//     for(i = 0 ; i < str.length ; i++){
//         if("aeiouAEIOU".match(str[i]) === null ){
            
//         }else {
//             res += str[i]
//         }
//         return res
//     }
// }
// var chk = check()
// console.log(chk)

// chapter 21 to 40 completed
