const savedRecommendation = JSON.parse(localStorage.getItem('savedRecommendation'));

  if (savedRecommendation) {
    const recommendationDiv = document.querySelector('.card');

    const plantImage = document.createElement('img');
    plantImage.src = `/assets/plant-${savedRecommendation.plantName.toLowerCase()}.png`;

    const infoParagraph = document.createElement('p');
    infoParagraph.textContent = `Plant: ${savedRecommendation.plantName}, Pot: ${savedRecommendation.potMaterial}, Soil: ${savedRecommendation},
    Extras: ${savedRecommendation.extras.join(', ')} `;

    recommendationDiv.appendChild(plantImage);
    recommendationDiv.appendChild(infoParagraph);
  }

