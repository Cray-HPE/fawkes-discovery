load('/docker-entrypoint-initdb.d/seedData.js');

db = db.getSiblingDB("discovery");

db.discovery.insertMany(seedData);
db.discoveryOrig.insertMany(seedData);
