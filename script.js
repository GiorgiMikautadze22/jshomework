// გადაეცით ფუნქციას ორი მასივი
// ფუნქციამ უნდა დააბრუნოს ახალი მასივი, რომელშიც მხოლოდ ის ელემენტები იქნება,
// რომელიც ორივე მასივისთვის საერთოა
// function findCommonElements(arr1, arr2)
// მაგალითი:
// findCommonElements([1, 2, 3], [2, 8, 1, 4]) უნდა დააბრუნოს [1, 2]

// function findCommonElements(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       newArr.push(arr1[i]);
//     }
//   }
//   console.log(newArr);
// }

// findCommonElements([1, 2, 3, 22], [2, 8, 1, 4, 22]);

// დააბრუნეთ ფუნქციიდან შებრუნებული მასივი
// არ გამოიყენოთ reverse ფუნქცია
// function reverseArray(arr)
// მაგალითი:
// reverseArray([1, 2, 3, 4]) უნდა დააბრუნოს [4, 3, 2, 1]

// function reverseArray(arr) {
//   let reversedArr = [];
//   for (let i = arr.length; i > 0; i--) {
//     reversedArr.push(arr[i - 1]);
//   }
//   console.log(reversedArr);
// }

// reverseArray([1, 2, 3, 4, 22, 5]);

// მოცემული გვაქვს ზრდადი ციფრების მასივი
// დაწერეთ ფუნქცია რომელიც დააბრუნებს ორ ელემენტს შორის მაქსიმალურ სხვაობას
// ელემენტები უნდა იყვნენ ერთმანეთის გვერდით
// function findMaxDiff(arr)
// მაგალითი:
// findMaxDiff([1, 2, 3, 8, 9]) უნდა დააბრუნოს 5
// რადგან ყველაზე დიდი სხვაობა არის რიცხვებში 8 და 3 შორის

// function findMaxDiff(arr) {
//   let maxDif = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] - arr[i] > maxDif) {
//       maxDif = arr[i + 1] - arr[i];
//     }
//   }
//   console.log(maxDif);
// }

// findMaxDiff([1, 2, 3, 8, 9, 100]);

// ფუნქციიდან დააბრუნეთ მასივის რიგით მეორე ყველაზე დიდი ციფრი
// მაგალითი :
// findSecondMax([1, 2, 3, 4, 5]) უნდა დააბრუნოს 4

// function findSecondMax(arr) {
//   let maxNum = Math.max(...arr);
//   let secondMaxNum = 0;
//   console.log(maxNum, "first");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > secondMaxNum && arr[i] !== maxNum) {
//       secondMaxNum = arr[i];
//     }
//   }
//   console.log(secondMaxNum, "second");
// }
// findSecondMax([1, 2, 3, 4, 5, 22]);

// დაწერეთ ფუნქცია რომელიც დააგენერირებს პაროლს შემთხვევითობის პრინციპით
// ფუნქციას უნდა გადავცეთ ციფრი, რამდენ სიმბოლოიანი პაროლიც გვინდა
// მაგალითი :
// generatePassword(8) უნდა დააგენერიროს პაროლი 8 სიმბოლოიანი

// function generatePassword(num) {
//   let password = Math.floor(Math.random() * 10 ** num);
//   console.log(password);
// }
// generatePassword(8);

// დაწერეთ მარტივი კალკულატორის ფუნქცია რომელსაც
// გადაეცემა სამი არგუმენტი (ოპერატორი, პირველი ციფრი, მეორე ციფრი)
// მაგალითი :
// calculator('+', 5, 6) უნდა დააბრუნოს 11
// calculator('-', 5, 6) უნდა დააბრუნოს -1
// calculator('*', 5, 6) უნდა დააბრუნოს 30
// calculator('/', 5, 6) უნდა დააბრუნოს 0.8333333333333334
// calculator('/', 0, 6) უნდა დააბრუნოს '0 - ზე გაყოფა არ შეიძლება'

// function calculator(operator, num1, num2) {
//   let sum = 0;
//   switch (operator) {
//     case "+":
//       sum = num1 + num2;
//       break;
//     case "-":
//       sum = num1 - num2;
//       break;
//     case "*":
//       sum = num1 * num2;
//       break;

//     case "":
//       console.log("Please chose operator");
//       break;
//     case "/":
//       if (num1 === 0) {
//         console.log("0 - ზე გაყოფა არ შეიძლება");
//       } else {
//         sum = num1 / num2;
//       }
//       break;
//   }
//   console.log(sum);
// }

// calculator("/", 0, 6);
