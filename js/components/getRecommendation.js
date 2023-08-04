import plantBuilder from './plantConstructor';
import guidePlants from './guidePlants.json'

guidePlants

function getRecommendation(formData) {
  const { placement, sunlight, pets, watering, style, extras } = formData;

  let plantType = 'Non-Toxic';
  if (pets === 'yes') {
    plantType = 'Toxic';
  }

  let plantName;
  if (placement === 'inside-indirect-light') {
    plantName = plantGuide['Low Light Plants'][plantType];
  } else if (placement === 'inside-lot-indirect-light') {
    plantName = plantGuide['Medium Light Plants'][plantType];
  } else if (placement === 'outside') {
    plantName = plantGuide['Outdoor Plants'][plantType];
  }

  let soilType = sunlight === 'yes' ? 'Composted Soil' : 'Fertilized Soil';

  let potMaterial, potStyle, potColor;
  if (watering === 'overwater') {
    potMaterial = 'Clay';
    potStyle = 'Substitute the soil for the easy drainage';
  } else {
    potMaterial = 'Ceramic';
    potStyle = '';
  }

  if (style === 'minimalism') {
    potStyle += ' Simple';
    potColor = 'Clay';
  } else if (style === 'simple') {
    potStyle += ' Decorated';
    potColor = 'Blue';
  } else if (style === 'decorated') {
    potStyle += ' Decorated';
    potColor = 'Yellow';
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



export {getRecommendation}
