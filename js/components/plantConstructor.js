export default class plantBuilder {
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