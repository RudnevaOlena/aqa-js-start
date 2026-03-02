// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

let checkAge = (age) => (age >= 18)? true : false;
console.log(checkAge(25)? "You are an adult.":"You are a minor.");
console.log(checkAge(15)? "You are an adult.":"You are a minor.");
