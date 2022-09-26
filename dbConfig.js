const { MongoClient } = require('mongodb');
const URL = "mongodb://localhost:27017";
const client = new MongoClient(URL);

module.exports = { client };