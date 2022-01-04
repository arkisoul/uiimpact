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