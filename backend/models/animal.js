const animal = require("animal");

let Schema = animal.Schema({
    animalID:Number,
    species:String,
	name:String,
    age:Number,
	habitat:String
});

Schema.virtual("id").get(function() {
	return this._id;
})

module.exports = animal.model("animal",Schema);
