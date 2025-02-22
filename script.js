window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         const target = document.getElementById("missionTarget");
         let index = Math.floor(Math.random() * json.length);
         target.innerHTML = `
            <h2>Mission Destination</h2>
            <ul><li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance} </li>
               <li>Number of Moons: ${json[index].moons}</li> 
            </ul><img src="${json[index].image}">`;
      });
   });
   let refreshButton = document.getElementById("refresh");
      refreshButton.addEventListener("click", function (event) {
         location.reload();
   });
   launchForm.addEventListener("submit", function (event) {
      event.preventDefault();
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
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      
      function notReady(){
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      }
      function ready(){
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
         fuelStatus.innerHTML = `Fuel Level: Fuel level check passed.`;
         cargoStatus.innerHTML = `Cargo Mass: Cargo mass check passed.`;
      }
      if (!pilot || !copilot || !fuelValue || !massValue) {
            alert("All fields are required!");
      }
      if (isNaN(fuelCheck) === true || isNaN(massCheck) === true || isNaN(pilotCheck) === false || isNaN(copilotCheck) === false) {
         notReady();
         alert("Names must be strings. Fuel Level & Cargo Mass must be numbers.");
      }else { 
         itemStatus.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot: ${pilot}`;
         copilotStatus.innerHTML = `Co-Pilot: ${copilot}`;
         fuelStatus.innerHTML = `Fuel Level: ${fuelValue}`;
         cargoStatus.innerHTML = `Cargo Mass: ${massValue}`;
         if (fuelValue < 10000 && massValue > 10000) {
            notReady();
            fuelStatus.innerHTML = "Fuel Level: Fuel level is too low!";
            cargoStatus.innerHTML = `Cargo Mass: Cargo mass too high!`;
         } else if (fuelValue < 10000) {
            notReady();
            fuelStatus.innerHTML = "Fuel Level: Fuel level is too low!";
         } else if (massValue > 10000) {
            notReady();
            cargoStatus.innerHTML = `Cargo Mass: Cargo mass too high!`;
         } else {ready();}
      }
   });
});