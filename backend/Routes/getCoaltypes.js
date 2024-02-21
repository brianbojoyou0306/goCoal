const router = require("express").Router();
const coalTypes = require("../Models/coal")
router.get("/", async (req, res) => {    
    try{
        coalTypes.find({coaltype:req.query.coaltype}).then(data => {
            res.status(201).send(data)
        }).catch(error => {
            res.status(408).send({ error })
        })
    }catch(error){
        res.send({error})
    }
})
module.exports = router;

