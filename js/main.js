import { getRecommendation, showRecommendation } from './components/recommendation.js';

document.getElementById('submitButton').addEventListener('click', function (event) {
  event.preventDefault(); 

  const placementInput = document.querySelector('input[name="placement"]:checked');
  const sunlightInput = document.querySelector('input[name="sunlight"]:checked');
  const petsInput = document.querySelector('input[name="pets"]:checked');
  const wateringInput = document.querySelector('input[name="watering"]:checked');
  const styleInput = document.querySelector('input[name="style"]:checked');

  if (placementInput && sunlightInput && petsInput && wateringInput && styleInput) {
    const formData = {
      placement: placementInput.value,
      sunlight: sunlightInput.value,
      pets: petsInput.value,
      watering: wateringInput.value,
      style: styleInput.value,
      extras: Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(
        (input) => input.value
      ),
    };

    const recommendation = getRecommendation(formData);
    showRecommendation(recommendation);
  } 
});

document.getElementById('clearButton').addEventListener('click', function () {
  document.getElementById('plantForm').reset();
  document.getElementById('recommendation').innerHTML = '';
});
