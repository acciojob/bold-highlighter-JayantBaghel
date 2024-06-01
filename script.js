// script.js

// Function to highlight bold words
function highlight() {
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(word => {
        word.style.color = 'green';
    });
}

// Function to return bold words to normal color
function return_normal() {
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(word => {
        word.style.color = 'black';
    });
}
