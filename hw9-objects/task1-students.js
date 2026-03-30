const student = {};
student.firstName = 'Nick';
student.lastName = 'Smith';
student.age = 20;
student.courses = ['Math', 'History', 'Programming'];
console.log(student);

//check ESLint
// ESLint warning example
const a = 1; // warn: no-unused-vars

// ESLint error example
const b = 2;
console.log(b); // no-undef fixed
