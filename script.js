// Write your JavaScript code here!
let planets = null;
let pilotName = document.querySelector('input[name=pilotName]').value;
let copilotName = document.querySelector('input[name=copilotName]').value;
let fuelLevel = document.querySelector('input[name=fuelLevel]').value;
let cargoMass = document.querySelector('input[name=cargoMass]').value;
let errorTrip = 0;
// This block of code shows how to format the HTML once you fetch some planetary JSON!
window.addEventListener('load', function() {
	//when page loads
	fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
		//fetch then wait for response *remember asynchronous*
		response.json().then(function(json) {
			//handle the response make it JSON
			planets = json;
			document.getElementById('missionTarget').innerHTML = `<h2>Mission Destination</h2><ol><li>Name: ${planets[0]
				.name}</li><li>Diameter: ${planets[0].diameter}</li><li>Star: ${planets[0]
				.star}</li><li>Distance from Earth: ${planets[0].distance}</li><li>Number of Moons: ${planets[0]
				.moons}</li></ol><img src=${planets[0].image}>`;
			//well i spent a lot of time trying to make a selector to chose the planet because i am good at misreading
			// for (let i = 0; i < planets.length; i++) {
			// 	// for each planet make a selector
			// 	document.getElementById(
			// 		'planetSelector'
			// 	).innerHTML += `<option id = "selector${i}" value='${i}'>${planets[i].name}</option>`;
			// }
		});
	});
	form.addEventListener('submit', function(event) {
		console.log(pilotName);
		console.log(copilotName);
		console.log(fuelLevel);
		console.log(cargoMass);

		event.preventDefault();
		if (fuelLevel < 10000 || isNaN(fuelLevel)) {
			errorTrip++;
			console.log('fuel');
			console.log(fuelLevel.innerHTML);
			console.log(cargoMass);
			console.log(fuelLevel);

			document.getElementById('fuelStatus').innerHTML = 'Fuel level Low';
		}
		if (cargoMass > 10000 || isNaN(cargoMass)) {
			errorTrip++;
			console.log('cargo');
			document.getElementById('cargoStatus').innerHTML = 'Too heavy';
		}
		if (errorTrip > 0) {
			event.preventDefault();
			document.getElementById('faultyItems').style.visibility = 'visible';
		}
	});
});
