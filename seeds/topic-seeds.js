const { Topic } = require('../models');

const topicData = [
  {name:"Atmospheric Phenomena"},
  {name:"Lunar Phenomena"},
  {name:"Galactic Collisions"},
  {name:"Earth Weather and Natural Disasters"},
  {name:"Astrophotography and Artistic Impressions"},
  {name:"Space Missions and Exploration"},
  {name:"Earth's Natural Beauty"},
  {name:"Unveiling Space Discoveries"},
  {name:"Saturn's Rings"},
  {name:"Solar System Explorations"},
  {name:"Cosmic Phenomena and Mysteries"},
  {name:"Exploring the Red Planet"},
  {name:"Exoplanet Discoveries"},
  {name:"Cosmic Time Travel"},
  {name:"Beauty of Celestial Objects"},
  {name:"Black Hole Mysteries"},
  {name:"Planetary Formation and Evolution"},
  {name:"Dark Matter Secrets"},
  {name:"Boundaries of Space"},
  {name:"Galactic Wonders: Nebulae and Galaxies"},
  {name:"Mapping the Cosmos: Cosmic Surveys"},
  {name:"Celestial Artistry: Stellar Images"},
  {name:"Spiral Elegance: Spiral Galaxies"},
  {name:"Galactic Clusters: Star Cities"},
  {name:"Supernova Spectacles: Exploding Stars"},
  {name:"Cosmic Giants: Massive Galaxies"},
  {name:"Quasar Mysteries: Active Galactic Nuclei"},
  {name:"Stellar Dance: Binary Star Systems"},
  {name:"Interstellar Sculptures: Cosmic Sculptures"},
  {name:"General Discussion"},
];

const seedTopics = async () => {
  try {
    await Topic.bulkCreate(topicData);
    console.log('Topics seeded successfully.');
  } catch (error) {
    console.error('Error seeding Topics:', error);
  }
};

module.exports = seedTopics;