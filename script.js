// Write your JavaScript code here!

// This block of code shows how to format the HTML once you fetch some planetary JSON!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const planets = json
         console.log(planets)
         for(let i=0;i<planets.length;i++){
            document.getElementById('planetSelector').innerHTML += `<option value='${i}'>${planets[i].name}</option>`
         }
          console.log(document.getElementById('planetSelector').innerHTML)
      });
   });
});


{/* <h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol> */}

