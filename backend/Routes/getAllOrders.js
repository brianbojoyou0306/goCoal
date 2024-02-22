const router = require("express").Router();
const { User } = require("../Models/user");
router.get("/", async (req, res) => {    
    try{
      User.find({_id:req.query.id}).then(data => {
            res.status(201).send(data)
        }).catch(error => {
            res.status(408).send({ error })
        })
    }catch(error){
        res.send({error})
    }
})
module.exports = router;

