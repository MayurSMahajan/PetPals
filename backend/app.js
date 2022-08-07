const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = "mongodb+srv://m001-student:" + process.env.MONGO_PASS + "@sandbox.fwwfv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function sittersForYourPet(petType) {
    try {
        await client.connect();
        const database = client.db('petpal_db');
        const sitter_collection = database.collection('petsitter');

        const query = { pet_type: petType };
        const cursor = sitter_collection.find(query).limit(3).sort({ rating: -1 });
        const sitters = await cursor.toArray();

        console.log(sitters);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function sittersNearYou(location) {
    try {
        await client.connect();
        const database = client.db('petpal_db');
        const sitter_collection = database.collection('petsitter');

        const query = { location: location };
        const cursor = sitter_collection.find(query).limit(3).sort({ rating: -1 });
        const sitters = await cursor.toArray();

        console.log(sitters);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function cheapSittersNearYou(location) {
    try {
        await client.connect();
        const database = client.db('petpal_db');
        const sitter_collection = database.collection('petsitter');

        const query = { location: location };
        const cursor = sitter_collection.find(query).limit(3).sort({ price: 1 });
        const sitters = await cursor.toArray();

        console.log(sitters);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}



cheapSittersNearYou('Pune').catch(console.dir);



//Import Route
app.use('/verify', require('./routes/verify'));

module.exports = app;