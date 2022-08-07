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

app.post("/register-owner", function (req, res) {
  const name = req.body.name
  const pet_type = req.body.pet_type
  const location =  req.body.location
  const phone = req.body.phone
  const id = uuidv4().toString();

  const petOwner1 = new PetOwner({ 
    id: id,
    name : name,
    pet_type:pet_type,
    location:location, 
    phone:phone,
    current_requests:[]
  });

  try {
    savePetOwner(petOwner1,id)
  } catch (error) {
    console.log(error);
  }
});

async function savePetOwner(petOwner1){
  await petOwner1.save();
}


app.post("/register-sitter", function (req, res) {
  const name = req.body.name
  const pet_type = req.body.pet_type
  const location =  req.body.location
  const phone = req.body.phone
  const charge = req.body.charge
  const id = uuidv4().toString();

  const petSitter1 = new PetSitter({ 
    id: id,
    name : name,
    pet_type:pet_type,
    location:location, 
    phone:phone,
    charge:charge,
    current_requests:[]
  });

  try {
    savePetSitter(petSitter1)
  } catch (error) {
    console.log(error);
  }
});

async function savePetSitter(petSitter1){
  await petSitter1.save();
}

app.get("/get-owner", function(req, response){
  const owner = PetOwner.findOne({},(err,res)=>{
    if(err){
      console.log(err)
    }
    else{
      response.send(res);
    }
  });
});

app.get("/get-sitter", function(req, response){
  const sitter = PetSitter.findOne({},(err,res)=>{
    if(err){
      console.log(err)
    }
    else{
      response.send(res);
    }
  });
});

app.get("/get-sitter-pet", function(req, response){

  const pet_type = "Cats";

  const sitter = PetSitter.find({pet_type:pet_type},(err,res)=>{
    if(err){
      console.log(err)
    }
    else{
      response.send(res);
    }
  });
});


app.get("/get-sitter-near", function(req, response){

  const pet_type = "Pune";

  const sitter = PetSitter.find({pet_type:pet_type},(err,res)=>{
    if(err){
      console.log(err)
    }
    else{
      response.send(res);
    }
  });
});

async function savePetSitter(petSitter1){
  await petSitter1.save();
}


//Import Route
// app.use('/verify', require('./routes/verify'));

module.exports = app;