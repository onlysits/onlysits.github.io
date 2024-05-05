document.addEventListener("DOMContentLoaded", function(event) { 
    // After the DOM is loaded, add the 'animated' class to the logo after a delay
    setTimeout(function() {
        document.querySelector('.animated-logo').classList.add('animated');
    }, 1000); // Adjust the delay (in milliseconds) as needed
});
