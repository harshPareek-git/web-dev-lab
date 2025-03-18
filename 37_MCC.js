//Matches, Closest, Contains

//Matches - checks if the element matches the selector  
Element.matches(selector);

//Closest - checks if the element is a descendant of the selector
Element.closest(selector);

//Contains - checks if the element contains the selector
Element.contains(selector);

//Example
const element = document.querySelector('.example');
console.log(element.matches('.example')); // true
console.log(element.closest('.example')); // true
console.log(element.contains('.example')); // true













