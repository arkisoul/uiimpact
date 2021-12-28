print("Welcome to Mongosh")

const conn = new Mongo(); // connecting to mongodb server
print('Connected to mongodb server')

const db = conn.getDB("uiimpact"); // retrieving database reference
print('Retrieved db reference', db)

// inserting documents in users collection
const inserted = db.users.insertMany([
  {
    name: "Rohit Sharma",
    email: "rohitsharma@gmail.com",
    phone: 98703002032,
    age: 45,
    height: 170,
    hobbies: ["batting"],
  },
  {
    name: "Suresh Verma",
    email: "sureshverma@gmail.com",
    phone: 9383393939,
    age: 30,
    height: 177,
    hobbies: ["gardening"],
  },
]);
print(inserted)
// read the data from the users collection
const users = db.users.find({})
print(users)
