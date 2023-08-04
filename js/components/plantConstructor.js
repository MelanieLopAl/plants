export default class PlantBuilder {
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

}
