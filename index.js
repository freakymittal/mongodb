const Mongo = require('mongodb');

const make_usable_object = (client, dbname) => {
  return {
    objectid: id => (Mongo.ObjectID.isValid(id) ? Mongo.ObjectID(id) : null),
    create: (collection, data) => client.db(dbname)
      .collection(collection)
      .insertMany(
        (data = data = Array.isArray(data) ?
          data.map(i => ({
            ...i,
            createdAt: i.createdAt ?
              new Date(i.createdAt) : new Date()
          })) : [{
            ...data,
            createdAt: data.createdAt ?
              new Date(data.createdAt) : new Date()
          }])
      ),
    read: (
        collection,
        query = {},
        limit = 1,
        offset = 0,
        projection = {},
        sorting = { _id: -1 },
      ) => client.db(dbname)
      .collection(collection)
      .find(query)
      .project(projection)
      .sort(sorting)
      .skip(offset)
      .limit(parseInt(limit, 10) || 0)
      .toArray(),
    update: (collection, query = {}, change = {}, options = {}) => client.db(dbname).collection(collection).updateMany(
        query,
        Object.keys(change).find(i => i.indexOf("$") !== -1) ? { ...change } : {
          $set: { ...change, updatedAt: new Date() },
        },
        options,
      ),
    delete: (collection, query = {}) => client.db(dbname).collection(collection).deleteMany(query),
    count: (collection, query = {}) => client.db(dbname)
      .collection(collection)
      .find(query)
      .count(),
    aggregate: (
        collection,
        pipeline = [],
        options = { allowDiskUse: true },
      ) => client.db(dbname)
      .collection(collection)
      .aggregate(pipeline, options)
      .toArray(),
    close: () => client.close(),
  };
};
module.exports = (dbUrl, dbname, options = {}) => new Promise((resolve, reject) => {
  Mongo.MongoClient.connect(dbUrl, {
    poolSize: 20,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ...options,
  })
    .then(client => resolve({
      ...make_usable_object(client, dbname),
      dbInstance: client.db(dbname),
      db: dbName => make_usable_object(client, dbName),
      clientInstance: client,
    }))
    .catch(e => reject(e));
});