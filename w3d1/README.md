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