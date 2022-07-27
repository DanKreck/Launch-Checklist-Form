let userInputs = [];

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
      launchForm.addEventListener("submit", function (event) {
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

         for (let i = 0; i < userInputs.length; i++) {
            if (!userInputs[i].value) {
               alert("All fields are required!");
            }
         }
         // Type Validation
         if (isNaN(fuelCheck) === true || isNaN(massCheck) === true) {
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            alert("Fuel Level & Cargo Mass must be numbers.");
         } else if (isNaN(pilotCheck) === false || isNaN(copilotCheck) === false) {
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            alert("Pilot Name & Co-pilot Name must be strings.")
         } else { //Build Form to avoid empty list item
            itemStatus.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot: ${pilot}`;
            copilotStatus.innerHTML = `Co-Pilot: ${copilot}`;
            fuelStatus.innerHTML = `Fuel Level: ${fuelValue}`;
            cargoStatus.innerHTML = `Cargo Mass: ${massValue}`;
            //Value Validation
            if (fuelValue < 10000 && massValue > 10000) {
               launchStatus.innerHTML = "Shuttle not ready for launch";
               launchStatus.style.color = "red";
               fuelStatus.innerHTML = "Fuel Level: Fuel level is too low!";
               cargoStatus.innerHTML = `Cargo Mass: Cargo mass too high!`;
            } else if (fuelValue < 10000) {
               launchStatus.innerHTML = "Shuttle not ready for launch";
               launchStatus.style.color = "red";
               fuelStatus.innerHTML = "Fuel Level: Fuel level is too low!";
            } else if (massValue > 10000) {
               launchStatus.innerHTML = "Shuttle not ready for launch";
               launchStatus.style.color = "red";
               cargoStatus.innerHTML = `Cargo Mass: Cargo mass too high!`;
            } else {
               launchStatus.innerHTML = "Shuttle is ready for launch";
               launchStatus.style.color = "green";
               fuelStatus.innerHTML = `Fuel Level: Fuel level check passed.`;
               cargoStatus.innerHTML = `Cargo Mass: Cargo mass check passed.`;
            }
         }
      });
   });
});

//TODO
      //fetch planet data
         //randomly choose one of the planets
         //display random planet's info (like above) push it to top container