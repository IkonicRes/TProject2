
const natural = require('natural');
module.exports = {
// Sample labeled dataset
sortOrbit: (text) =>{
    
    
    // Preprocess and tokenize the text data
    labeledData = [
    { text: "What kind of cloud is this? A type of arcus cloud called a roll cloud. These rare long clouds may form near advancing cold fronts. When this happens uniformly along an extended front, a roll cloud may form.", orbit: "Atmospheric Phenomena" },
    { text: "On May 26, the Full Flower Moon was caught in this single exposure as it emerged from Earth's shadow and morning twilight began to wash over the western sky. The Earth's shadow isn't completely dark though. Faintly suffused with sunlight scattered by the atmosphere, the inner shadow gives the totally eclipsed moon a reddened appearance and the very dramatic popular moniker of a Blood Moon.", orbit: "Lunar Phenomena" },
    { text: "Will our Milky Way collide one day with its larger neighbor, the Andromeda? Most likely, yes. Careful plotting of slight displacements of M31's stars relative to background stars on recent Hubble Space Telescope images indicate that the center of M31 could be on a direct collision course with the center of our home. Once that happens, the two will become bound, dance around, and eventually merge to become one large elliptical -- over the next few billion years.", orbit: "Galactic Collisions" },
    { text: "As a powerful hurricane approaches the coast, the skies darken and the waves rise. Residents are urged to prepare for the storm's arrival and to take necessary precautions to ensure their safety. Natural disasters like hurricanes, tornadoes, and earthquakes can have a significant impact on the environment and human populations.", orbit: "Earth Weather and Natural Disasters" },
    { text: "Through the lens of a telescope, the intricate details of distant galaxies and nebulae come to life. Astrophotographers capture the beauty of the cosmos and create stunning visual representations of the universe. These captivating images highlight the cosmic artistry that exists beyond our planet.", orbit: "Astrophotography and Artistic Impressions" },
    { text: "The Mars rover Opportunity captured breathtaking images of the Martian landscape during its exploration mission. These images provide insights into the planet's geology and history. Space missions play a crucial role in advancing our understanding of other worlds and their potential for harboring life.", orbit: "Space Missions and Exploration" },
    { text: "From the sparkling blue oceans to the lush green forests, Earth's natural beauty is a source of wonder and inspiration. Satellite images capture the intricate patterns and colors of our planet. Exploring the diverse landscapes of Earth is an ongoing journey of discovery.", orbit: "Earth's Natural Beauty" },
    { text: "Astronomers have made remarkable discoveries, from new exoplanets to distant quasars. These findings reshape our understanding of the universe and spark new avenues of research. Exploring the cosmos reveals the hidden treasures and mysteries that lie beyond our planet.", orbit: "Unveiling Space Discoveries" },
      { text: "Saturn, the sixth planet from the Sun, is known for its stunning ring system. These rings are made up of countless particles of ice and rock, creating a dazzling spectacle in the night sky. Studying Saturn's rings provides insights into the planet's formation and evolution.", orbit: "Saturn's Rings" },
      { text: "The exploration of our solar system continues to yield fascinating discoveries. From the icy oceans of Jupiter's moon Europa to the volcanic landscape of Venus, each celestial body offers unique insights into the processes that shape planetary bodies.", orbit: "Solar System Explorations" },
      { text: "Cosmic phenomena such as gamma-ray bursts, pulsars, and quasars challenge our understanding of the universe. These high-energy events and enigmatic objects are often associated with extreme conditions and offer a glimpse into the most mysterious corners of space.", orbit: "Cosmic Phenomena and Mysteries" },
      { text: "Mars, often referred to as the Red Planet, has captured the imagination of scientists and space enthusiasts alike. Recent missions, including the Mars rovers, have revealed a dynamic planet with ancient river valleys, polar ice caps, and a potential history of liquid water.", orbit: "Exploring the Red Planet" },
      { text: "Exoplanets are planets that orbit stars beyond our solar system. Discoveries of exoplanets have revealed a wide range of planetary systems, some of which may harbor conditions suitable for life. Exploring exoplanets brings us closer to understanding the diversity of planetary environments.", orbit: "Exoplanet Discoveries" },
      { text: "Looking deep into space is equivalent to looking back in time. Light from distant galaxies takes millions or even billions of years to reach us. By observing these ancient light sources, astronomers can study the universe's history and evolution over cosmic time scales.", orbit: "Cosmic Time Travel" },
      { text: "The cosmos is teeming with a variety of celestial objects, from colorful nebulae to dazzling star clusters. Each of these objects tells a unique story about the processes that shape galaxies, stars, and the universe as a whole.", orbit: "Beauty of Celestial Objects" },
      { text: "Black holes are regions of spacetime with gravitational forces so strong that nothing, not even light, can escape their grasp. Studying black holes helps us explore the extreme limits of physics and gain insights into the fundamental nature of space and time.", orbit: "Black Hole Mysteries" },
      { text: "The study of planetary formation and evolution provides clues about the conditions that led to the birth of our solar system and the diversity of planetary systems beyond. By examining the building blocks of planets, scientists piece together the story of cosmic origins.", orbit: "Planetary Formation and Evolution" },
      { text: "Dark matter is a mysterious form of matter that does not emit light or energy. Despite its elusiveness, dark matter makes up a significant portion of the universe's mass. Scientists are actively searching for clues to unlock the nature of this enigmatic substance.", orbit: "Dark Matter Secrets" },
      { text: "The boundaries of our universe are marked by intriguing phenomena, such as cosmic microwave background radiation and the observable universe's size and age. These measurements provide insights into the universe's origin and the fundamental forces that govern its evolution.", orbit: "Boundaries of Space" },
      { text: "Dive into the heart of the Orion Nebula, a bustling stellar nursery where new stars are born. The swirling clouds of gas and dust give rise to dazzling star clusters and the famous Trapezium Cluster at its center. Nebulae like this provide a canvas for the birth and evolution of stars.", orbit: "Galactic Wonders: Nebulae and Galaxies" },
      { text: "Astronomers use powerful telescopes to conduct cosmic surveys, capturing vast swaths of the night sky in intricate detail. These surveys reveal the distribution of galaxies, clusters, and superclusters, shedding light on the large-scale structure of the universe.", orbit: "Mapping the Cosmos: Cosmic Surveys" },
      { text: "Behold the beauty of a stellar masterpiece—the Pillars of Creation in the Eagle Nebula. Towering columns of gas and dust create a breathtaking scene where new stars emerge. Astronomical images like this blend artistry and science to reveal the majesty of the cosmos.", orbit: "Celestial Artistry: Stellar Images" },
      { text: "Spiral galaxies, like the majestic Andromeda Galaxy, captivate us with their graceful arms and intricate patterns. Studying spiral galaxies provides insights into their formation, evolution, and the interplay of stars, gas, and dark matter.", orbit: "Spiral Elegance: Spiral Galaxies" },
      { text: "Zoom into a bustling metropolis of stars—a globular cluster, or cluster of galaxies. These dense collections of ancient stars form tightly bound communities that orbit galaxies. By studying globular clusters, astronomers gain clues about the early stages of galaxy formation.", orbit: "Galactic Clusters: Star Cities" },
      { text: "Witness the aftermath of a stellar explosion—a supernova remnant. The intense energy released in a supernova sculpts surrounding gas and dust into intricate structures. Supernovae play a crucial role in dispersing heavy elements into space, enriching future generations of stars.", orbit: "Supernova Spectacles: Exploding Stars" },
      { text: "Explore the realm of massive galaxies, each harboring billions of stars and hosting intricate interactions. Colliding galaxies create breathtaking displays of tidal forces, gas inflows, and starbursts. These cosmic mergers shape the destinies of galaxies.", orbit: "Cosmic Giants: Massive Galaxies" },
      { text: "Peer into the heart of a quasar, a supermassive black hole surrounded by a brilliant accretion disk. Quasars are some of the brightest objects in the universe, emitting immense energy as matter spirals into the black hole. Unraveling the secrets of quasars sheds light on galaxy evolution.", orbit: "Quasar Mysteries: Active Galactic Nuclei" },
      { text: "Enter the enchanting dance of two stars in a binary system. These stellar pairs share an intimate gravitational embrace, orbiting around their common center of mass. Binary stars offer insights into stellar evolution, mass transfer, and the fate of stars.", orbit: "Stellar Dance: Binary Star Systems" },
      { text: "Discover cosmic sculptures formed by the forces of space and time. Supernova remnants, like the Crab Nebula, showcase the explosive power of dying stars. These intricate structures tell tales of stellar demise and the rebirth of new generations of stars.", orbit: "Interstellar Sculptures: Cosmic Sculptures" }
    ]
const tokenizer = new natural.WordTokenizer();
const processedData = labeledData.map(item => ({
  tokens: tokenizer.tokenize(item.text.toLowerCase()),
  orbit: item.orbit
}));

// Create and train the classifier
const classifier = new natural.BayesClassifier();
processedData.forEach(item => classifier.addDocument(item.tokens, item.orbit));
classifier.train();

// Predict the topic for a new post
const newPostText = text;
const classifications = classifier.getClassifications(tokenizer.tokenize(newPostText.toLowerCase()));
const predictedOrbit = classifications[0].label;
const confidence = classifications[0].value;
return ({
    predictedOrbit, confidence
})
}
}
