// Get the value of the variable from localStorage
var left = sessionStorage.getItem('left');
if (left === null) {
  left = false;
}

var DJdead = sessionStorage.getItem('DJdead');
if (DJdead === null) {
  DJdead = false;
}

var victory = sessionStorage.getItem('victory');
if (victory === null) {
  victory = false;
}

var ignore = sessionStorage.getItem('ignore');
if (ignore === null) {
  ignore = true;
}
var myVariable = sessionStorage.getItem('myVariable');
if (myVariable === null) {
  myVariable = false;
}

// Check the value of the variable and update the element on the other HTML page if necessary
document.addEventListener('DOMContentLoaded', function() {
    var otherPageElement = document.getElementById('other-page-element');
    if (myVariable === 'true' && otherPageElement) {
      otherPageElement.innerHTML = 'his belly fat jiggled when he hit the ground';
    }
  });
  