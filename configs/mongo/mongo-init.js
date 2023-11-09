db = db.getSiblingDB("discovery");

db.createCollection("lshw", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Discovery Hardware Data",
         required: [ "id", "class", "description", "product", "vendor", "serial" ],
         properties: {
            id: {
               bsonType: "string",
               description: "system name (hostname)"
            },
            class: {
               bsonType: "string",
               description: "system"
            },
            description: {
               bsonType: "string",
               description: "type of server"
            },
            product: {
               bsonType: "string",
               description: "manufacturer, model, name"
            },
            vendor: {
               bsonType: "string",
               description: "manufacturer"
            },
            serial: {
               bsonType: "string",
               description: "system serial number"
            }
         }
      }
   }
} );