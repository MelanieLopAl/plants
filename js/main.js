import { getRecommendation, showRecommendation } from './components/recommendation.js'

document.getElementById('plantForm').addEventListener('submit', function (event) {
  event.preventDefault()

  const formData = {
    placement: document.querySelector('input[name="placement"]:checked').value,
    sunlight: document.querySelector('input[name="sunlight"]:checked').value,
    pets: document.querySelector('input[name="pets"]:checked').value,
    watering: document.querySelector('input[name="watering"]:checked').value,
    style: document.querySelector('input[name="style"]:checked').value,
    extras: Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(
      (input) => input.value
    )
  }

  const recommendation = getRecommendation(formData)
  showRecommendation(recommendation)
})

document.getElementById('clearButton').addEventListener('click', function () {
  document.getElementById('plantForm').reset()
  document.getElementById('recommendation').innerHTML = ''
})
