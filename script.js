// Write your JavaScript code here!
let planets = null;
let pilotName = document.querySelector('input[name=pilotName]');
let copilotName = document.querySelector('input[name=copilotName]');
let fuelLevel = document.querySelector('input[name=fuelLevel]');
let cargoMass = document.querySelector('input[name=cargoMass]');
let form = document.getElementById('form');
let numArr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
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
		let errorTrip = 0;

		// console.log(pilotName);
		// console.log(copilotName);
		// console.log(fuelLevel);
		// console.log(cargoMass);
		// console.log(cargoMass.value);
		// console.log(fuelLevel.value);
		// console.log(pilotName.value);
		// console.log(copilotName.value);
		//so the code gods didn't like me using .value when declaring the var.
		// *thats because i assigned the var as the initial value of value*
		for (i = 0; i < numArr.length; i++) {
			if (pilotName.value.indexOf(numArr[i]) != -1) {
				errorTrip++;
				alert(` pilot name can't contain numbers numbers`);
			}

			if (copilotName.value.indexOf(numArr[i]) != -1) {
				errorTrip++;
				alert(`copilot name can't contain numbers numbers`);
			}
		}
		if (fuelLevel.value < 10000 || isNaN(fuelLevel.value)) {
			errorTrip++;
			document.getElementById('fuelStatus').innerHTML = 'Fuel level Low';
		}
		if (cargoMass.value > 10000 || isNaN(cargoMass.value)) {
			errorTrip++;
			document.getElementById('cargoStatus').innerHTML = 'Too heavy';
		}
		if (errorTrip > 0) {
			event.preventDefault();
			document.getElementById('faultyItems').style.visibility = 'visible';
		} else {
			alert('success');
		}
	});
});
