const mongo = require('../index.js');
const config = require('../config.json');
const assert = require('assert');
describe("Array", () => {
  describe("#indexOf()", () => {
    it("should return -1 when the value is not present", () => {
      assert.equal([1,2,3].indexOf(4), -1)
    })
    it("should return -1 when the value is not present", () => {
      assert.equal([1,2,3].indexOf(4), -1)
    })
  })
  describe("#indexOf()", () => {
    it("should return -1 when the value is not present", () => {
      assert.equal([1,2,3].indexOf(4), -1)
    })
    it("should return -1 when the value is not present", () => {
      assert.equal([1,2,3].indexOf(4), -1)
    })
  })
})
// process.env.dburl = 'mongodb+srv://intugine:NkVPR6VQUEXhyUwYHgQg4hjHspDH5k9a@cluster0-zhjde.mongodb.net';
// process.env.dbname = 'furlenco';
// let db = null;
// mongo(process.env.dburl, process.env.dbname)
//   .then((DB) => {
//     db = DB;
//     console.log('Connnected');
//     return db.distinct('devices', "id")
//     // return db.db('telenitytracking').count('trips');
//     // return db.aggregate('consents', [{$group: {_id: "$status", data: {$first: "$$ROOT"}}}]);
//     // return db.read('tokens', {}, 1, 0, {token: 1, _id: 0})
//   })
//   .then((r) => {
//     console.log(r);
//     db.close();
//     // console.log('Disconnected');
//   })
//   .catch((e) => {
//     console.error('Error', e);
//   });
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// Connection URL
// const url = 'mongodb://localhost:27017';

// Database Name
// const dbName = 'myproject';

// // Use connect method to connect to the server
// MongoClient.connect(process.env.dburl, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(process.env.dbname);
// db.collection('tokens').find().toArray(function(err, docs) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(docs);
//     callback(docs);
//   });
//   // client.close();
// });

// const mongo = require('@intugine-technologies/mongodb')(process.env.dburl, process.env.dbname);
//  let db = null;
// mongo.then((DB) => {
//  db = DB
//  console.log(db)
//  // return db.read('users', {}, 'all')
// })
// .then((r) => {
//  console.log(r)
//  return db.dbInstance.collection('users').find().limit(10).toArray()
// })
// .then((r) => {
//  console.log(r)
//  return db.clientInstance.db('mqtt').collection('users').find().count()
// })
// .then((r) => {
//  console.log(r)
// })
// .catch((e) => {
//  console.error(e)
// })
// console.log('Hi There')