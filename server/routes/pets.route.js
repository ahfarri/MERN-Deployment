const PetController = require("../controllers/pets.controller");


module.exports = app => {
    app.get("/api/pets", PetController.findAllPets);
    app.post("/api/pets/new", PetController.createNewPet);
    app.get("/api/pets/:id", PetController.findOnePet);
    app.put("/api/pets/update/:id", PetController.updateExistingPet);
    app.delete("/api/pets/delete/:id", PetController.deletePet);

}