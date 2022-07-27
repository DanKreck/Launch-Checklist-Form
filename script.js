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

      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let fuelValue = fuelInput.value;
      let fuelCheck = Number(fuelValue);

      let massInput = document.querySelector("input[name=cargoMass]");
      let massValue = massInput.value;
      let massCheck = Number(massValue);
      
      for(let i=0; i<userInputs.length; i++){
         if(!userInputs[i].value ){
            alert("All fields are required!");
            event.preventDefault();
            break;
         }
      }

      if(isNaN(fuelCheck) === true || isNaN(massCheck) === true ) { 
         console.log(fuelCheck);
         console.log(massCheck);
         alert("Please enter valid types.")
      }

   });

});
// Validation
// setup a window load handler ~~~~~~~~~~
   //set up submit handler for the form ~~~~~~~~~~~~

      //call event.preventDefault() to cancel submission ~~~~~~~~~
      
      //Grab formgroup values, if they are empty: alert ~~~~~~~~~~~~~~~

      //Check fuel and mass to be numbers ~~~~~~~~
      //check the values, and report launch status
      // Make the list visible
      

      // let titleInput = document.querySelector("input[name=pilotName]");
      // let title = titleInput.value;
      // let titleCheck = Number(title);


      // if(title === ""){
      //       //alert
      // }else if(isNaN(titleCheck) === false) { // <- Not a number
      //    alert("Please enter valid types.")
      // }




      //    bookList.style.visibility = "visible";
      //    bookTitle.innerHTML = `Title: ${title.value}`

      

   //fetch planet data
      //randomly choose one of the planets
      //display random planet's info (like above) push it to top container