// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/

let userInputs = [];
  
window.addEventListener("load", function(){
   launchForm.addEventListener("submit", function(event) {
      userInputs.push(document.querySelector("input[name=pilotName]"));
      userInputs.push(document.querySelector("input[name=copilotName]"));
      userInputs.push(document.querySelector("input[name=fuelLevel]"));
      userInputs.push(document.querySelector("input[name=cargoMass]"));
      
      for(let i=0; i<userInputs.length; i++){
         console.log(userInputs[i].value);
         if(!userInputs[i].value ){
            alert("All fields are required!");
            event.preventDefault();
            break;
         }
      }

   });

});
// Validation
// setup a window load handler ~~~~~~~~~~
   //set up submit handler for the form ~~~~~~~~~~~~

      //call event.preventDefault() to cancel submission ~~~~~~~~~
      
      //Grab formgroup values, if they are empty: alert ~~~~~~~~~~~~~~~

      //Check fuel and mass to be numbers 
      //check the values, and report launch status
      // Make the list visible

   //fetch planet data
      //randomly choose one of the planets
      //display random planet's info (like above) push it to top container