# Database
## Relational Database
1. Stores data in tables
    - Each row is a single record
    - Each column represent the field
2. Defines a fixed structure
3. Vertically scalable - (Increase system hardware like cpu, ram)

## NoSql Database
1. They do not follow a fixed structure
2. Horizontally and Vertically scalable
3. Based on how data is stored in NoSql database
    - **Key~Value pair based** - Stores data in form of key value pair
        ex Redis, Dynamo, Riak, Memcached
    - **Document based** - stores data in form of mutliple key value pair in a coherent unit
        ex Amazon SimpleDB, CouchDB, MongoDB, Riak, Lotus Notes, Firestore
    - **Columns based** - stores data in form of rows and columns with dynamic columns
        ex HBase, Cassandra, Hypertable
    - **Graph based** - stores data in form of Nodes and Edges
        ex Neo4J, Infinite Graph, OrientDB, FlockDB

## Mongodb
- Document based database
    RDBMS                   MongoDB
    - Database              - Database
    - Table                 - Collection
    - Rows                  - Document
    - Columns(Fields)       - Fields(keys)
    - Join                  - Embedded documnet

    example
    ### Relation DB
    #### user table
    id     name        age         email           phone        address
    1      John        30          john@mail.com   98765        {{add1, add2, city}, {}, {}}

    #### user_address table
    add1    add2    city    country     pincode     userid

    ### MongoDB
    ```yaml
        {
            "id": 1,
            "name": "John",
            "age": 30,
            "email": "john@mail.com",
            "phone": 987654321,
            "address": {
                "billing": [{
                    "add1": "",
                    "add2": "",
                    "alias":""
                }],
                "shipping": [{
                    "add1": "",
                    "add2": "",
                }]
            }
        }
    ```

# Mongodb Shell Commands
```terminal
mongo // starts mongodb shell, by default it connects to local mongodb server

mongo --host hostname --port portnumber --username username --password
```

## Helper commands
- `db` Prints the current selected database name
- `show databases` to show the list of databases in the connected mongodb server
- `use db` to select a db or create a db if not exist
- `show collections` to show the list of collections in the current db

## Datatypes in Mongodb
- String
- Number
- Boolean
- Date
- Object
- Array
- undefined
- Binary
- ObjectId
    - _id Primary key in a document Type ObjectId
    - *Properties of ObjectId*
        - 12 bytes hexadecimal number
        - First 4 bytes are current timestamp
        - Next 3 bytes are machine id
        - Next 2 bytes are process id of the mongodb server
        - Last 3 bytes are incremental value

## CRUD Operations
### CREATE (Insert) Operation
- insertOne (To insert a single document in a collection)
eg 
```
db.<collection_name>.insertOne({})
db.patients.insertOne({
    name: "Patient name",
    gender: "Male",
    dob: "12-12-1990"
})
```
- insertMany (To insert multiple documet in a collection)
eg
```
db.<collection_name>.insertMany([{}, {}])
db.patients.insertMany([
    {
        name: "Patient name",
        gender: "Male",
        dob: "12-12-1990"
    },
    {
        name: "Another Patient name",
        gender: "Male",
        dob: "12-12-1990"
    },
])
```

### READ operation
- find (To retrieve data from a collection)
eg
```
db.<collection_name>.find();
db.patients.find();
```

    - We can provide an optional query/filter paramter to the find function.
    eg
    ```
        db.patients.find({
            name: "Ramcharan Gupta"
        })
    ```
- findOne => returns the first matching document or null
    eg
    ```
        db.patients.fineOne();
        db.patients.fineOne({});
        db.patients.findOne({
            name: "Ramcharan Gupta"
        })
    ```

### Update operation
- updateOne (Updates a single document. If there are multiple matching documents, it will update only first matching document)
eg
```
db.<collection_name>.updateOne({filter_query}, {updated data}, {options})
db.patients.updateOne({gender: 'male'}, {$set: { weight: 66}}, {$upsert: true})
```
- updateMany (Updates multiple documents that matche the condition/filter query)
eg
```
db.<collection_name>.updateMany({filter_query}, {updated data}, {options})
db.patients.updateMany({gender: 'male'}, {$set: { weight: 66}}, {$upsert: true})
```

### Delete operation
- deleteOne
- deleteMany

findAndModify
findOneAndUpdate
replaceOne
findOneAndReplace
findOneAndDelete

### Further references
- Legacy mongo shell [here](https://docs.mongodb.com/manual/reference/program/mongo/)
- New mongo shell mongosh [here](https://docs.mongodb.com/mongodb-shell/)
- CRUD operation [here](https://docs.mongodb.com/manual/crud/)
- Querying and Projection operators [here](https://docs.mongodb.com/manual/reference/operator/query/)
- Update operators [here](https://docs.mongodb.com/manual/reference/operator/update/)