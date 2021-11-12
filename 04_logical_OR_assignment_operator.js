// In the example, the &&= will check if the filesCount is true.
// If true, then the right value will be assigned to the left variable.
let myFiles = {filesCount: 100, files:[]};
myFiles.filesCount &&= 5;
console.log(myFiles); // This will print: {filesCount: 5, files: Array(0)}