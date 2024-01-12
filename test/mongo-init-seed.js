discovery = db.getSiblingDB("discovery");
discoveryOrig = db.getSiblingDB("discoveryOrig");

load('seedData.js');

db.discovery.insert(seedData);
db.discoveryOrig.insert(seedData);