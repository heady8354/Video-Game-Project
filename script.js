// Get the value of the variable from localStorage
var myVariable = localStorage.getItem('myVariable') || false;

// Check the value of the variable and update the element on the other HTML page if necessary
document.addEventListener('DOMContentLoaded', function() {
    var otherPageElement = document.getElementById('other-page-element');
    if (myVariable === 'true' && otherPageElement) {
      otherPageElement.innerHTML = 'this was a development test and i kinda need the code in here so if u see this hey';
    }
  });