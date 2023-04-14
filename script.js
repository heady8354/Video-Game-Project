// Get the value of the variable from localStorage
var myVariable = sessionStorage.getItem('myVariable') || false;
var left = sessionStorage.getItem('left') || false;

// Check the value of the variable and update the element on the other HTML page if necessary
document.addEventListener('DOMContentLoaded', function() {
    var otherPageElement = document.getElementById('other-page-element');
    if (myVariable === 'true' && otherPageElement) {
      otherPageElement.innerHTML = 'his belly fat jiggled when he hit the ground';
    }
  });
  