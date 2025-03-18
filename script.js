// DOM Manipulation code
window.onload = function() {
    // Get elements
    const title = document.getElementById('title');
    const button = document.getElementById('changeButton');
    const colorButton = document.getElementById('colorButton');
    
    // Add event listeners
    button.addEventListener('click', function() {
        title.textContent = 'Text Changed by External JavaScript!';
    });

    colorButton.addEventListener('click', function() {
        title.style.color = getRandomColor();
    });

    // Helper function to generate random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}; 