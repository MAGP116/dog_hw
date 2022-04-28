const router = require("express").Router();
const petController = require("../controllers/pet.controller");


router.get('',async (req,res)=>{
    const pets = await petController.get();
    res.send(pets);
})

router.get('/:id',async (req,res)=>{
    let id = req.params.id;
    const doc = await petController.getPet(id);
    res.send(doc);
})

router.post('', async (req,res)=>{
    const {species, colors,age, gender, size,imagesUrl, id} = req.body;
    const doc = await petController.create(species, colors,age, gender, size,imagesUrl, id);
    res.send(doc);
})

router.put('/:id', async(req,res)=>{
    let id = req.params.id;
    const doc = await petController.update(id, species, colors,age, gender, size,imagesUrl);
    res.send(doc);
})


router.delete('/:id', async(req,res)=>{
    let id = req.params.id;
    await petController.delete(id);
    res.send();
})

module.exports = router;