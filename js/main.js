//! =========================================== Problem 1 ===========================================

// /*
// Write a program that allow to user enter number then printit
// Example
// Input: 5
// Output: 5
// */
// var num = window.prompt("enter number :");
// if (num >= 0 || num < 0) {
//   if (num == "" || num == null) {
//     console.log("this is invalid number");
//   } else {
//     console.log("your number is :" + num);
//   }
// } else {
//   console.log("this is invalid number");
// }

//! =========================================== Problem 2 ===========================================

// /*
// Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no
// Example1
// Input: 12 Output Yes
// Example 2
// Input: 9 Output No
// */

// var num = window.prompt("Enter a number can divide by 3 and 4");
// if (num >= 0 || num < 0) {
//   if (num == "" || num == null) {
//     console.log("this is invalid number");
//   } else {
//     if (num % 4 === 0 && num % 3 === 0) {
//       console.log("Yes");
//     } else {
//       console.log("No");
//     }
//   }
// } else {
//   console.log("this is invalid number");
// }

//! =========================================== Problem 3 ===========================================
// /*
//  Write a program that allows the user to insert 2 integers then print the max
// Example1
// Input: 3 5
// Output: 5
// Example 2
// Input: 10 7
// Output: 10
// */

// var num1 = +window.prompt("Enter the first number");
// if (num1 >= 0 || num1 < 0) {
//   if (num1 == "" || num1 == null) {
//     console.log("the first number is invalid");
//   } else {
//     var num2 = +window.prompt("Enter the second number");

//     if (num2 >= 0 || num2 < 0) {
//       if (num2 == "" || num2 == null) {
//         console.log("the second number is invalid");
//       } else {
//         if (num1 === num2) {
//           console.log("two numbers are equal");
//         } else {
//           console.log(`the first number is ${num1} \n the second number is ${num2}`);
//           (num1 > num2)
//             ? console.log("the greatest number is : " + +num1)
//             : console.log("the greatest number is : " + +num2);

//         }
//       }
//     } else {
//       console.log("the Second number is invalid");
//     }
//   }
// } else {
//   console.log("the first number is invalid");
// }
//! =========================================== Problem 4 ===========================================
// /*
// Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.
// Example 1
// Input: -5
// Output negative
// Example2
// Input: 10
// Output positive
// */
// var num = window.prompt("Enter any number");
// if (num >= 0 || num < 0) {
//   if (num == "" || num == null) {
//     console.log("this is invalid number");
//   } else {
//     if (num == 0) {
//       console.log("this is zero number");
//     } else {
//       num > 0
//         ? console.log("the number is positive")
//         : console.log("the number is negative");
//     }
//   }
// } else {
//   console.log("this is invalid number");
// }

//! =========================================== Problem 5 ===========================================
// /*
// Write a program that take 3 integers from user then print the max element
// and the min element.
// Example 1
//  Input:7,8,5
// Output:
// max element = 8
// min element = 5
// Example2
// Input: 3 6 9
// Outputs:
// Max element = 9
// Min element = 3
// */

// var num1 = +window.prompt("Enter the first number");
// if (num1 >= 0 || num1 < 0) {
//   if (num1 == "" || num1 == null) {
//     console.log("the first number is invalid");
//   } else {
//     var num2 = +window.prompt("Enter the second number");

//     if (num2 >= 0 || num2 < 0) {
//       if (num2 == "" || num2 == null) {
//         console.log("the second number is invalid");
//       } else {
//         var num3 = +window.prompt("Enter the third number");

//         if (num3 >= 0 || num3 < 0) {
//           if (num3 == "" || num3 == null) {
//             console.log("the third number is invalid");
//           } else {
//             console.log(
//               ` the first number is ${num1} \n the second number is ${num2} \n the third number is ${num3} `
//             );
//             num1 == num2 && num1 == num3
//               ? console.log("the numbers are equals")
//               : console.log(
//                   ` the greatest number is : ${getTheGreatest(
//                     getTheGreatest(num1, num2),
//                     num3
//                   )} \n the smallest number is : ${getTheSmallest(
//                     getTheSmallest(num1, num2),
//                     num3
//                   )}`
//                 );
//           }
//         } else {
//           console.log("the third number is invalid");
//         }
//       }
//     } else {
//       console.log("the Second number is invalid");
//     }
//   }
// } else {
//   console.log("the first number is invalid");
// }

// function getTheGreatest(firstNumber, secondNumber) {
//   if (firstNumber > secondNumber) {
//     return firstNumber;
//   } else {
//     return secondNumber;
//   }
// }
// function getTheSmallest(firstNumber, secondNumber) {
//   if (firstNumber < secondNumber) {
//     return firstNumber;
//   } else {
//     return secondNumber;
//   }
// }
//! =========================================== Problem 6 ===========================================
// /*
// Write a program that allows the user to insert integer number then
// check If a number is even or odd

// Example 1
// Input: 8
// Output: even
// Example 2
// Input: 7
// Output: odd
// */

// var num = window.prompt("Enter any number");
// if (num >= 0 || num < 0) {
//   if (num == "" || num == null) {
//     console.log("this is invalid number");
//   } else {
//     num % 2 === 0 ? console.log("The number is even number") : console.log("The number is odd number");
//   }
// } else {
//   console.log("this is invalid number");
// }

//! =========================================== Problem 7 ===========================================
// /*
// Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant
// Example1
// Input: O
// Output: vowel
// Example 2
// Input: b
// Output:
// Consonant
// */
// var char = window.prompt("Enter any char");
// if (
//   char == "a" ||
//   char == "e" ||
//   char == "i" ||
//   char == "o" ||
//   char == "u" ||
//   char == "A" ||
//   char == "E" ||
//   char == "I" ||
//   char == "O" ||
//   char == "U"
// ) {
//   console.log("vowel");
// } else if (
//   char == "b" ||
//   char == "B" ||
//   char == "c" ||
//   char == "C" ||
//   char == "d" ||
//   char == "D" ||
//   char == "f" ||
//   char == "F" ||
//   char == "g" ||
//   char == "G" ||
//   char == "h" ||
//   char == "H" ||
//   char == "j" ||
//   char == "J" ||
//   char == "k" ||
//   char == "K" ||
//   char == "l" ||
//   char == "L" ||
//   char == "m" ||
//   char == "M" ||
//   char == "n" ||
//   char == "N" ||
//   char == "p" ||
//   char == "P" ||
//   char == "q" ||
//   char == "Q" ||
//   char == "r" ||
//   char == "R" ||
//   char == "s" ||
//   char == "S" ||
//   char == "t" ||
//   char == "T" ||
//   char == "v" ||
//   char == "V" ||
//   char == "w" ||
//   char == "W" ||
//   char == "x" ||
//   char == "X" ||
//   char == "y" ||
//   char == "Y" ||
//   char == "z" ||
//   char == "Z"
// ) {
//   console.log("Consonant");
// } else {
//   console.log("invalid Char");
// }

//! =========================================== Problem 8 ===========================================
// /*
// Write aprogram that allows user to insert integer then print all numbers between 1 to that’s number

// Example Input 5
// Output 1, 2, 3, 4, 5
// */

// var num = window.prompt("Enter positive integer number");
// if (num >= 0 || num < 0) {
//   if (num == "" || num == null) {
//     console.log("this is invalid number");
//   } else {
//     if (num == 0) {
//       console.log(
//         " this is zero number.\n please, Enter positive integer number"
//       );
//     } else {
//       num > 0
//         ? printNumbers(num)
//         : console.log(
//             " The number is negative \n please, Enter positive integer number"
//           );
//     }
//   }
// } else {
//   console.log("this is invalid number");
// }

// function printNumbers(number) {
//   var numbers =`{`;
//   for (let i = 1; i <= number; i++) {
//     i == number ? (numbers += i + "} ") : (numbers += i + " - ");
//   }
//   console.log(` your number is ${number} \n the list from 1 to your number is : ${numbers}`);
// }

//! =========================================== Problem 9 ===========================================
// /*
// Write a program that allows user to insert integer then print a multiplication table up to 12.
// Example
// Input: 5
// Outputs:
// 5 10 15 20 25 30 35 40 45 50 55 60
// */

// var num = window.prompt("Enter positive integer number");
// if (num >= 0 || num < 0) {
//   if (num == "" || num == null) {
//     console.log("this is invalid number");
//   } else {

//     num >= 0
//       ? multiplicationTable(num)
//       : console.log(
//           " The number is negative \n please, Enter positive integer number"
//         );

//   }
// } else {
//   console.log("this is invalid number");
// }

// function multiplicationTable(number) {
//   console.log(`The multiplication table for ${number} is`);
//   for (let i = 1; i <= 12; i++) {
//     console.log(`${i} x ${number} = ${i * number}`);
//   }
// }

//! =========================================== Problem 10 ===========================================
// /*
// Write aprogram that allows to user to insert number then print all even numbers between 1 to this number
// Example:
// Input: 15
// Output: 2 4 6 8 10 12 14
// */

// var num = window.prompt("Enter positive integer number");
// if (num >= 0 || num < 0) {
//   if (num == "" || num == null) {
//     console.log("this is invalid number");
//   } else {
//     if (num == 0) {
//       console.log(
//         " this is zero number.\n please, Enter positive integer number"
//       );
//     } else {
//       num > 0
//         ? printEvenNumbers(num)
//         : console.log(
//             " The number is negative \n please, Enter positive integer number"
//           );
//     }
//   }
// } else {
//   console.log("this is invalid number");
// }

// function printEvenNumbers(number) {
//   var numbers = `{`;
//   for (let i = 1; i <= number; i++) {
//     if (i == 2) {
//       numbers += i;
//       continue;
//     }
//     if (i % 2 == 0) {
//       numbers += " - " + i;
//     }
//   }
//   numbers += "} ";
//   console.log(
//     ` your number is ${number} \n the list of even number from 1 to your number is : ${numbers}`
//   );
// }

//! =========================================== Problem 11 ===========================================
// /*
// Write aprogram that take two integers then print the power
// Example:
// Input: 4 3
// Output: 64
// Hint how to calculate 4^3 = 4 * 4 * 4 =64
// */

// var number = window.prompt("Enter any number");
// if (number >= 0 || number < 0) {
//   if (number == "" || number == null) {
//     console.log("the number is invalid");
//   } else {
//     var power = window.prompt("Enter the power of this number");

//     if (power >= 0 || power < 0) {
//       if (power == "" || power == null) {
//         console.log("the power of this number is invalid");
//       } else {
//         console.log(`${number} power ${power} = ${number ** power}`);
//       }
//     } else {
//       console.log("the power number is invalid");
//     }
//   }
// } else {
//   console.log("the number is invalid");
// }

//! =========================================== Problem 12 ===========================================
// /*
// Write a program to enter marks of five subjects and calculate total, average and percentage.

// Example
// Input: - Enter Marks of five subjects:
// 95
// 76
// 85
// 90
// 89
// Output:-
// Total marks = 435
// Average Marks =87
// Percentage =87

// ^============================ assumed that this degree out of 100 ===============================
// */
// var totalMarks = 0;
// var isTotalMarksComplete = true;
// for (let i = 1; i <= 5; i++) {
//   var mark = window.prompt(`Enter your degree of subject :${i}`);

//   if (mark >= 0 || mark < 0) {
//     if (mark == "" || mark == null) {
//       console.log("the mark is invalid");
//       isTotalMarksComplete = false;
//       break;
//     } else {
//       console.log(`subject ${i} : ${Number(mark)}`);

//       totalMarks += Number(mark);
//     }
//   } else {
//     isTotalMarksComplete = false;
//     console.log("the mark is invalid");
//     break;
//   }
// }
// if (isTotalMarksComplete) {
//   console.log(` The Total marks = ${totalMarks} \n The Average Marks = ${totalMarks / 5} \n The Percentage = ${(totalMarks / 500) * 100}%`);
// }

//! =========================================== Problem 13 ===========================================
// /*
// Write a program to input month number and print number of days in that month.

// Example:
// Input: - Month Number: 1
//  Output:-. Days in Month: 31
// */
// var monthNumber = window.prompt(
//   "Enter the month number (1–12) to find out its number of days:"
// );
// if (monthNumber >= 1 || monthNumber <= 12) {
//   if (
//     monthNumber == 1 ||
//     monthNumber == 3 ||
//     monthNumber == 5 ||
//     monthNumber == 7 ||
//     monthNumber == 8 ||
//     monthNumber == 10 ||
//     monthNumber == 12
//   ) {
//     console.log("the month number " + monthNumber + " has: 31 Days");
//   } else if (monthNumber == 2) {
//     console.log("the month number 2 has 28 days (common years) and 29 days (leap years)");
//   } else if (
//     monthNumber == 4 ||
//     monthNumber == 6 ||
//     monthNumber == 9 ||
//     monthNumber == 11
//   ) {
//     console.log("the month number " + monthNumber + " has: 30 Days");
//   } else {
//     console.log("invalid Month Number");
//   }
// } else {
//   console.log("invalid Month Number");
// }

//! =========================================== Problem 14 ===========================================
// /*
// Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F
// ^============================ assumed that this degree out of 100 ===============================
// */

// var Physics = marksOfSubjects(
//   window.prompt(`Enter your degree of Physics`),
//   "Physics"
// );
// if (!isNaN(Physics)) {
//   var Chemistry = marksOfSubjects(
//     window.prompt(`Enter your degree of Chemistry`),
//     "Chemistry"
//   );
// }
// if (!isNaN(Chemistry)) {
//   var Biology = marksOfSubjects(
//     window.prompt(`Enter your degree of Biology`),
//     "Biology"
//   );
// }
// if (!isNaN(Biology)) {
//   var Mathematics = marksOfSubjects(
//     window.prompt(`Enter your degree of Mathematics`),
//     "Mathematics"
//   );
// }
// if (!isNaN(Mathematics)) {
//   var Computer = marksOfSubjects(
//     window.prompt(`Enter your degree of Computer`),
//     "Computer"
//   );
// }
// if (!isNaN(Computer)) {
//   var percentage =
//     ((Physics + Chemistry + Biology + Mathematics + Computer) / 500) * 100;
//   var degree;
//   if (percentage >= 90) {
//     degree = "Grad A";
//   } else if (percentage >= 80) {
//     degree = "Grad B";
//   } else if (percentage >= 70) {
//     degree = "Grad C";
//   } else if (percentage >= 60) {
//     degree = "Grad D";
//   } else if (percentage >= 40) {
//     degree = "Grad E";
//   } else {
//     degree = "Grad F";
//   }
//   console.log(` The Percentage = ${percentage}% \n the degree = ${degree}`);
// }

// function marksOfSubjects(mark, subject) {
//   if (mark >= 0 || mark < 0) {
//     if (mark == "" || mark == null) {
//       console.log("the mark of " + subject + " is invalid");
//       return NaN;
//     } else {
//       console.log(`${subject} : ${Number(mark)}`);
//       return Number(mark);
//     }
//   } else {
//     console.log("the mark of " + subject + " is invalid");
//     return NaN;
//   }
// }

//! =========================================== Problem 15 ===========================================
// /*
// Write a program to print total number of days in month
// */
// var monthNumber = Number(
//   window.prompt("Enter the month number (1–12) to find out its number of days:")
// );
// switch (monthNumber) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("the month number " + monthNumber + " has: 31 Days");
//     break;

//   case 2:
//     console.log(
//       "the month number 2 has 28 days (common years) and 29 days (leap years)"
//     );
//     break;

//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("the month number " + monthNumber + " has: 30 Days");
//     break;

//   default:
//     console.log("invalid Month Number");
//     break;
// }

//! =========================================== Problem 16 ===========================================
// /*
// Write a program to check whether an alphabet is vowel or consonant
// */

// var char = window.prompt("Enter any char");
// switch (char) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//   case "A":
//   case "E":
//   case "I":
//   case "O":
//   case "U":
//     console.log("vowel");
//     break;

//   case "b":
//   case "B":
//   case "c":
//   case "C":
//   case "d":
//   case "D":
//   case "f":
//   case "F":
//   case "g":
//   case "G":
//   case "h":
//   case "H":
//   case "j":
//   case "J":
//   case "k":
//   case "K":
//   case "l":
//   case "L":
//   case "m":
//   case "M":
//   case "n":
//   case "N":
//   case "p":
//   case "P":
//   case "q":
//   case "Q":
//   case "r":
//   case "R":
//   case "s":
//   case "S":
//   case "t":
//   case "T":
//   case "v":
//   case "V":
//   case "w":
//   case "W":
//   case "x":
//   case "X":
//   case "y":
//   case "Y":
//   case "z":
//   case "Z":
//     console.log("Consonant");
//     break;

//   default:
//     console.log("invalid Char");
//     break;
// }

//! =========================================== Problem 17 ===========================================
// /*
// Write a program to find maximum between two numbers
// */
// var num1 = window.prompt("Enter the first number");
// switch (true) {
//   case num1 == null:
//   case num1 == "":
//   case isNaN(num1):
//     console.log("invalid number");
//     break;

//   default:
//     var num2 = window.prompt("Enter the second number");
//     switch (true) {
//       case num2 == null:
//       case num2 == "":
//       case isNaN(num2):
//         console.log("invalid number");
//         break;

//       case num1 == num2:
//         console.log(
//           ` the first number is ${num1} \n the second number is ${num2} \n the two numbers are equal`
//         );
//         break;

//       case Number(num1) > Number(num2):
//         console.log(
//           ` the first number is ${num1} \n the second number is ${num2} \n the maximum number is ${num1}`
//         );
//         break;

//       default:
//         console.log(
//           ` the first number is ${num1} \n the second number is ${num2} \n the maximum number is ${num2}`
//         );
//         break;
//     }

//     break;
// }
//! =========================================== Problem 18 ===========================================
// /*
// Write a program to check whether a number is even or odd
// */
// var num = window.prompt("Enter any number");
// switch (true) {
//   case num == null:
//   case num == "":
//   case isNaN(num):
//     console.log("invalid number");
//     break;

//   case num % 2 == 0:
//     console.log("even");
//     break;

//     default:
//     console.log("odd");
//     break;
// }
//! =========================================== Problem 19 ===========================================
// /*
// Write a program to check whether a number is positive or negative or zero
// */
// var num = window.prompt("Enter any number");
// switch (true) {
//   case num == null:
//   case num == "":
//   case isNaN(num):
//     console.log("invalid number");
//     break;

//   case num > 0 :
//     console.log("the number is positive");
//     break;

//     case num < 0 :
//     console.log("the number is negative");
//     break;

//     default:
//     console.log("the number is zero");
//     break;
// }
//! =========================================== Problem 20 ===========================================
// /*
// Write a program to create Simple Calculator
// */

// var num1 = window.prompt("Enter the first number");
// switch (true) {
//   case num1 == null:
//   case num1 == "":
//   case isNaN(num1):
//     console.log("invalid number");
//     break;

//   default:
//     var operation = window.prompt("Enter the operation(+ , - , / , *)");
//     switch (operation) {
//       case "+":
//         Add(num1, TakeNumber());
//         break;
//       case "-":
//         Minus(num1, TakeNumber());
//         break;
//       case "/":
//         Divide(num1, TakeNumber());
//         break;
//       case "*":
//         Multiply(num1, TakeNumber());
//         break;

//       default:
//         console.log("invalid operation");
//         break;
//     }

//     break;
// }

// function Multiply(num1, num2) {
//   isNaN(num2)
//     ? console.log("invalid number")
//     : console.log(`${num1} x ${num2} = ${Number(num1) * Number(num2)}`);
// }
// function Minus(num1, num2) {
//   isNaN(num2)
//     ? console.log("invalid number")
//     : console.log(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`);
// }
// function Divide(num1, num2) {
//   isNaN(num2)
//     ? console.log("invalid number")
//     : console.log(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`);
// }
// function Add(num1, num2) {
//   isNaN(num2)
//     ? console.log("invalid number")
//     : console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
// }

// function TakeNumber() {
//   var number = window.prompt("Enter the second number");
//   switch (true) {
//     case number == null:
//     case number == "":
//     case isNaN(number):
//       return NaN;

//     default:
//       return number;
//   }
// }
