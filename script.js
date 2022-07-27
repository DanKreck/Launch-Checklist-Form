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
      event.preventDefault();
      
      userInputs.push(document.querySelector("input[name=pilotName]"));
      userInputs.push(document.querySelector("input[name=copilotName]"));
      userInputs.push(document.querySelector("input[name=fuelLevel]"));
      userInputs.push(document.querySelector("input[name=cargoMass]"));
      
      let pilotInput = document.querySelector("input[name=pilotName]");
      let pilot = pilotInput.value;
      let pilotCheck = Number(pilot);

      let copilotInput = document.querySelector("input[name=copilotName]");
      let copilot = copilotInput.value;
      let copilotCheck = Number(copilot);

      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let fuelValue = fuelInput.value;
      let fuelCheck = Number(fuelValue);

      let massInput = document.querySelector("input[name=cargoMass]");
      let massValue = massInput.value;
      let massCheck = Number(massValue);

      for(let i=0; i<userInputs.length; i++){
         if(!userInputs[i].value ){
            alert("All fields are required!");    
         }
      }
      // Type Validation
      if(isNaN(fuelCheck) === true || isNaN(massCheck) === true ) { 
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         alert("Fuel Level & Cargo Mass must be numbers.");
      }else if (isNaN(pilotCheck) === false || isNaN(copilotCheck) === false){
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         alert("Pilot Name & Co-pilot Name must be strings.")
       }
      else { //Build Form to avoid empty list item
         itemStatus.style.visibility = "visible";
         pilotStatus.innerHTML= `Pilot: ${pilot}`;
         copilotStatus.innerHTML= `Co-Pilot: ${copilot}`;
         fuelStatus.innerHTML= `Fuel Level: ${fuelValue}`;
         cargoStatus.innerHTML= `Cargo Mass: ${massValue}`;
         //Value Validation
         if(fuelValue < 10000 && massValue > 10000){
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML= "Fuel Level: Fuel level is too low!";
            cargoStatus.innerHTML= `Cargo Mass: Cargo mass too high!`;
         }else if (fuelValue < 10000){
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML= "Fuel Level: Fuel level is too low!";
         }else if (massValue > 10000){
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML= `Cargo Mass: Cargo mass too high!`;
         }else { 
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
            fuelStatus.innerHTML= `Fuel Level: Fuel level check passed.`;
            cargoStatus.innerHTML= `Cargo Mass: Cargo mass check passed.`;
         }
      }
   });
   
});
   
//TODO
      //fetch planet data
         //randomly choose one of the planets
         //display random planet's info (like above) push it to top container



























         // fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        
   //      response.json().then(function (json){
   //          const astroList = document.getElementById("container");
   //          let list = "";
            
   //          for(let i = 0; i < json.length; i++){ 
   //              list += `<div class="astronaut">
   //              <div class="bio">
   //              <h3>${json[i].firstName} ${json[i].lastName}</h3>
   //              <ul>
   //                  <li>Hours in space: ${json[i].hoursInSpace}</li>
   //                  <li>Active: ${json[i].active}</li>
   //                  <li>Skills: ${json[i].skills}</li>
   //              </ul>
   //              </div>
   //              <img class="avatar" src="${json[i].picture}">
   //              </div>`;
                
   //          }
   //          astroList.innerHTML = list;

   //      });
   //  });


// Validation