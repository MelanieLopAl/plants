class plantBuilder {
  constructor() {
    this.plantName = '';
    this.soilType = '';
    this.potMaterial = '';
    this.potStyle = '';
    this.potColor = '';
    this.extras = [];
  }

  withPlantName(name) {
    this.plantName = name;
    return this;
  }

  withSoilType(type) {
    this.soilType = type;
    return this;
  }

  withPotMaterial(material) {
    this.potMaterial = material;
    return this;
  }

  withPotStyle(style) {
    this.potStyle = style;
    return this;
  }

  withPotColor(color) {
    this.potColor = color;
    return this;
  }

  withExtras(extras) {
    this.extras = extras;
    return this;
  }

  build() {
    return {
      name: this.plantName,
      soil: this.soilType,
      pot: `${this.potMaterial} pot ${this.potStyle}`,
      color: this.potColor,
      extras: this.extras.join(', ')
    };
  }
}

const plantGuide = {
  "Low Light Plants": {
    "Toxic": "Sansevieria",
    "Non-Toxic": "Boston Fern"
  },
  "Medium Light Plants": {
    "Toxic": "Aglaonema",
    "Non-Toxic": "Monstera"
  },
  "Outdoor Plants": {
    "Toxic": "Aloe Vera",
    "Non-Toxic": "Cactus"
  }
};

function getRecommendation(formData) {
  const { placement, sunlight, pets, watering, style, extras } = formData;

  let plantType = "Non-Toxic";
  if (pets === "yes") {
    plantType = "Toxic";
  }

  let plantName;
  if (placement === "inside-indirect-light") {
    plantName = plantGuide["Low Light Plants"][plantType];
  } else if (placement === "inside-lot-indirect-light") {
    plantName = plantGuide["Medium Light Plants"][plantType];
  } else if (placement === "outside") {
    plantName = plantGuide["Outdoor Plants"][plantType];
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

  const recommendation = new plantBuilder()
    .withPlantName(plantName)
    .withSoilType(soilType)
    .withPotMaterial(potMaterial)
    .withPotStyle(potStyle)
    .withPotColor(potColor)
    .withExtras(extras)
    .build();

  return recommendation;
}

function showRecommendation(recommendation) {
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

document.getElementById("plantForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    placement: document.querySelector('input[name="placement"]:checked').value,
    sunlight: document.querySelector('input[name="sunlight"]:checked').value,
    pets: document.querySelector('input[name="pets"]:checked').value,
    watering: document.querySelector('input[name="watering"]:checked').value,
    style: document.querySelector('input[name="style"]:checked').value,
    extras: Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(
      (input) => input.value
    ),
  };

  const recommendation = getRecommendation(formData);
  showRecommendation(recommendation);
});

document.getElementById("clearButton").addEventListener("click", function () {
  document.getElementById("plantForm").reset();
  document.getElementById("recommendation").innerHTML = "";
});
