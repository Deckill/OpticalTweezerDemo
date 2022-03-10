script.js
Who has access
S
Y
System properties
Type
Javascript
Size
1 KB
Storage used
1 KBOwned by Angelo State University
Location
studio 1
Owner
Sasha Montag
Modified
4:02 PM by Sasha Montag
Opened
10:06 PM by me
Created
4:02 PM
Add a description
Viewers can download
/*jslint browser */

// CS 3312, spring 2022
// Studio 1
// YOUR NAME: ___

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {

   // Enforce stricter JavaScript rules.
   'use strict';

   // Find all needed elements and save them in constants.
   const nameInputElement = document.querySelector('#name-input');
   const submitNameButton = document.querySelector('#submit-name');
   const howdyElement = document.querySelector('#howdy');
   const nameOutputElement = document.querySelector('#name-output');

   // Make things happen when a user clicks on the button element.
   submitNameButton.addEventListener('click', function () {

      // Get the string value out of the input textbox.
      const name = nameInputElement.value;

      if (name.length === 0) {
         // The user didn't input a name, so use a default.
         nameOutputElement.textContent = 'student';
         howdyElement.classList.remove('enthusiastic');
      } else {
         // The user did input a name, so use it.
         nameOutputElement.textContent = name;
         // Make the paragraph stand out more.
         howdyElement.classList.add('enthusiastic');
      }
   });

   // ADD NEW EVENT LISTENER HERE

});
