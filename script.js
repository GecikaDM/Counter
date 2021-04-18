console.log('init');

// set the itnitial value
let counter = 0;

const value = document.getElementById('value');

const buttons = document.querySelectorAll('.btn');

//loop over button and add an event to click and get the classList of currenttarget

buttons.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
   const styles = e.currentTarget.classList;
   if (styles.contains("decrease")) {
     counter--;
   } else if (styles.contains("increase")) {
     counter++;
   } else counter = 0;

   value.textContent = counter;
  });
});
