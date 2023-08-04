import PlantBuilder from "./plantConstructor";
import guidePlants from './guidePlants.json';

export function getRecommendation(formData) {
  const { placement, sunlight, pets, watering, style, extras } = formData;

  let plantType = "Non-Toxic";
  if (pets === "yes") {
    plantType = "Toxic";
  }

  let plantName;
  if (placement === "inside-indirect-light") {
    plantName = guidePlants["Low Light Plants"][plantType];
  } else if (placement === "inside-lot-indirect-light") {
    plantName = guidePlants["Medium Light Plants"][plantType];
  } else if (placement === "outside") {
    plantName = guidePlants["Outdoor Plants"][plantType];
  }

  let soilType = sunlight === "yes" ? "Composted Soil" : "Fertilized Soil";

  let potMaterial, potStyle, potColor;
  if (watering === "overwater") {
    potMaterial = "Clay";
    potStyle = "Substitute the soil for the easy drainage";
  } else {
    potMaterial = "Ceramic";
    potStyle = "";
  }

  if (style === "minimalism") {
    potStyle += " Simple";
    potColor = "Clay";
  } else if (style === "simple") {
    potStyle += " Decorated";
    potColor = "Blue";
  } else if (style === "decorated") {
    potStyle += " Decorated";
    potColor = "Yellow";
  }

  const recommendation = new PlantBuilder()
    .withPlantName(plantName)
    .withSoilType(soilType)
    .withPotMaterial(potMaterial)
    .withPotStyle(potStyle)
    .withPotColor(potColor)
    .withExtras(extras)
    .build();

  return recommendation;
}

export function showRecommendation(recommendation) {
  const recommendationDiv = document.getElementById("recommendation");
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
