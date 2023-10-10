const express = require("express");
const router = express.Router();
const crypto = require("crypto");

createToken = () => {
	let token = crypto.randomBytes(2);
	return token.toString("hex");
}

let animals = [
    {
    animalID:"86512",
    species:"Giraffe",
	name:"Pekka",
    age:5,
	habitat:"Fields"
    },
    {
    animalID:"asdf1742",
    species:"Elephant",
    name:"Matti",
    age:25,
    habitat:"Forest"
    },
    {
    animalID:createToken(),
    species:"Panther",
    name:"Sylvia",
    age:2,
    habitat:"Cages"
    }
];

router.get("/animals",(req,res) => {
    res.status(200).json(animals);
});


router.get("/animals/:animalID",(req,res) => {

    let search = animals.filter(animal => animal.animalID === req.params.animalID ).map((result) => {

        return (res.status(200).json(result))
    })
    if(!req.body.animalID) {
        return res.status(404).json({message:"Cant find animal with that ID"});
    }
    res.search;

});

router.post("/animals",(req,res) => {
	if(req.body.age < 0) {
		return res.status(400).json({message:"Age cant be a negative value"});
	}

    if(!req.body.species) {
    return res.status(400).json({message:"Please input animals species"});
	}

    if(!req.body.name) {
		return res.status(400).json({message:"Please input animals name"});
	}

    if(!req.body.age) {
		return res.status(400).json({message:"Please input animals age"});
	}

    if(!req.body.habitat) {
		return res.status(400).json({message:"Please input animals habitat"});
	}
	let animal = {
        animalID:createToken(),
        species:req.body.species,
        name:req.body.name,
        age:req.body.age,
        habitat:req.body.habitat
	}
	animals.push(animal)
    res.status(201).json({message:"New animal arrived at the zoo"});
})

router.delete("/animals/:animalID",(req,res) => {

    let search1 = animal => animal.animalID === req.params.animalID;
    
    animals.splice(search1, 1)
    
    res.status(200).json("animal retired")
});



/*
router.put('/animals', (req, res) => {
    res.status(200).json('edited succesfully')
});
*/

module.exports = router;

