const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = "mongodb+srv://m001-student:" + process.env.MONGO_PASS + "@sandbox.fwwfv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(uri);
}

//Creating Mongoose Schema for PetOwner Collection
const petOwnerSchema = new mongoose.Schema({
  id: String,
  name: String,
  pet_type: String,
  location: String,
  phone:String,
  rating:Number,
  current_requests: [String]
});


//Defining our model
const PetOwner = mongoose.model('petowners', petOwnerSchema);

//Creating Mongoose Schema for PetSitter Collection
const petSitterSchema = new mongoose.Schema({
  id: String,
  name: String,
  pet_type: String,
  location: String,
  price:Number,
  phone:String,
  rating:Number,
  current_requests: [String]
});


//Defining our model
const PetSitter = mongoose.model('petsitter', petSitterSchema);

const petOwner1 = new PetOwner({ 
  id: uuidv4().toString(),
  name : "Mayur Mahajan", 
  pet_type:"Cat",
  location:"Pune", 
  phone:"+91-906-740-5445",
  rating:4,
  current_requests:[]
});

async function savePetOwner(){
  await petOwner1.save();
}

const petSitter1 = new PetSitter({ 
  id: uuidv4().toString(),
  name : "Kaustubh Pardhi", 
  pet_type:"Cat",
  location:"Pune", 
  price:499,
  phone:"+91-906-740-5445",
  rating:4,
  current_requests:[]
});

async function savePetSitter(){
  await petSitter1.save();
}

app.post("/register-owner",function(req,res){
  const petOwner1 = new PetOwner({ 
    id: uuidv4().toString(),
    name : req.body.username, 
    pet_type:req.body.pet_type,
    location:req.body.location, 
    phone:req.body.phone,
    // rating:Number(req.body.rating),
    current_requests:[]
  });
}
);

app.post("/register-sitter",function(req,res){
  const petOwner1 = new PetOwner({ 
    id: uuidv4().toString(),
    name : req.body.username, 
    pet_type:req.body.pet_type,
    location:req.body.location, 
    phone:req.body.phone,
    // rating:Number(req.body.rating),
    current_requests:[]
  });
}
);



async function sittersForYourPet(petType) {
    try {
      await client.connect();
      const database = client.db('petpal_db');
      const sitter_collection = database.collection('petsitter');

      const query = { pet_type: petType };
      const cursor =  sitter_collection.find(query).limit(3).sort({rating: -1});
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
      const cursor =  sitter_collection.find(query).limit(3).sort({rating: -1});
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
      const cursor =  sitter_collection.find(query).limit(3).sort({price : 1});
      const sitters = await cursor.toArray();
        
      console.log(sitters);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}




// cheapSittersNearYou('Pune').catch(console.dir);



//Import Route
app.use('/verify', require('./routes/verify'));

module.exports = app;