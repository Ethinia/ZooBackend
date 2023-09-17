const express = require("express");
const router = express.Router();
const crypto = require("crypto");

createToken = () => {
	let token = crypto.randomBytes(2);
	return token.toString("hex");
}

let animals = [
    {
    animalID:86512,
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

router.get("/zoo",function(req,res) {
    res.status(200).json(animals);
});

router.post("/zoo",function(req,res) {
	if(!req.body) {
		return res.status(400).json({message:"Please fill in information"});
	}
	/*if(!req.body.animalID) {
		return res.status(400).json({message:"Please input animals ID"});
	}
    */
    if(!req.body.name) {
		return res.status(400).json({message:"Please input animals name"});
	}
	let animal = {
        animalID:createToken(),
        species:req.body.species,
        name:req.body.name,
        age:req.body.age,
        habitat:req.body.habitat
	}
	animals.push(animal)
    res.status(201).json({message:"Created"});
})

/*
router.get('/zoo/search/:animalID', (req, res) => {
    res.status(200).json(animals)
});
*/

router.put('/zoo', (req, res) => {
    res.status(200).json('edited succesfully')
});
/*
router.delete("/zoo/:animalID",function(req,res) {
	animals.deleteOne({"animalID":req.params.animalID}, function(err) {
		if(err) {
			console.log("Failed to remove liike. Reason",err);
			return res.status(500).json({message:"Internal server error"})
		}
		return res.status(200).json({message:"Successfully deleted item."});
	})
})
*/


router.delete('/zoo/delete/:name', (req, res) => {
    let search = animals.filter(animal => animal.name === req.params.name ).map((result) => {
        animals.splice(result)
        return (res.status(200).json("animal retired") )
    })

    res.search;
});



//ugly way to make it work
router.get("/zoo/finder/:name",(req,res) => {

    let search = animals.filter(animal => animal.name === req.params.name ).map((result) => {

        return (res.status(200).json(result) )
    })

    res.search;
});



/*
router.get("/zoo/finder/:name",(req,res) => {

    let search = animals.filter(animal => animal.name === req.params.name ).map((result) => {
        if(err) {
			console.log("Failed to find liikkeet. Reason",err);
			return res.status(500).json({message:"Internal server error"})
		}
        return (res.status(200).json(result) )
    })

    res.search;
});
*/

/*
router.get('/api/etsi/:animalID', (req, res) => {
    res.json(animals.filter(animal => animal.animalID === req.params.animalID));
  });
*/

/*
router.get('/api/etsi/:name', (req, res) => {
res.json(animals.filter(animal => animal.animalID === req.params.animalID));
});
*/

/*
let search = animals.filter(animal => animal.name === req.params.name ).map((result) => {

    return (res.status(200).json(result) )
})
*/

 /*
router.get("/zoo/etsi/:animalID",function(req,res) {
	
	animals.find({"animalID":req.params.animalID},function(err,animals) {
		if(err) {
			console.log("Failed to find liikkeet. Reason",err);
			return res.status(500).json({message:"Internal server error"})
		}
		return res.status(200).json(animals);
	})
});
*/


module.exports = router;

