db = db.getSiblingDB("discovery");

db.createCollection("lshw", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Discovery Hardware Data",
         required: [ "bridge",
                     "bus",
                     "communication",
                     "disk",
                     "display",
                     "generic",
                     "input",
                     "memory",
                     "multimedia",
                     "network",
                     "power",
                     "processor",
                     "storage",
                     "system",
                     "volume" 
                  ],
         properties: {
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
            disk: {
               bsonType: "array",
               description: "disk"
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
            storage: {
               bsonType: "array",
               description: "storage"
            },
            system: {
               bsonType: "array",
               description: "system"
            },
            volume: {
               bsonType: "array",
               description: "volume"
            },
         }
      }
   }
} );

db.createCollection( { collmod: "lshw",
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Discovery Hardware Data",
         required: [ "bridge",
                     "bus",
                     "communication",
                     "disk",
                     "display",
                     "generic",
                     "input",
                     "memory",
                     "multimedia",
                     "network",
                     "power",
                     "processor",
                     "storage",
                     "system",
                     "volume" 
                  ],
         properties: {
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
            disk: {
               bsonType: "array",
               description: "disk"
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
            storage: {
               bsonType: "array",
               description: "storage"
            },
            system: {
               bsonType: "array",
               description: "system"
            },
            volume: {
               bsonType: "array",
               description: "volume"
            },
         }
      }
   }
} )