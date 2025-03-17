// Console is a global object that provides access to the browser's console.    
// It is used to log messages to the console.
// It is a property of the window object.
// It is a property of the document object.
// It is a property of the navigator object.
// It is a property of the screen object.
// It is a property of the location object.
// It is a property of the history object.

console.log(console);

console.log(console.log);

console.log(console.log("Hello World"));

console.error("This is an error message");

console.warn("This is a warning message");

console.assert(10 > 20, "10 is not greater than 20");

console.clear();

console.count("Hello");

console.debug("This is a debug message");

console.group("Group 1");

console.groupEnd();    

console.table([{name: "John", age: 20}, {name: "Jane", age: 21}]);
console.table([{a:1,b:2,c:3}]);
console.time("Time");

console.timeEnd("Time");    

console.info("This is an info message");
