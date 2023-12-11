db = db.getSiblingDB("discovery");

var collExists = db.getCollectionNames().indexOf('discovery') > -1;
var collExists = db.getCollectionNames().indexOf('discoveryOrig') > -1;

var validator = {
   $jsonSchema: {
      bsonType: "object",
      title: "Discovery Hardware Data",
      required: [ "blockdevices",
                  "bmc",
                  "bridge",
                  "bus",
                  "communication",
                  "display",
                  "generic",
                  "input",
                  "memory",
                  "multimedia",
                  "network",
                  "power",
                  "processor",
                  "system",
               ],
      properties: {
         blockdevices: {
            bsonType: "array",
            description: "blockdevices"
         },
         bmc: {
            bsonType: "object",
            description: "bmc"
         },
         bridge: {
            bsonType: "array",
            description: "bridge"
         },
         bus: {
            bsonType: "array",
            description: "bus"
         },
         communication: {
            bsonType: "array",
            description: "communication"
         },
         display: {
            bsonType: "array",
            description: "display"
         },
         generic: {
            bsonType: "array",
            description: "generic"
         },
         input: {
            bsonType: "array",
            description: "input"
         },
         memory: {
            bsonType: "array",
            description: "memory"
         },
         multimedia: {
            bsonType: "array",
            description: "multimedia"
         },
         network: {
            bsonType: "array",
            description: "network"
         },
         power: {
            bsonType: "array",
            description: "power"
         },
         processor: {
            bsonType: "array",
            description: "processor"
         },
         system: {
            bsonType: "array",
            description: "system"
         },
      }
   }
};

if (collExists == false) {
   db.createCollection("discovery", {validator: validator});
   db.createCollection("discoveryOrig", {validator: validator});
} else {
   db.runCommand({ collMod: "discovery", "validator": validator });
   db.runCommand({ collMod: "discoveryOrig", "validator": validator });
};