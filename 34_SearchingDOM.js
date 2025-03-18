// Selecting Elements
// By ID - returns single element
const element = document.getElementById('demo-text');

// By Class - returns HTMLCollection
const elements = document.getElementsByClassName('sample-class');

// By Tag - returns HTMLCollection
const paragraphs = document.getElementsByTagName('p');

// Query Selector - returns first matching element
// const element = document.querySelector('.class-name');

// Query Selector All - returns NodeList of all matching elements
// const elements = document.querySelectorAll('.class-name');

// 2.Changing Content
// Using innerHTML (can include HTML tags)
element.innerHTML = 'New <strong>content</strong>';

// Using textContent (plain text only)
element.textContent = 'New content';

// Using value (for input elements)
inputElement.value = 'New value';

// 3.Modifying Attributes


// Get attribute
element.getAttribute('src');

// Set attribute
element.setAttribute('src', 'new-image.jpg');

// Check if attribute exists
element.hasAttribute('title');

// Remove attribute
element.removeAttribute('title');

// 4.Styling Elements

// Direct style manipulation
element.style.color = 'blue';
element.style.backgroundColor = '#f0f0f0';

// Using classList
element.classList.add('highlight');
element.classList.remove('highlight');
element.classList.toggle('active');
element.classList.contains('highlight');

// 5.Creating and Adding Elements

// Create new element
const newDiv = document.createElement('div');

// Add content
newDiv.textContent = 'New content';

// Add to document
parentElement.appendChild(newDiv);

// Insert before another element
parentElement.insertBefore(newElement, referenceElement);

// Remove element
element.remove();

// 6.Event Handling

// Adding event listener
element.addEventListener('click', function(event) {
    console.log('Clicked!');
});

// Common events:
// click, mouseover, mouseout, keydown, keyup, submit, change, load

// 7.Traversing Element

// Parent
element.parentNode;
element.parentElement;

// Children
element.children;
element.childNodes;
element.firstChild;
element.lastChild;

// Siblings
element.nextSibling;
element.previousSibling;

// 8.Element Properties

// Dimensions and position
element.offsetWidth;    // Width including padding and border
element.offsetHeight;   // Height including padding and border
element.clientWidth;    // Width including padding
element.clientHeight;   // Height including padding
element.getBoundingClientRect(); // Position relative to viewport

// Classes
element.className;      // String of classes
element.classList;      // DOMTokenList of classes

// 9.Form Manipulation

// Form values
formElement.elements;           // Access form controls
inputElement.value;            // Get/set input value
selectElement.selectedIndex;   // Get/set selected option
checkboxElement.checked;       // Get/set checkbox state

// 10.Document Fragment

// Efficient way to add multiple elements
const fragment = document.createDocumentFragment();
for(let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    fragment.appendChild(div);
}
document.body.appendChild(fragment);

/*
Best Practices:
Use querySelector/querySelectorAll for flexible selection
Prefer textContent over innerHTML when not needing HTML
Use classList methods instead of manipulating className directly
Use event delegation for handling multiple similar elements
Batch DOM updates using document fragments
Cache DOM selections in variables if reusing them
Use data-* attributes for custom data
Consider using requestAnimationFrame for animations
The example file I created demonstrates all these concepts with interactive examples. You can open it in a browser and click the buttons to see the different manipulations in action.
*/
