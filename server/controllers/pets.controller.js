const Pet = require("../models/pets.model");



module.exports.findAllPets = (req,res)=>{
    Pet.find()
        .then(allPets=>{

            function SortArray(x, y){
                return x.type.localeCompare(y.type);
            }
            const sortedPets = allPets.sort(SortArray);
            res.json({results: sortedPets})
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.createNewPet = (req,res)=>{
    Pet.create(req.body)
        .then(newPetObj=>{
            res.json({results: newPetObj })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.findOnePet = (req,res)=>{
    Pet.findOne({_id:req.params.id})
        .then(foundPet=>{
            res.json({results: foundPet })
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id }, //find the objects whose _id == req.params.id
        req.body, //req.body is the information from the form to update with
        { new: true, runValidators: true } //new:true means return the newly updated info. 
    )
        .then(updatedPet => {
            res.json({ results: updatedPet })
        })
        .catch(err=>{
            res.json({err:err})
        })
        
}

module.exports.deletePet = (req,res)=>{
    Pet.deleteOne({_id: req.params.id})
        .then(deletedPet =>{
            res.json({results: deletedPet})
        })
        .catch(err=>{
            res.json({err:err})
        })
}
