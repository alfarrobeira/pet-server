import pets from "../petList.mjs";

const getAllPets = (req, res) => {
  if (pets) 
    res.send(pets);
  else 
    res.send("Errööör. No pets available.");
};

const getPetTypes = (req, res) => {
  if (pets) {
    // extract types
    res.send(Object.keys(pets));
  } else
    res.json({ error: "No pet types found."})
}

const getPetsForType = (req, res) => {
  const type = req.params.type;

  if (pets?.[type] !== undefined) {
    res.json(pets[type]);
  } else {
    res.json({ error: "No pets for this type." });
  }
};

  const findPet = (type, index) => {
    return pets?.[type][index];
}

const findPetById = (type, id) => {
  return pets?.[type].find(pet => pet.id === id);
}

const getPet = (req, res) => {
  const type = req.params.type;
  const id = req.params.id;

  // // this would access the index in the e.g. dogs array:
  // if (pets?.[type]?.[id] !== undefined)
  //    res.json(pets[type][id]);

  if (pets?.[type] !== undefined) {
    res.json(findPetById(type, parseInt(id)));
  } else {
    res.json({ error: "No pet for provided id." });
  }
};

export { getAllPets, getPetTypes, getPetsForType, getPet };
