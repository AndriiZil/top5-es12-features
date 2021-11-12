// Declare a variable and store some value.
const orgStr = 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled and multi-paradigm.';

// To replace single instance, use replace().
let newStr = orgStr.replace('JavaScript', 'TypeScript');
console.log(newStr);

// To replace all instances, use replaceAll().
let newStr2 = orgStr.replaceAll('JavaScript', 'TypeScript');
console.log(newStr2);
