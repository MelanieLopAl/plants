import PlantBuilder from './plantConstructor.js'
import plantGuide from './plantsGuide.js'

function getRecommendation(formData) {
  const { placement, sunlight, pets, watering, style, extras } = formData

  let plantType = 'Non-Toxic'
  if (pets === 'yes') {
    plantType = 'Toxic'
  }

  let plantName;
  if (placement === 'inside-indirect-light') {
    plantName = plantGuide['Low Light Plants'][plantType]
  } else if (placement === 'inside-lot-indirect-light') {
    plantName = plantGuide['Medium Light Plants'][plantType]
  } else if (placement === 'outside') {
    plantName = plantGuide['Outdoor Plants'][plantType]
  }

  const soilType = sunlight === 'yes' ? 'Composted Soil' : 'Fertilized Soil'

  let potMaterial, potStyle, potColor
  if (watering === 'overwater') {
    potMaterial = 'Clay'
    potStyle = 'Substitute the soil for the easy drainage'
  } else {
    potMaterial = 'Ceramic'
    potStyle = ''
  }

  if (style === 'minimalism') {
    potStyle += ' Simple'
    potColor = 'Clay'
  } else if (style === 'simple') {
    potStyle += ' Decorated'
    potColor = 'Blue'
  } else if (style === 'decorated') {
    potStyle += ' Decorated'
    potColor = 'Yellow'
  }

  const recommendation = new PlantBuilder()
    .withPlantName(plantName)
    .withSoilType(soilType)
    .withPotMaterial(potMaterial)
    .withPotStyle(potStyle)
    .withPotColor(potColor)
    .withExtras(extras)

  return recommendation
}

function showRecommendation(recommendation) {
  const recommendationDiv = document.getElementById('recommendation');
  recommendationDiv.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = `Your perfect plant is ${recommendation.plantName}`;
  recommendationDiv.appendChild(title);

  const imagesContainer = document.createElement('div');
  imagesContainer.classList.add('images-container');

  // Images
  const plantImage = document.createElement('img');
  plantImage.src = `/assets/plant-${recommendation.plantName.toLowerCase()}.png`;
  imagesContainer.appendChild(plantImage);

  // Add pot image based on potMaterial
  const potImage = document.createElement('img');
  potImage.src = `/assets/pot-${recommendation.potMaterial.toLowerCase()}.png`;
  imagesContainer.appendChild(potImage);

  if (recommendation.extras.includes('pebbles')) {
    const pebblesImage = document.createElement('img');
    pebblesImage.src = '/assets/pebbles.png';
    imagesContainer.appendChild(pebblesImage);
  }

  if (recommendation.extras.includes('moss-pole')) {
    const mossPoleImage = document.createElement('img');
    mossPoleImage.src = '/assets/moss-pole.png';
    imagesContainer.appendChild(mossPoleImage);
  }

  if (recommendation.extras.includes('mini-plants')) {
    const miniPlantsImage = document.createElement('img');
    miniPlantsImage.src = '/assets/mini-plants.png';
    imagesContainer.appendChild(miniPlantsImage);
  }

  recommendationDiv.appendChild(imagesContainer);

  // Information
  const infoList = document.createElement('ul');
  infoList.innerHTML = `
    <li>Name: ${recommendation.plantName}</li>
    <li>Pot: ${recommendation.potMaterial}</li>
    <li>Soil: ${recommendation.soilType}</li>
    <li>Extras: ${recommendation.extras.join(', ')}</li>
  `;
  recommendationDiv.appendChild(infoList);

  
  const customizeButton = document.createElement('button');
  customizeButton.textContent = 'Customize';
  customizeButton.addEventListener('click', function () {

    localStorage.setItem( recommendation.plantName);
    localStorage.setItem( recommendation.potMaterial);
    localStorage.setItem(recommendation.soilType);
    localStorage.setItem(recommendation.extras.join(','));
    window.location.href = 'customize.html';
  });
  recommendationDiv.appendChild(customizeButton); href = 'customize.html';
};

export { getRecommendation, showRecommendation }
