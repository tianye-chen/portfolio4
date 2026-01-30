require('dotenv').config();

const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

const client = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.get('/', async (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

console.log("MONGODB_URI:", MONGODB_URI);

const run = async () => {
    try {
        await client.connect();
        const dbList = await client.db().admin().listDatabases();
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        console.log("Available databases:", dbList.databases.map(db => db.name));
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);

module.exports = app;