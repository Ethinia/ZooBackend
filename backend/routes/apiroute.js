const express = require("express");
//const animalModel = require("../models/animal");
const router = express.Router();

let animals = [
    {
    animalID:1,
    species:"Giraffe",
	name:"Pekka",
    age:5,
	habitat:"Fields"
    },
    {
    animalID:2,
    species:"Panther",
    name:"Sylvia",
    age:2,
    habitat:"Cages"
    }
];

router.get("/test",function(req,res) {
    res.status(200).json(animals);
});

router.post("/zoo/post",function(req,res) {
	if(!req.body) {
		return res.status(400).json({message:"Please fill in information"});
	}
	if(!req.body.animalID) {
		return res.status(400).json({message:"Please input animals ID"});
	}
    if(!req.body.name) {
		return res.status(400).json({message:"Please input animals name"});
	}
	let animal = {
        animalID:req.body.animalID,
        species:req.body.species,
        name:req.body.name,
        age:req.body.age,
        habitat:req.body.habitat
	}
	animals.push(animal)
    res.status(201).json({message:"Created"});
})


router.get('/zoo/search/:animalID', (req, res) => {
    res.status(200).json(animals)
});

router.post('/zoo', (req, res) => {
    res.status(201).json('new animal added')
});

router.put('/zoo', (req, res) => {
    res.status(200).json('edited succesfully')
});

router.delete('/zoo', (req, res) => {
    res.status(200).json('item deleted')
});

module.exports = router;

