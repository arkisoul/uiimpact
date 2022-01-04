# Mongodb

## Replica Set
    Replica set in Mongodb is a group of `mongod` processes that maintain the same data set.

    Members of a replica set
    1. Primary
    2. Secondary
    3. Arbitary

### Primary Replica
    A replica set must have one and only one primary member/replica.

### Secondary Replica
    A replica set can have one or more than one secondary replicas.
    A replica set can have maximum 50 secondary members. Out of this 50 members, only 7 have the voting rights.

### Arbitary replica
    Arbitary replica does not maintain the data set. However, it has voting rights and can participate in primary selection election.

## Cluster
    A cluster is either a replica set or a sharded cluster

## Sharded Cluster
    A sharded cluster is also commonaly known as horizontal scaling, where data is  distributed across many servers.
    or
    A sharded cluster is a collection of datasets across many shards(servers) in order to achieve horizontal scalability and better performance in read and write operations.

##### Further References
- Replication [here](https://docs.mongodb.com/manual/replication/)
- Sharding [here](https://docs.mongodb.com/manual/sharding/)


## Indexes
    Indexes are special data structures [1] that store a small portion of the collection's data set in an easy to traverse form. The index stores the value of a specific field or set of fields, ordered by the value of the field. The ordering of the index entries supports efficient equality matches and range-based query operations. In addition, MongoDB can return sorted results by using the ordering in the index.

About indexes and there types [here](https://docs.mongodb.com/manual/indexes/)
- Using mongoose [here](https://mongoosejs.com/docs/guide.html#indexes)

    ### Types of Indexes
    - Single Field [here](https://docs.mongodb.com/manual/core/index-single/)
    - Compound Index [here](https://docs.mongodb.com/manual/core/index-compound/)
    - Multikey Index [here](https://docs.mongodb.com/manual/core/index-multikey/)
    - Geospatials Index [here](https://docs.mongodb.com/manual/core/geospatial-indexes/)
    - Text Index [here](https://docs.mongodb.com/manual/core/index-text/)
        Examples using text index [here](https://docs.mongodb.com/manual/reference/operator/query/text/#examples)

## GridFS
    GridFS is a specification for storing and retrieving files that exceed the BSON-document size limit of 16 MB.

    #### When to Use GridFS

    In MongoDB, use GridFS for storing files larger than 16 MB.

    In some situations, storing large files may be more efficient in a MongoDB database than on a system-level filesystem.

    - If your filesystem limits the number of files in a directory, you can use GridFS to store as many files as needed.
    - When you want to access information from portions of large files without having to load whole files into memory, you can use GridFS to recall sections of files without reading the entire file into memory.
    - When you want to keep your files and metadata automatically synced and deployed across a number of systems and facilities, you can use GridFS. When using geographically distributed replica sets, MongoDB can distribute files and their metadata automatically to a number of mongod instances and facilities.

    Do not use GridFS if you need to update the content of the entire file atomically. As an alternative you can store multiple versions of each file and specify the current version of the file in the metadata. You can update the metadata field that indicates "latest" status in an atomic update after uploading the new version of the file, and later remove previous versions if needed.

    Furthermore, if your files are all smaller than the 16 MB BSON Document Size limit, consider storing each file in a single document instead of using GridFS. You may use the BinData data type to store the binary data. See your drivers documentation for details on using BinData.

more information [here](https://docs.mongodb.com/manual/core/gridfs/)
Gridfs Nodejs mongodb driver [here](https://mongodb.github.io/node-mongodb-native/4.2/classes/GridFSBucket.html)
Mongoose Gridfs [here](https://www.topcoder.com/thrive/articles/storing-large-files-in-mongodb-using-gridfs)