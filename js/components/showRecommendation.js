function showRecommendation(recommendation) {
  const recommendationDiv = document.getElementById('recommendation');
  recommendationDiv.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = recommendation.name;
  recommendationDiv.appendChild(title);

  const imagesContainer = document.createElement('div');
  imagesContainer.classList.add('images-container');

  // Images
  const plantImage = document.createElement('img');
  plantImage.src = `assets/plant-${recommendation.name.toLowerCase().replace(/\s/g, '-')}.png`;
  imagesContainer.appendChild(plantImage);

  const potImage = document.createElement('img');
  potImage.src = `assets/pot-${recommendation.color.toLowerCase().replace(/\s/g, '-')}.png`;
  imagesContainer.appendChild(potImage);

  if (recommendation.extras.includes('moss-pole')) {
    const mossPoleImage = document.createElement('img');
    mossPoleImage.src = `assets/moss-pole.png`;
    imagesContainer.appendChild(mossPoleImage);
  }

  if (recommendation.extras.includes('pebbles')) {
    const pebblesImage = document.createElement('img');
    pebblesImage.src = `assets/pebbles.png`;
    imagesContainer.appendChild(pebblesImage);
  }

  if (recommendation.extras.includes('mini-plants')) {
    const miniPlantsImage = document.createElement('img');
    miniPlantsImage.src = `assets/mini-plants.png`;
    imagesContainer.appendChild(miniPlantsImage);
  }

  recommendationDiv.appendChild(imagesContainer);

  // Information
  const infoList = document.createElement('ul');
  infoList.innerHTML = `
    <li>Name: ${recommendation.name}</li>
    <li>Soil: ${recommendation.soil}</li>
    <li>Pot: ${recommendation.pot}</li>
    <li>Extras: ${recommendation.extras}</li>
  `;
  recommendationDiv.appendChild(infoList);
}

export {showRecommendation}
